import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';
import { useTabsContext } from './tabs-context';

export interface TabsListProps extends ComponentProps<'div'> {}

/**
 * TabsList component for containing tab triggers
 * 
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content for Tab 1</TabsContent>
 *   <TabsContent value="tab2">Content for Tab 2</TabsContent>
 * </Tabs>
 * ```
 */
const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabsContext();
    
    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          'tabs-list',
          'flex',
          'gap-[var(--tabs-list-gap)]',
          'p-[var(--tabs-list-padding)]',
          'bg-[var(--tabs-list-background)]',
          'rounded-[var(--tabs-list-border-radius)]',
          variant === 'underline' && 'border-b border-[var(--tabs-border-color)]',
          variant === 'pills' && 'bg-gray-100 dark:bg-gray-800 p-1 rounded-[var(--tabs-border-radius)]',
          className
        )}
        {...props}
      />
    );
  }
);

TabsList.displayName = 'TabsList';

export default TabsList;
