import { Icon } from '@/components';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

// Define the alert variants using design tokens
const alertVariants = cva(
  'Alert relative flex flex-col gap-[var(--alert-unit-vertical-gap)]',
  {
    variants: {
      variant: {
        // Using the design tokens for soft and critical variants
        soft: 'border-l-[var(--alert-unit-border-left)] rounded-[var(--alert-unit-border-radius)] p-[var(--alert-unit-padding-top)_var(--alert-unit-padding-right)_var(--alert-unit-padding-bottom)_var(--alert-unit-padding-left)]',
        critical: 'rounded-[var(--alert-unit-border-radius)] p-[var(--alert-unit-padding-top)_var(--alert-unit-padding-right)_var(--alert-unit-padding-bottom)_var(--alert-unit-padding-left)]',
      },
      type: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
        info: '',
      },
    },
    compoundVariants: [
      // Soft variant styles for each type
      {
        variant: 'soft',
        type: 'primary',
        className: 'bg-[var(--alert-soft-primary-background)] border-[var(--alert-soft-primary-border)]',
      },
      {
        variant: 'soft',
        type: 'neutral',
        className: 'bg-[var(--alert-soft-neutral-background)] border-[var(--alert-soft-neutral-border)]',
      },
      {
        variant: 'soft',
        type: 'danger',
        className: 'bg-[var(--alert-soft-danger-background)] border-[var(--alert-soft-danger-border)]',
      },
      {
        variant: 'soft',
        type: 'success',
        className: 'bg-[var(--alert-soft-success-background)] border-[var(--alert-soft-success-border)]',
      },
      {
        variant: 'soft',
        type: 'warning',
        className: 'bg-[var(--alert-soft-warning-background)] border-[var(--alert-soft-warning-border)]',
      },
      {
        variant: 'soft',
        type: 'info',
        className: 'bg-[var(--alert-soft-info-background)] border-[var(--alert-soft-info-border)]',
      },
      // Critical variant styles for each type
      {
        variant: 'critical',
        type: 'primary',
        className: 'bg-[var(--alert-critical-primary-background)] border-[var(--alert-critical-primary-border)]',
      },
      {
        variant: 'critical',
        type: 'neutral',
        className: 'bg-[var(--alert-critical-neutral-background)] border-[var(--alert-critical-neutral-border)]',
      },
      {
        variant: 'critical',
        type: 'danger',
        className: 'bg-[var(--alert-critical-danger-background)] border-[var(--alert-critical-danger-border)]',
      },
      {
        variant: 'critical',
        type: 'success',
        className: 'bg-[var(--alert-critical-success-background)] border-[var(--alert-critical-success-border)]',
      },
      {
        variant: 'critical',
        type: 'warning',
        className: 'bg-[var(--alert-critical-warning-background)] border-[var(--alert-critical-warning-border)]',
      },
      {
        variant: 'critical',
        type: 'info',
        className: 'bg-[var(--alert-critical-info-background)] border-[var(--alert-critical-info-border)]',
      },
    ],
    defaultVariants: {
      variant: 'soft',
      type: 'info',
    },
  }
);

// Define title styles based on variant and type
const alertTitleVariants = cva(
  'Alert__title font-[var(--alert-text-title-weight)] text-[var(--alert-text-title-size)] leading-[var(--alert-text-title-line-height)]',
  {
    variants: {
      variant: {
        soft: '',
        critical: '',
      },
      type: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
        info: '',
      },
    },
    compoundVariants: [
      // Soft variant title styles
      {
        variant: 'soft',
        type: 'primary',
        className: 'text-[var(--alert-soft-primary-title)]',
      },
      {
        variant: 'soft',
        type: 'neutral',
        className: 'text-[var(--alert-soft-neutral-title)]',
      },
      {
        variant: 'soft',
        type: 'danger',
        className: 'text-[var(--alert-soft-danger-title)]',
      },
      {
        variant: 'soft',
        type: 'success',
        className: 'text-[var(--alert-soft-success-title)]',
      },
      {
        variant: 'soft',
        type: 'warning',
        className: 'text-[var(--alert-soft-warning-title)]',
      },
      {
        variant: 'soft',
        type: 'info',
        className: 'text-[var(--alert-soft-info-title)]',
      },
      // Critical variant title styles
      {
        variant: 'critical',
        type: 'primary',
        className: 'text-[var(--alert-critical-primary-title)]',
      },
      {
        variant: 'critical',
        type: 'neutral',
        className: 'text-[var(--alert-critical-neutral-title)]',
      },
      {
        variant: 'critical',
        type: 'danger',
        className: 'text-[var(--alert-critical-danger-title)]',
      },
      {
        variant: 'critical',
        type: 'success',
        className: 'text-[var(--alert-critical-success-title)]',
      },
      {
        variant: 'critical',
        type: 'warning',
        className: 'text-[var(--alert-critical-warning-title)]',
      },
      {
        variant: 'critical',
        type: 'info',
        className: 'text-[var(--alert-critical-info-title)]',
      },
    ],
  }
);

