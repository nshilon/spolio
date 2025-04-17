import {cva} from "class-variance-authority";
import {cn} from "@/utils";
import {Button, Icon, Typography} from "@/components";

const PaginationStyles = cva(['flex', 'items-center', 'justify-center', 'space-x-2'], {
    variants: {
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

export interface PaginationProps extends React.ComponentProps<'div'> {
    size?: 'small' | 'medium' | 'large';
    pageSize: number;
    index: number;
    total: number;
    onChangeIndex: (page: number) => void;
    hasNext?: boolean;
    hasPrevious?: boolean;
}

export const Pagination = ({ size, pageSize,
                               hasNext, hasPrevious, total, index, onChangeIndex, className, ...props }: PaginationProps) => {
    const strokeWidth = (enabled: boolean) => enabled ? 3 : 1

    return (
        <div aria-label="Pagination" className={cn(PaginationStyles({ size, className }))} {...props}>
            <Button variant="ghost" size="small" onClick={() => onChangeIndex(0)}
                    disabled={!hasPrevious}>
                <Icon name="arrow-first" size="small" className={`[stroke-width:${strokeWidth(!!hasPrevious)}]`} />
            </Button>

            <Button variant="ghost"
                    aria-label="Previous"
                    size="small" onClick={() => onChangeIndex(index - 1)} disabled={!hasPrevious}>
                <Icon name="arrow-left" size="small" className={`[stroke-width:${strokeWidth(!!hasPrevious)}]`} />
            </Button>

            {/* Your pagination content here */}
            <Typography className="mb-0" aria-label="Page"><b>{index + 1}</b> of {total}</Typography>

            <Button variant="ghost"
                    aria-label="Next"
                    size="small" onClick={() => onChangeIndex(index + 1)} disabled={!hasNext}>
                <Icon name="arrow-right" size="small" className={`[stroke-width:${strokeWidth(!!hasNext)}]`} />
            </Button>

            <Button variant="ghost"
                    aria-label="Last"
                    size="small" onClick={() => onChangeIndex(total - 1)} disabled={!hasNext}>
                <Icon name="arrow-last" size="small" className={`[stroke-width:${strokeWidth(!!hasNext)}]`} />
            </Button>
        </div>
    );
};
