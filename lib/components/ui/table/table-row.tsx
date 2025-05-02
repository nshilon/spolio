import { cn } from '@/utils';
import { ComponentProps, forwardRef, useContext } from 'react';
import { TableContext } from './table-context';

export interface TableRowProps extends ComponentProps<'tr'> {
  /**
   * Whether this row is a header row
   */
  isHeader?: boolean;
}

/**
 * TableRow component for rows within a table
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
 * </Table>
 * ```
 */
const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, isHeader = false, ...props }, ref) => {
    const { striped, hoverable } = useContext(TableContext);

    return (
      <tr
        ref={ref}
        className={cn(
          // Apply border styles
          'border-b border-[var(--table-border-color)]',
          // Apply hover styles if hoverable
          hoverable && !isHeader && 'hover:bg-[var(--table-row-hover-bg)]',
          // Apply striped styles if striped
          striped && !isHeader && 'even:bg-[var(--table-striped-bg)]',
          className
        )}
        {...props}
      />
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
