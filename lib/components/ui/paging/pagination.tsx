import {Button, Icon, Typography} from '@/components';
import {cn} from '@/utils';
import {VariantProps, cva} from 'class-variance-authority';
import {
    ComponentProps,
    ReactNode,
    createContext,
    useContext,
    useReducer, useEffect,
} from 'react';

const PaginationStyles = cva(
    ['flex', 'items-center', 'justify-center', 'space-x-2'],
    {
        variants: {
            variant: {
                default: 'pagination--default',
                advance: 'pagination--primary',
                simple: 'pagination--secondary',
            },
            size: {
                small: 'text-sm',
                medium: 'text-base',
                large: 'text-lg',
            },
        },
        defaultVariants: {
            size: 'medium',
            variant: 'default',
        },
    }
);

// Define action types for better type safety
type PaginationAction =
    | { type: 'next' }
    | { type: 'previous' }
    | { type: 'first' }
    | { type: 'last' }
    | { type: 'set'; index: number };

// First, let's define a proper type for the context
interface PaginationContextType {
    index: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
    dispatch: (action: PaginationAction) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

// Add a custom hook for using the pagination context
export const usePagination = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('Pagination components must be used within a Pagination.Root');
    }
    return context;
};

export interface PaginationProps
    extends ComponentProps<'div'>,
        VariantProps<typeof PaginationStyles> {
    pageSize?: number;
    hasNext: boolean;
    hasPrevious: boolean;
    total: number;
    index: number;
    onChangeIndex?: (index: number) => void;
}

export const Pagination = ({
                               variant,
                               size,
                               pageSize,
                               hasNext,
                               hasPrevious,
                               total,
                               index,
                               onChangeIndex,
                               className,
                               children,
                               ...props
                           }: PaginationProps) => {
    const [state, dispatch] = useReducer(
        (state: Omit<PaginationContextType, 'dispatch'>, action: PaginationAction) => {
            let newIndex = state.index;

            switch (action.type) {
                case 'next':
                    newIndex = Math.min(state.index + 1, state.total - 1);
                    break;
                case 'previous':
                    newIndex = Math.max(state.index - 1, 0);
                    break;
                case 'first':
                    newIndex = 0;
                    break;
                case 'last':
                    newIndex = state.total - 1;
                    break;
                case 'set':
                    newIndex = Math.max(0, Math.min(action.index, state.total - 1));
                    break;
            }

            return {
                ...state,
                index: newIndex,
                hasNext: newIndex < state.total - 1,
                hasPrevious: newIndex > 0,
            };
        },
        {
            index,
            total,
            hasNext: index < total - 1,
            hasPrevious: index > 0,
        }
    );

    useEffect(() => {
        onChangeIndex?.(state.index);
    }, [state]);


    return (
        <PaginationContext.Provider value={{
            ...state,
            dispatch
        }}>
            <div aria-label="Pagination" className={cn(PaginationStyles({variant, size, className}))} {...props}>
                {children ? children : (
                    <>
                        <Pagination.First/>
                        <Pagination.Previous/>
                        <Pagination.Simple/>
                        <Pagination.Next/>
                        <Pagination.Last/>
                    </>
                )}
            </div>
        </PaginationContext.Provider>
    );
};

Pagination.displayName = 'Pagination';


Pagination.Simple = ({children}: { children?: ReactNode }) => {
    const {index, total} = usePagination();
    return (
        <Typography variant="body" aria-label="page">
            {children ? children : (
                <>{index + 1} of {total}</>
            )}
        </Typography>
    );
};

Pagination.First = () => {
    const {hasPrevious, dispatch} = usePagination();
    return (
        <Button
            variant="ghost"
            aria-label="First"
            disabled={!hasPrevious}
            size="small"
            onClick={() => dispatch({type: 'first'})}
        >
            <Icon name="arrow-first" size="small"/>
        </Button>
    );
};

Pagination.Previous = () => {
    const {hasPrevious, dispatch} = usePagination();
    return (
        <Button
            variant="ghost"
            aria-label="Previous"
            disabled={!hasPrevious}
            size="small"
            onClick={() => dispatch({type: 'previous'})}
        >
            <Icon name="arrow-left" size="small"/>
        </Button>
    );
};

Pagination.Last = () => {
    const {hasNext, dispatch} = usePagination();
    return (
        <Button
            variant="ghost"
            aria-label="Last"
            disabled={!hasNext}
            size="small"
            onClick={() => dispatch({type: 'last'})}
        >
            <Icon name="arrow-last" size="small"/>
        </Button>
    );
};

Pagination.Next = () => {
    const {hasNext, dispatch} = usePagination();
    return (
        <Button
            variant="ghost"
            aria-label="Next"
            disabled={!hasNext}
            size="small"
            onClick={() => dispatch({type: 'next'})}
        >
            <Icon name="arrow-right" size="small"/>
        </Button>
    );
};

Pagination.Items = () => {
    const {index, total, dispatch} = usePagination();

    // render at most 5 buttons arround index between 1 and total
    const buttons = [];

    let start = Math.max(0, Math.min(index - 2, total - 5));

    for (let i = 0; i < 5 && start + i < total; i++) {
        const selected = (start + i) === index

        buttons.push(
            <Button
                key={start + i + 1}
                as={selected ? 'button' : 'a'}
                aria-label={`Page ${start + i + 1}`}
                disabled={selected}
                className={selected ? 'bg-primary-500 text-white' : ''}
                size="small"
                onClick={() => dispatch({type: 'set', index: start + i})}
            >
                {start + i + 1}
            </Button>
        );
    }

    return buttons;
};
