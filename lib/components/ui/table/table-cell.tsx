import { cn } from '@/utils';
import { ComponentProps, ElementType, forwardRef, useContext } from 'react';
import { TableContext } from './table-context';

export interface TableCellProps extends ComponentProps<'td'> {
  /**
   * The element type to render as
   * @default 'td'
   */
  as?: ElementType;
  /**
   * Whether this cell is a header cell
   * @default false
   */
  isHeader?: boolean;
  /**
   * Alignment of the cell content
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Whether this cell should take up the remaining space
   * @default false
   */
  expand?: boolean;
}

/**
 * TableCell component for cells within a table row
 *
 * @example
 * ```tsx
 * <TableRow>
 *   <TableCell>John Doe</TableCell>
 *   <TableCell align="right">$100.00</TableCell>
 * </TableRow>
 * ```
 */
const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      className,
      as: Component = 'td',
      isHeader = false,
      align = 'left',
      expand = false,
      ...props
    },
    ref
  ) => {
    const { size } = useContext(TableContext);

    // Determine padding based on size
    const paddingClass = {
      sm: 'p-[var(--table-size-sm-padding)]',
      md: 'p-[var(--table-size-md-padding)]',
      lg: 'p-[var(--table-size-lg-padding)]',
    }[size || 'md'];

    // Determine text alignment
    const alignClass = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    }[align];

    return (
      <Component
        ref={ref}
        className={cn(
          paddingClass,
          alignClass,
          expand && 'w-full',
          isHeader && 'font-[var(--table-header-font-weight)]',
          className
        )}
        {...(isHeader && { scope: 'col' })}
        {...props}
      />
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
