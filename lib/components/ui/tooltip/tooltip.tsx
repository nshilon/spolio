import { cn } from '@/utils';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import '@/design-tokens/components/tooltip.css';

// Define the tooltip content variants using CVA
export const tooltipContentVariants = cva(
  [
    'tooltip-content',
    'z-[var(--tooltip-z-index)]',
    'max-w-[var(--tooltip-max-width)]',
    'px-[var(--tooltip-padding-x)]',
    'py-[var(--tooltip-padding-y)]',
    'text-[var(--tooltip-font-size)]',
    'leading-[var(--tooltip-line-height)]',
    'font-[var(--tooltip-font-weight)]',
    'rounded-[var(--tooltip-border-radius)]',
    'border-[var(--tooltip-border-width)]',
    'shadow-md',
    'animate-in',
    'fade-in-0',
    'zoom-in-95',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--tooltip-default-background)]',
          'text-[var(--tooltip-default-text)]',
          'border-[var(--tooltip-default-border)]',
        ],
        light: [
          'bg-[var(--tooltip-light-background)]',
          'text-[var(--tooltip-light-text)]',
          'border-[var(--tooltip-light-border)]',
        ],
        primary: [
          'bg-[var(--tooltip-primary-background)]',
          'text-[var(--tooltip-primary-text)]',
          'border-[var(--tooltip-primary-border)]',
        ],
        success: [
          'bg-[var(--tooltip-success-background)]',
          'text-[var(--tooltip-success-text)]',
          'border-[var(--tooltip-success-border)]',
        ],
        warning: [
          'bg-[var(--tooltip-warning-background)]',
          'text-[var(--tooltip-warning-text)]',
          'border-[var(--tooltip-warning-border)]',
        ],
        danger: [
          'bg-[var(--tooltip-danger-background)]',
          'text-[var(--tooltip-danger-text)]',
          'border-[var(--tooltip-danger-border)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Create a TooltipProvider component
const TooltipProvider = TooltipPrimitive.Provider;

// Create a TooltipRoot component
const Tooltip = TooltipPrimitive.Root;

// Create a TooltipTrigger component
const TooltipTrigger = TooltipPrimitive.Trigger;

// Create a TooltipContent component with variants
export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  /**
   * Whether to hide the arrow
   */
  hideArrow?: boolean;
}

const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    { className, variant, hideArrow = false, sideOffset = 4, ...props },
    ref
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ variant }), className)}
      {...props}
    >
      {!hideArrow && (
        <TooltipPrimitive.Arrow
          className={cn(
            'fill-current',
            variant === 'default' && 'fill-[var(--tooltip-default-background)]',
            variant === 'light' && 'fill-[var(--tooltip-light-background)]',
            variant === 'primary' && 'fill-[var(--tooltip-primary-background)]',
            variant === 'success' && 'fill-[var(--tooltip-success-background)]',
            variant === 'warning' && 'fill-[var(--tooltip-warning-background)]',
            variant === 'danger' && 'fill-[var(--tooltip-danger-background)]',
            'h-[var(--tooltip-arrow-size)] w-[var(--tooltip-arrow-size)]'
          )}
        />
      )}
        {props.children}
    </TooltipPrimitive.Content>
  )
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
