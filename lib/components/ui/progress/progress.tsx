import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const progressVariants = cva(
  [
    'w-full',
    'overflow-hidden',
    'bg-neutral-200',
    'dark:bg-neutral-700',
    'rounded-full',
  ],
  {
    variants: {
      size: {
        small: 'h-1',
        medium: 'h-2',
        large: 'h-4',
      },
      variant: {
        default: '',
        primary: '',
        secondary: '',
      },
      color: {
        default: '',
        primary: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
    compoundVariants: [
      {
        color: 'default',
        className: 'text-neutral-600 dark:text-neutral-400',
      },
      {
        color: 'primary',
        className: 'text-primary-600 dark:text-primary-400',
      },
      {
        color: 'success',
        className: 'text-success-600 dark:text-success-400',
      },
      {
        color: 'warning',
        className: 'text-warning-600 dark:text-warning-400',
      },
      {
        color: 'danger',
        className: 'text-danger-600 dark:text-danger-400',
      },
    ],
    defaultVariants: {
      size: 'medium',
      variant: 'default',
      color: 'primary',
    },
  }
);

const progressIndicatorVariants = cva(
  ['h-full', 'transition-all', 'duration-300', 'ease-in-out'],
  {
    variants: {
      color: {
        default: 'bg-neutral-600 dark:bg-neutral-400',
        primary: 'bg-primary-600 dark:bg-primary-400',
        success: 'bg-success-600 dark:bg-success-400',
        warning: 'bg-warning-600 dark:bg-warning-400',
        danger: 'bg-danger-600 dark:bg-danger-400',
      },
      indeterminate: {
        true: 'animate-progress-indeterminate w-1/3',
      },
    },
    defaultVariants: {
      color: 'primary',
      indeterminate: false,
    },
  }
);

export interface ProgressProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    VariantProps<typeof progressVariants> {
  /**
   * The current value of the progress indicator
   */
  value?: number;
  /**
   * The maximum value of the progress indicator
   * @default 100
   */
  max?: number;
  /**
   * Whether to show the progress as indeterminate
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Whether to show a label with the progress percentage
   * @default false
   */
  showLabel?: boolean;
  /**
   * Custom label format function
   */
  formatLabel?: (value: number, max: number) => string;
}

/**
 * Progress component for displaying progress bars
 */
const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size,
      variant,
      color,
      indeterminate = false,
      showLabel = false,
      formatLabel,
      ...props
    },
    ref
  ) => {
    // Calculate the width percentage for the progress indicator
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    // Format the label
    const label = formatLabel
      ? formatLabel(value, max)
      : `${Math.round(percentage)}%`;

    return (
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuetext={indeterminate ? undefined : label}
        aria-label={props['aria-label'] || 'Progress'}
        aria-busy={indeterminate}
        className={cn('relative', className)}
        ref={ref}
        {...props}
      >
        <div className={cn(progressVariants({ size, variant, color }))}>
          <div
            aria-label="progress-indicator"
            className={cn(
              progressIndicatorVariants({
                color,
                indeterminate,
              })
            )}
            style={{
              width: indeterminate ? undefined : `${percentage}%`,
            }}
          />
        </div>
        {showLabel && !indeterminate && (
          <div className="text-xs mt-1 text-right">{label}</div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
