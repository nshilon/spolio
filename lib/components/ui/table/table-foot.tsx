import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

export interface TableFootProps extends ComponentProps<'tfoot'> {}

/**
 * TableFoot component for the footer section of a table
 * 
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>...</TableHead>
 *   <TableBody>...</TableBody>
 *   <TableFoot>
 *     <TableRow>
 *       <TableCell>Total</TableCell>
 *       <TableCell>$100.00</TableCell>
 *     </TableRow>
 *   </TableFoot>
 * </Table>
 * ```
 */
const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        className={cn(
          'bg-[var(--table-footer-bg)] text-[var(--table-footer-text-color)] font-[var(--table-header-font-weight)]',
          className
        )}
        {...props}
      />
    );
  }
);

TableFoot.displayName = 'TableFoot';

export default TableFoot;
