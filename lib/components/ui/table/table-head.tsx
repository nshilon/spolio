import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

export interface TableHeadProps extends ComponentProps<'thead'> {}

/**
 * TableHead component for the header section of a table
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
const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn(
          'bg-[var(--table-header-bg)] text-[var(--table-header-text-color)] font-[var(--table-header-font-weight)]',
          className
        )}
        {...props}
      />
    );
  }
);

TableHead.displayName = 'TableHead';

export default TableHead;
