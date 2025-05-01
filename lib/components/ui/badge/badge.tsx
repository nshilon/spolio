import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { forwardRef } from 'react';
import '@/design-tokens/components/badge.css';

// Define the badge variants using design tokens
const badgeVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors',
  {
    variants: {
      variant: {
        // Soft badges - subtle background with colored text
        soft: 'border',
        // Critical badges - strong background with white text
        critical: 'border',
        // Outline badges - transparent with colored border
        outline: 'bg-transparent border',
      },
      type: {
        primary: '',
        neutral: '',
        tertiary: '',
        danger: '',
        success: '',
        warning: '',
        info: '',
      },
      size: {
        small: [
          'text-[var(--badge-unit-small-font-size)]',
          'leading-[var(--badge-unit-small-line-height)]',
          'font-[var(--badge-unit-small-font-weight)]',
          'px-[var(--badge-unit-small-padding-left)]',
          'py-[var(--badge-unit-small-padding-top)]',
          'rounded-[var(--badge-unit-small-border-radius)]',
          'm-[var(--badge-unit-small-margin)]',
        ],
        medium: [
          'text-[var(--badge-unit-medium-font-size)]',
          'leading-[var(--badge-unit-medium-line-height)]',
          'font-[var(--badge-unit-medium-font-weight)]',
          'px-[var(--badge-unit-medium-padding-left)]',
          'py-[var(--badge-unit-medium-padding-top)]',
          'rounded-[var(--badge-unit-medium-border-radius)]',
          'm-[var(--badge-unit-medium-margin)]',
        ],
        large: [
          'text-[var(--badge-unit-large-font-size)]',
          'leading-[var(--badge-unit-large-line-height)]',
          'font-[var(--badge-unit-large-font-weight)]',
          'px-[var(--badge-unit-large-padding-left)]',
          'py-[var(--badge-unit-large-padding-top)]',
          'rounded-[var(--badge-unit-large-border-radius)]',
          'border-[var(--badge-unit-large-border-width)]',
          'm-[var(--badge-unit-large-margin)]',
        ],
      },
    },
    compoundVariants: [
      // Soft variant + type combinations
      {
        variant: 'soft',
        type: 'primary',
        className: 'bg-[var(--badge-soft-primary-background)] text-[var(--badge-soft-primary-label)] border-[var(--badge-soft-primary-border)]',
      },
      {
        variant: 'soft',
        type: 'neutral',
        className: 'bg-[var(--badge-soft-neutral-background)] text-[var(--badge-soft-neutral-label)] border-[var(--badge-soft-neutral-border)]',
      },
      {
        variant: 'soft',
        type: 'tertiary',
        className: 'bg-[var(--badge-soft-tertiary-background)] text-[var(--badge-soft-tertiary-label)] border-[var(--badge-soft-tertiary-border)]',
      },
      {
        variant: 'soft',
        type: 'danger',
        className: 'bg-[var(--badge-soft-danger-background)] text-[var(--badge-soft-danger-label)] border-[var(--badge-soft-danger-border)]',
      },
      {
        variant: 'soft',
        type: 'success',
        className: 'bg-[var(--badge-soft-success-background)] text-[var(--badge-soft-success-label)] border-[var(--badge-soft-success-border)]',
      },
      {
        variant: 'soft',
        type: 'warning',
        className: 'bg-[var(--badge-soft-warning-background)] text-[var(--badge-soft-warning-label)] border-[var(--badge-soft-warning-border)]',
      },
      {
        variant: 'soft',
        type: 'info',
        className: 'bg-[var(--badge-soft-info-background)] text-[var(--badge-soft-info-text-body)] border-[var(--badge-soft-info-border)]',
      },
      
      // Critical variant + type combinations
      {
        variant: 'critical',
        type: 'primary',
        className: 'bg-[var(--badge-critical-primary-background)] text-[var(--badge-critical-primary-body-text)] border-[var(--badge-critical-primary-border)]',
      },
      {
        variant: 'critical',
        type: 'neutral',
        className: 'bg-[var(--badge-critical-neutral-background)] text-[var(--badge-critical-neutral-body-text)] border-[var(--badge-critical-neutral-border)]',
      },
      {
        variant: 'critical',
        type: 'tertiary',
        className: 'bg-[var(--badge-critical-tertiary-background)] text-[var(--badge-critical-tertiary-body-text)] border-[var(--badge-critical-tertiary-border)]',
      },
      {
        variant: 'critical',
        type: 'danger',
        className: 'bg-[var(--badge-critical-danger-background)] text-[var(--badge-critical-danger-label)] border-[var(--badge-critical-danger-border)]',
      },
      {
        variant: 'critical',
        type: 'success',
        className: 'bg-[var(--badge-critical-success-background)] text-[var(--badge-critical-success-label)] border-[var(--badge-critical-success-border)]',
      },
      {
        variant: 'critical',
        type: 'warning',
        className: 'bg-[var(--badge-critical-warning-background)] text-[var(--badge-critical-warning-label)] border-[var(--badge-critical-warning-border)]',
      },
      {
        variant: 'critical',
        type: 'info',
        className: 'bg-[var(--badge-critical-info-background)] text-[var(--badge-critical-info-label)] border-[var(--badge-critical-info-border)]',
      },
      
      // Outline variant + type combinations
      {
        variant: 'outline',
        type: 'primary',
        className: 'bg-[var(--badge-outline-primary-background)] text-[var(--badge-outline-primary-label)] border-[var(--badge-outline-primary-border)]',
      },
      {
        variant: 'outline',
        type: 'neutral',
        className: 'bg-[var(--badge-outline-neutral-background)] text-[var(--badge-outline-neutral-label)] border-[var(--badge-outline-neutral-border)]',
      },
      {
        variant: 'outline',
        type: 'tertiary',
        className: 'bg-[var(--badge-outline-tertiary-background)] text-[var(--badge-outline-tertiary-label)] border-[var(--badge-outline-tertiary-border)]',
      },
      {
        variant: 'outline',
        type: 'danger',
        className: 'bg-[var(--badge-outline-danger-background)] text-[var(--badge-outline-danger-label)] border-[var(--badge-outline-danger-border)]',
      },
      {
        variant: 'outline',
        type: 'success',
        className: 'bg-[var(--badge-outline-success-background)] text-[var(--badge-outline-success-label)] border-[var(--badge-outline-success-border)]',
      },
      {
        variant: 'outline',
        type: 'warning',
        className: 'bg-[var(--badge-outline-warning-background)] text-[var(--badge-outline-warning-label)] border-[var(--badge-outline-warning-border)]',
      },
      {
        variant: 'outline',
        type: 'info',
        className: 'bg-[var(--badge-outline-info-background)] text-[var(--badge-outline-info-text-body)] border-[var(--badge-outline-info-border)]',
      },
    ],
    defaultVariants: {
      variant: 'soft',
      type: 'primary',
      size: 'medium',
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVariants {
  /**
   * The content of the badge
   */
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, type, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, type, size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
