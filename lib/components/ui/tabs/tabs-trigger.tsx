import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';
import { useTabsContext } from './tabs-context';

export interface TabsTriggerProps extends ComponentProps<'button'> {
  /**
   * The value of the tab
   */
  value: string;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

/**
 * TabsTrigger component for individual tab buttons
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
const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, disabled = false, children, ...props }, ref) => {
    const { value: selectedValue, onValueChange, variant, size } = useTabsContext();
    const isSelected = selectedValue === value;
    
    // Handle click
    const handleClick = () => {
      if (!disabled) {
        onValueChange(value);
      }
    };
    
    // Determine size-specific classes
    const sizeClasses = {
      sm: 'text-[var(--tabs-size-sm-font-size)] px-[var(--tabs-size-sm-padding-x)] py-[var(--tabs-size-sm-padding-y)]',
      md: 'text-[var(--tabs-size-md-font-size)] px-[var(--tabs-size-md-padding-x)] py-[var(--tabs-size-md-padding-y)]',
      lg: 'text-[var(--tabs-size-lg-font-size)] px-[var(--tabs-size-lg-padding-x)] py-[var(--tabs-size-lg-padding-y)]',
    }[size || 'md'];
    
    // Determine variant-specific classes
    const variantClasses = {
      default: cn(
        isSelected && 'bg-[var(--tabs-trigger-active-background)] text-[var(--tabs-trigger-active-text)] border-[var(--tabs-trigger-active-border)]',
        !isSelected && 'bg-[var(--tabs-trigger-default-background)] text-[var(--tabs-trigger-default-text)] hover:bg-[var(--tabs-trigger-hover-background)] hover:text-[var(--tabs-trigger-hover-text)]'
      ),
      underline: cn(
        'border-b-[var(--tabs-underline-border-width)] border-transparent',
        isSelected && 'border-b-[var(--tabs-underline-active-border-color)] text-[var(--tabs-trigger-active-text)]',
        !isSelected && 'text-[var(--tabs-trigger-default-text)] hover:text-[var(--tabs-trigger-hover-text)]'
      ),
      pills: cn(
        'rounded-[var(--tabs-trigger-border-radius)]',
        isSelected && 'bg-white dark:bg-gray-700 text-[var(--tabs-trigger-active-text)] shadow-sm',
        !isSelected && 'text-[var(--tabs-trigger-default-text)] hover:text-[var(--tabs-trigger-hover-text)]'
      ),
    }[variant || 'default'];
    
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isSelected}
        aria-controls={`panel-${value}`}
        id={`tab-${value}`}
        tabIndex={isSelected ? 0 : -1}
        disabled={disabled}
        className={cn(
          'tabs-trigger',
          'font-[var(--tabs-trigger-font-weight)]',
          'transition-[var(--tabs-trigger-transition)]',
          'rounded-[var(--tabs-trigger-border-radius)]',
          'focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:text-[var(--tabs-trigger-disabled-text)]',
          sizeClasses,
          variantClasses,
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export default TabsTrigger;
