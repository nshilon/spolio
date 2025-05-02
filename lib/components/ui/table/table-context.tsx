import { createContext } from 'react';
import { TableVariants } from './table';

interface TableContextValue extends TableVariants {}

export const TableContext = createContext<TableContextValue>({
  variant: 'default',
  size: 'md',
  striped: false,
  hoverable: true,
});
