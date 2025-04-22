import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

// import './button.scss';
import { cn } from '@/utils';

const ButtonStyles = cva(
  [
    'focus:outline-none cursor-pointer',
    'flex items-center ',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'justify-center ',
  ],
  {
    variants: {
      variant: {
        primary:
          'button--primary bg-primary-500 text-white dark:text-white transition-colors duration-300 hover:bg-primary-600 dark:hover:bg-primary-400 hover:shadow-md',
        secondary: 'button--secondary rounded bg-gray-200 dark:text-gray-700',
        outline: 'button--outline border rounded',
        ghost:
          'button--ghost transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-500',
        link: 'button--link hover:underline',
        danger: 'button--danger bg-red-600 text-white transition-colors duration-300 hover:bg-red-700 hover:shadow-md',
      },
      size: {
        small: 'button--small text-xs p-2 py-0.5',
        medium: 'button--medium text-base p-4 py-1',
        large: 'button--large text-lg p-6 py-2',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'small',
        className: 'button--primary--small rounded-sm hover:shadow-sm',
      },
      {
        variant: 'primary',
        size: 'medium',
        className: 'button--primary--medium rounded-md hover:shadow-md',
      },
      {
        variant: 'primary',
        size: 'large',
        className: 'button--primary--large rounded hover:shadow-lg',
      },
      {
        variant: 'secondary',
        size: 'small',
        className: 'button--secondary--small',
      },
      {
        variant: 'secondary',
        size: 'medium',
        className: 'button--secondary--medium',
      },
      {
        variant: 'secondary',
        size: 'large',
        className: 'button--secondary--large',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

type ButtonProps = ComponentProps<'button' | 'a'> &
  VariantProps<typeof ButtonStyles> & {
    /**
     * The element type to render the button as
     * @example 'a' for anchor tag, 'button' for button element
     */
    as?: React.ElementType;
    /**
     * The href attribute for when the button is rendered as an anchor
     */
    href?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, as, variant, href, ...props }, ref) => {
    const Component: React.ElementType = as || 'button';

    // Only add type="button" if the component is a button
    const buttonProps = Component === 'button' ? { type: 'button' } : {};

    // Add href if the component is an anchor and href is provided
    const anchorProps = Component === 'a' && href ? { href } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          ButtonStyles({
            variant: Component === 'a' ? 'link' : variant,
            size,
            className,
          })
        )}
        {...buttonProps}
        {...anchorProps}
        {...props}
      />
    );
  }
);

export default Button;
