import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';
import { useTabsContext } from './tabs-context';

export interface TabsContentProps extends ComponentProps<'div'> {
  /**
   * The value of the tab this content belongs to
   */
  value: string;
  /**
   * Whether to force render the content even when not active
   */
  forceMount?: boolean;
}

/**
 * TabsContent component for tab panel content
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
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, forceMount, children, ...props }, ref) => {
    const { value: selectedValue } = useTabsContext();
    const isSelected = selectedValue === value;
    
    // If not selected and not forcing mount, don't render
    if (!isSelected && !forceMount) {
      return null;
    }
    
    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`panel-${value}`}
        aria-labelledby={`tab-${value}`}
        hidden={!isSelected}
        tabIndex={isSelected ? 0 : -1}
        className={cn(
          'tabs-content',
          'p-[var(--tabs-content-padding)]',
          'bg-[var(--tabs-content-background)]',
          'rounded-[var(--tabs-content-border-radius)]',
          'focus:outline-none',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';

export default TabsContent;