// Define text styles based on variant and type
const alertTextVariants = cva(
  'Alert__text text-[var(--alert-text-strapline-font-size)] leading-[var(--alert-text-strapline-line-height)]',
  {
    variants: {
      variant: {
        soft: '',
        critical: '',
      },
      type: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
        info: '',
      },
    },
    compoundVariants: [
      // Soft variant text styles
      {
        variant: 'soft',
        type: 'primary',
        className: 'text-[var(--alert-soft-primary-text)]',
      },
      {
        variant: 'soft',
        type: 'neutral',
        className: 'text-[var(--alert-soft-neutral-text)]',
      },
      {
        variant: 'soft',
        type: 'danger',
        className: 'text-[var(--alert-soft-danger-text)]',
      },
      {
        variant: 'soft',
        type: 'success',
        className: 'text-[var(--alert-soft-success-text)]',
      },
      {
        variant: 'soft',
        type: 'warning',
        className: 'text-[var(--alert-soft-warning-text)]',
      },
      {
        variant: 'soft',
        type: 'info',
        className: 'text-[var(--alert-soft-info-text)]',
      },
      // Critical variant text styles
      {
        variant: 'critical',
        type: 'primary',
        className: 'text-[var(--alert-critical-primary-text)]',
      },
      {
        variant: 'critical',
        type: 'neutral',
        className: 'text-[var(--alert-critical-neutral-text)]',
      },
      {
        variant: 'critical',
        type: 'danger',
        className: 'text-[var(--alert-critical-danger-text)]',
      },
      {
        variant: 'critical',
        type: 'success',
        className: 'text-[var(--alert-critical-success-text)]',
      },
      {
        variant: 'critical',
        type: 'warning',
        className: 'text-[var(--alert-critical-warning-text)]',
      },
      {
        variant: 'critical',
        type: 'info',
        className: 'text-[var(--alert-critical-info-text)]',
      },
    ],
  }
);

// Define icon styles based on variant and type
const alertIconVariants = cva('Alert__icon', {
  variants: {
    variant: {
      soft: '',
      critical: '',
    },
    type: {
      primary: '',
      neutral: '',
      danger: '',
      success: '',
      warning: '',
      info: '',
    },
  },
  compoundVariants: [
    // Soft variant icon styles
    {
      variant: 'soft',
      type: 'primary',
      className: 'text-[var(--alert-soft-primary-icon)]',
    },
    {
      variant: 'soft',
      type: 'neutral',
      className: 'text-[var(--alert-soft-neutral-icon)]',
    },
    {
      variant: 'soft',
      type: 'danger',
      className: 'text-[var(--alert-soft-danger-icon)]',
    },
    {
      variant: 'soft',
      type: 'success',
      className: 'text-[var(--alert-soft-success-icon)]',
    },
    {
      variant: 'soft',
      type: 'warning',
      className: 'text-[var(--alert-soft-warning-icon)]',
    },
    {
      variant: 'soft',
      type: 'info',
      className: 'text-[var(--alert-soft-info-icon)]',
    },
    // Critical variant icon styles
    {
      variant: 'critical',
      type: 'primary',
      className: 'text-[var(--alert-critical-primary-icon)]',
    },
    {
      variant: 'critical',
      type: 'neutral',
      className: 'text-[var(--alert-critical-neutral-icon)]',
    },
    {
      variant: 'critical',
      type: 'danger',
      className: 'text-[var(--alert-critical-danger-icon)]',
    },
    {
      variant: 'critical',
      type: 'success',
      className: 'text-[var(--alert-critical-success-icon)]',
    },
    {
      variant: 'critical',
      type: 'warning',
      className: 'text-[var(--alert-critical-warning-icon)]',
    },
    {
      variant: 'critical',
      type: 'info',
      className: 'text-[var(--alert-critical-info-icon)]',
    },
  ],
});

export type AlertVariants = VariantProps<typeof alertVariants>;

export interface AlertProps {
  title?: string;
  children?: React.ReactNode;
  variant?: NonNullable<AlertVariants['variant']>;
  type?: NonNullable<AlertVariants['type']>;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Alert = ({
  title,
  children,
  variant = 'soft',
  type = 'info',
  className,
  showCloseButton = true,
  onClose,
}: AlertProps) => {
  // Map alert types to appropriate icon names
  const getIconName = () => {
    switch (type) {
      case 'danger':
        return 'alert-circle';
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'alert-triangle';
      case 'info':
        return 'info';
      case 'primary':
        return 'bell';
      case 'neutral':
      default:
        return 'info';
    }
  };

  return (
    <div className={cn(alertVariants({ variant, type }), className)}>
      {title && (
        <h2 className={alertTitleVariants({ variant, type })}>{title}</h2>
      )}
      <div className={`Alert__content flex gap-[var(--alert-unit-horizontal-gap)]`}>
        <Icon
          name={getIconName()}
          className={alertIconVariants({ variant, type })}
        />
        <div className={alertTextVariants({ variant, type })}>{children}</div>
      </div>
      {showCloseButton && (
        <Icon
          name="x"
          className={cn(
            alertIconVariants({ variant, type }),
            'cursor-pointer absolute right-2 top-2'
          )}
          onClick={onClose}
        />
      )}
    </div>
  );
};

export default Alert;
