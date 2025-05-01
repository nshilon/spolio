import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { getIcon /*, hasIcon*/ } from './icon-registry';

// Define the icon variants using CVA
const iconVariants = cva('icon', {
  variants: {
    size: {
      small: 'icon--small w-4 h-4',
      medium: 'icon--medium w-6 h-6',
      large: 'icon--large w-8 h-8',
    },
    variant: {
      default: 'icon--default text-gray-500',
      primary: 'icon--primary text-primary',
      secondary: 'icon--secondary text-secondary',
      success: 'icon--success text-success',
      warning: 'icon--warning text-warning',
      danger: 'icon--danger text-danger',
      info: 'icon--info text-info',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});

// Define the available icon names
// This is kept for backward compatibility and type safety
// In the future, this could be generated from the registry
export type IconName =
  | 'arrow-first'
  | 'arrow-last'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'check'
  | 'close'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'sun'
  | 'moon'
  | string; // Allow any string for custom icons

export interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  name: IconName;
  className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size, variant, className, viewBox, ...props }, ref) => {
    // Get the icon from the registry
    const icon = getIcon(name);

    // If the icon doesn't exist in the registry, show a warning in development
    if (!icon && process.env.NODE_ENV !== 'production') {
      console.warn(`Icon "${name}" not found in registry`);
    }

    return (
      <svg
        ref={ref}
        className={cn(iconVariants({ size, variant, className }))}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon?.viewBox || viewBox || '0 0 24 24'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {icon ? icon.content : null}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
