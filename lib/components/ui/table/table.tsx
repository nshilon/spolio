import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { TableContext } from './table-context';

import '@/design-tokens/components/table.css';

// Define the table variants using CVA
const tableVariants = cva(
  [
    'w-full',
    'border-collapse',
    'text-left',
    'overflow-hidden',
  ],
  {
    variants: {
      variant: {
        default: 'border border-[var(--table-border-color)] rounded-[var(--table-border-radius)]',
        bordered: 'border border-[var(--table-border-color)] rounded-[var(--table-border-radius)]',
        borderless: '',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      striped: {
        true: '',
        false: '',
      },
      hoverable: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      striped: false,
      hoverable: true,
    },
  }
);

export type TableVariants = VariantProps<typeof tableVariants>;

export interface TableProps extends ComponentProps<'table'>, TableVariants {
  caption?: string;
  captionSide?: 'top' | 'bottom';
}

/**
 * Table component for displaying tabular data
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell as="th">Name</TableCell>
 *       <TableCell as="th">Email</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
const Table = forwardRef<HTMLTableElement, TableProps>(
  ({
    className,
    variant,
    size,
    striped,
    hoverable,
    caption,
    captionSide = 'bottom',
    children,
    ...props
  }, ref) => {
    // Create context value from props
    const contextValue = {
      variant,
      size,
      striped,
      hoverable,
    };

    return (
      <TableContext.Provider value={contextValue}>
        <div className="overflow-x-auto">
          <table
            ref={ref}
            className={cn(tableVariants({ variant, size, striped, hoverable }), className)}
            {...props}
          >
            {caption && (
              <caption className={cn(
                'text-sm text-gray-500 dark:text-gray-400 p-2',
                captionSide === 'top' ? 'caption-top' : 'caption-bottom'
              )}>
                {caption}
              </caption>
            )}
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';

export default Table;
