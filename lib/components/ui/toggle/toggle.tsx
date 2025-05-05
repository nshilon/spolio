import { cn } from '@/utils';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

import '@/design-tokens/components/toggle.css';

// Define the toggle variants using CVA
const toggleVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer rounded-full border',
    'transition-colors focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'focus-visible:ring-[var(--toggle-focus-ring-color)]',
    'border-[var(--toggle-track-border-width)]',
    'rounded-[var(--toggle-track-border-radius)]',
    'transition-[var(--toggle-track-transition)]',
  ],
  {
    variants: {
      size: {
        sm: 'h-[var(--toggle-height-sm)] w-[var(--toggle-width-sm)]',
        md: 'h-[var(--toggle-height-md)] w-[var(--toggle-width-md)]',
        lg: 'h-[var(--toggle-height-lg)] w-[var(--toggle-width-lg)]',
      },
      variant: {
        default: '',
        primary: '',
        success: 'data-[state=checked]:bg-success-500 data-[state=checked]:border-success-600',
        danger: 'data-[state=checked]:bg-danger-500 data-[state=checked]:border-danger-600',
        warning: 'data-[state=checked]:bg-warning-500 data-[state=checked]:border-warning-600',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
    compoundVariants: [
      {
        variant: 'default',
        className: [
          'data-[state=unchecked]:bg-[var(--toggle-track-bg-unchecked)]',
          'data-[state=unchecked]:border-[var(--toggle-track-border-unchecked)]',
          'data-[state=checked]:bg-[var(--toggle-track-bg-checked)]',
          'data-[state=checked]:border-[var(--toggle-track-border-checked)]',
          'disabled:bg-[var(--toggle-track-bg-disabled)]',
          'disabled:border-[var(--toggle-track-border-disabled)]',
        ],
      },
      {
        variant: 'primary',
        className: [
          'data-[state=unchecked]:bg-[var(--toggle-track-bg-unchecked)]',
          'data-[state=unchecked]:border-[var(--toggle-track-border-unchecked)]',
          'data-[state=checked]:bg-[var(--toggle-track-bg-checked)]',
          'data-[state=checked]:border-[var(--toggle-track-border-checked)]',
          'disabled:bg-[var(--toggle-track-bg-disabled)]',
          'disabled:border-[var(--toggle-track-border-disabled)]',
        ],
      },
    ],
  }
);

// Define the thumb variants using CVA
const thumbVariants = cva(
  [
    'pointer-events-none block rounded-full bg-[var(--toggle-thumb-bg)]',
    'shadow-[var(--toggle-thumb-shadow)] ring-0 transition-transform',
    'rounded-[var(--toggle-thumb-border-radius)]',
    'transition-[var(--toggle-thumb-transition)]',
    'disabled:bg-[var(--toggle-thumb-bg-disabled)]',
  ],
  {
    variants: {
      size: {
        sm: 'h-[calc(var(--toggle-height-sm)_-_var(--toggle-track-padding)_*_2)] w-[calc(var(--toggle-height-sm)_-_var(--toggle-track-padding)_*_2)]',
        md: 'h-[calc(var(--toggle-height-md)_-_var(--toggle-track-padding)_*_2)] w-[calc(var(--toggle-height-md)_-_var(--toggle-track-padding)_*_2)]',
        lg: 'h-[calc(var(--toggle-height-lg)_-_var(--toggle-track-padding)_*_2)] w-[calc(var(--toggle-height-lg)_-_var(--toggle-track-padding)_*_2)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// Define the thumb transform variants
const thumbTransformVariants = {
  sm: 'translate-x-[calc(var(--toggle-width-sm)_-_var(--toggle-height-sm))]',
  md: 'translate-x-[calc(var(--toggle-width-md)_-_var(--toggle-height-md))]',
  lg: 'translate-x-[calc(var(--toggle-width-lg)_-_var(--toggle-height-lg))]',
};

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  /**
   * Label for the toggle. If provided, it will be used for accessibility.
   */
  label?: string;
  /**
   * Whether to show the label next to the toggle.
   */
  showLabel?: boolean;
  /**
   * Position of the label relative to the toggle.
   */
  labelPosition?: 'left' | 'right';
}

/**
 * Toggle component for switching between two states
 *
 * @example
 * ```tsx
 * <Toggle />
 * <Toggle checked={isEnabled} onCheckedChange={setIsEnabled} />
 * <Toggle size="lg" variant="success" />
 * <Toggle label="Enable notifications" showLabel />
 * ```
 */
const Toggle = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  ToggleProps
>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      label,
      showLabel = false,
      labelPosition = 'right',
      ...props
    },
    ref
  ) => {
    // Generate a unique ID for the toggle
    const id = React.useId();
    const labelId = `${id}-label`;

    // Determine the thumb transform class based on size
    const thumbTransform = thumbTransformVariants[size as keyof typeof thumbTransformVariants] || thumbTransformVariants.md;

    return (
      <div className={cn('flex items-center gap-2', {
        'flex-row-reverse': labelPosition === 'left',
      })}>
        <SwitchPrimitive.Root
          className={cn(toggleVariants({ size, variant, className }))}
          id={id}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          ref={ref}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              thumbVariants({ size }),
              'block ',
              'transform-origin-left translate-0',
              `data-[state=checked]:transform-origin-right`,
              `data-[state=checked]:translate-x-[100%]`
            )}
          />
        </SwitchPrimitive.Root>
        {label && showLabel && (
          <label
            id={labelId}
            htmlFor={id}
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
