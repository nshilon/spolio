import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef, useState } from 'react';
import { TabsContext } from './tabs-context';

import '@/design-tokens/components/tabs.css';

// Define the tabs variants using CVA
const tabsVariants = cva(
  [
    'tabs',
    'w-full',
  ],
  {
    variants: {
      variant: {
        default: 'tabs--default',
        underline: 'tabs--underline',
        pills: 'tabs--pills',
      },
      size: {
        sm: 'tabs--sm',
        md: 'tabs--md',
        lg: 'tabs--lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type TabsVariants = VariantProps<typeof tabsVariants>;

export interface TabsProps extends ComponentProps<'div'>, TabsVariants {
  /**
   * The controlled value of the tab to activate
   */
  value?: string;
  /**
   * The default value of the tab to activate (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when the active tab changes
   */
  onValueChange?: (value: string) => void;
}

/**
 * Tabs component for organizing content into separate views
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
const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({
    className,
    variant,
    size,
    value,
    defaultValue,
    onValueChange,
    children,
    ...props
  }, ref) => {
    // Use internal state if component is uncontrolled
    const [tabValue, setTabValue] = useState(defaultValue || '');
    
    // Determine if component is controlled or uncontrolled
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : tabValue;
    
    // Handle value change
    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setTabValue(newValue);
      }
      onValueChange?.(newValue);
    };

    // Create context value
    const contextValue = {
      value: currentValue,
      onValueChange: handleValueChange,
      variant,
      size,
    };

    return (
      <TabsContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(tabsVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
