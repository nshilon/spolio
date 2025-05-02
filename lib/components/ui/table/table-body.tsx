import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

export interface TableBodyProps extends ComponentProps<'tbody'> {}

/**
 * TableBody component for the body section of a table
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>...</TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn(
          'bg-[var(--table-body-bg)] text-[var(--table-body-text-color)]',
          className
        )}
        {...props}
      />
    );
  }
);

TableBody.displayName = 'TableBody';

export default TableBody;
