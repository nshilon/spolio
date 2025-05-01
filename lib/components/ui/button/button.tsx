import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

import '@/design-tokens/components/button.css';

// Base button styles using design tokens
const ButtonStyles = cva(
  [
    'focus:outline-none cursor-pointer',
    'flex items-center justify-center',
    'font-medium transition-all',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'border border-transparent', // Default transparent border
  ],
  {
    variants: {
      variant: {
        // Primary button - solid background with white text
        primary: [
          'button--primary',
          'bg-[var(--button-contained-primary-default-background)]',
          'text-[var(--button-contained-primary-default-text)]',
          'hover:bg-[var(--button-contained-primary-hover-background)]',
          'hover:text-[var(--button-contained-primary-hover-text)]',
          'active:bg-[var(--button-contained-primary-active-background)]',
          'active:text-[var(--button-contained-primary-active-text)]',
          'focus:ring-2 focus:ring-[var(--primary-300)] focus:ring-opacity-50',
          'shadow-sm hover:shadow-md',
        ],
        // Secondary button - subtle background
        secondary: [
          'button--secondary',
          'bg-[var(--button-contained-secondary-default-background)]',
          'text-[var(--button-contained-secondary-default-text)]',
          'hover:bg-[var(--button-contained-secondary-hover-background)]',
          'hover:text-[var(--button-contained-secondary-hover-text)]',
          'active:bg-[var(--button-contained-secondary-active-background)]',
          'active:text-[var(--button-contained-secondary-active-text)]',
          'focus:ring-2 focus:ring-[var(--neutral-300)] focus:ring-opacity-50',
        ],
        // Outline button - transparent with border
        outline: [
          'button--outline',
          'bg-[var(--button-outline-primary-default-background)]',
          'text-[var(--button-outline-primary-default-text)]',
          'border-[var(--button-outline-primary-default-border)]',
          'hover:bg-[var(--button-outline-primary-hover-background)]',
          'hover:text-[var(--button-outline-primary-hover-text)]',
          'hover:border-[var(--button-outline-primary-hover-border)]',
          'active:bg-[var(--button-outline-primary-active-background)]',
          'active:text-[var(--button-outline-primary-active-text)]',
          'active:border-[var(--button-outline-primary-active-border)]',
          'focus:ring-2 focus:ring-[var(--primary-300)] focus:ring-opacity-50',
        ],
        // Ghost button - transparent until hover
        ghost: [
          'button--ghost',
          'bg-[var(--button-ghost-primary-default-background)]',
          'text-[var(--button-ghost-primary-default-text)]',
          'hover:bg-[var(--button-ghost-primary-hover-background)]',
          'hover:text-[var(--button-ghost-primary-hover-text)]',
          'active:bg-[var(--button-ghost-primary-active-background)]',
          'active:text-[var(--button-ghost-primary-active-text)]',
          'focus:ring-2 focus:ring-[var(--primary-300)] focus:ring-opacity-50',
        ],
        // Link button - looks like a link
        link: [
          'button--link',
          'bg-transparent',
          'text-[var(--fg-primary-default)]',
          'hover:text-[var(--fg-primary-higher)]',
          'hover:underline',
          'p-0 h-auto',
        ],
        // Danger button - red for destructive actions
        danger: [
          'button--danger',
          'bg-[var(--button-contained-danger-default-background)]',
          'text-[var(--button-contained-danger-default-text)]',
          'hover:bg-[var(--button-contained-danger-hover-background)]',
          'hover:text-[var(--button-contained-danger-hover-text)]',
          'active:bg-[var(--button-contained-danger-active-background)]',
          'active:text-[var(--button-contained-danger-active-text)]',
          'focus:ring-2 focus:ring-[var(--red-300)] focus:ring-opacity-50',
          'shadow-sm hover:shadow-md',
        ],
      },
      size: {
        small: [
          'button--small',
          'font-sm',
          'h-[var(--button-unit-small-padding-top) + var(--button-unit-small-padding-bottom) + 1.5rem]',
          'px-[var(--button-unit-small-padding-left)]',
          'py-[var(--button-unit-small-padding-top)]',
          'rounded-[var(--button-unit-small-border-radius)]',
          'gap-[var(--button-unit-small-gap)]',
        ],
        medium: [
          'button--medium',
          'font-base',
          'h-[var(--button-unit-medium-padding-top) + var(--button-unit-medium-padding-bottom) + 1.5rem]',
          'px-[var(--button-unit-medium-padding-left)]',
          'py-[var(--button-unit-medium-padding-top)]',
          'rounded-[var(--button-unit-medium-border-radius)]',
          'gap-[var(--button-unit-medium-gap)]',
        ],
        large: [
          'button--large',
          'font-lg',
          'h-[var(--button-unit-large-padding-top) + var(--button-unit-large-padding-bottom) + 1.5rem]',
          'px-[var(--button-unit-large-padding-left)]',
          'py-[var(--button-unit-large-padding-top)]',
          'rounded-[var(--button-unit-large-border-radius)]',
          'gap-[var(--button-unit-large-gap)]',
        ],
      },
    },
    compoundVariants: [
      // Add any specific compound variants if needed
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
