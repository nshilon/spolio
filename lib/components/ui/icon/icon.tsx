import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';


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
  | 'moon';

export interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  name: IconName;
  className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size, variant, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={iconVariants({ size, variant, className })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {renderPath(name)}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;

// Helper function to render the appropriate path based on the icon name
function renderPath(name: IconName) {
  switch (name) {
      case 'arrow-first':
      return <path d="M14 19l-7-7 7-7 M3 4 L3 20" />;
      case 'arrow-last':
      return <path d="M10 19l7-7 -7-7 M20 4 L20 20" />;
    case 'arrow-down':
      return <path d="M12 5v14M5 12l7 7 7-7" />;
    case 'arrow-left':
      return <path d="M19 12H5M12 19l-7-7 7-7" />;
    case 'arrow-right':
      return <path d="M5 12h14M12 5l7 7-7 7" />;
    case 'arrow-up':
      return <path d="M12 19V5M5 12l7-7 7 7" />;
    case 'check':
      return <path d="M20 6L9 17l-5-5" />;
    case 'close':
      return <path d="M18 6L6 18M6 6l12 12" />;
    case 'info':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </>
      );
    case 'warning':
      return (
        <>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </>
      );
    case 'error':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </>
      );
    case 'success':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M16 10l-6 6-3-3" />
        </>
      );
    case 'sun':
      return (
        <>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </>
      );
    case 'moon':
      return <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />;
    default:
      return null;
  }
}
