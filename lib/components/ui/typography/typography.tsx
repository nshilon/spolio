import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../../utils/cn';

// Define the typography variants using CVA with Tailwind classes
export const typographyVariants = cva('', {
  variants: {
    variant: {
      // Text styles
      body: 'text-base leading-normal mb-4',
      bodySmall: 'text-sm leading-normal mb-4',
      bodyLarge: 'text-lg leading-relaxed mb-4',

      // Heading styles
      h1: 'text-5xl font-bold leading-tight tracking-tight mb-4',
      h2: 'text-4xl font-bold leading-tight tracking-tight mb-4',
      h3: 'text-3xl font-semibold leading-tight tracking-tight mb-4',
      h4: 'text-2xl font-semibold leading-snug mb-4',
      h5: 'text-xl font-semibold leading-snug mb-4',
      h6: 'text-lg font-semibold leading-normal mb-4',

      // Special text styles
      display: 'text-5xl font-bold leading-tight tracking-tighter mb-4',
      caption: 'text-xs leading-normal text-neutral-500',
      code: 'font-mono text-sm leading-normal bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded',
      lead: 'text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6',
      overline:
        'text-xs leading-normal font-medium uppercase tracking-widest mb-2',
      label: 'text-sm leading-normal font-medium mb-2',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    color: {
      default: 'text-neutral-900 dark:text-neutral-50',
      muted: 'text-neutral-700 dark:text-neutral-300',
      primary: 'text-primary-600 dark:text-primary-400',
      secondary: 'text-primary-400 dark:text-primary-300',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      danger: 'text-danger-600 dark:text-danger-400',
      info: 'text-info-600 dark:text-info-400',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
    decoration: {
      underline: 'underline',
      lineThrough: 'line-through',
      noUnderline: 'no-underline',
    },
  },
  defaultVariants: {
    variant: 'body',
    // size: 'base',
    weight: 'regular',
    align: 'left',
    color: 'default',
  },
});

// Map variant to HTML element
const variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  bodySmall: 'p',
  bodyLarge: 'p',
  display: 'p',
  caption: 'span',
  code: 'code',
  lead: 'p',
  overline: 'span',
  label: 'label',
} as const;

export type TypographyVariant = keyof typeof variantElementMap;
export type TypographySize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

// Omit the color property from HTMLAttributes to avoid conflict with CVA's color
type HTMLAttributesWithoutColor = Omit<
  React.HTMLAttributes<HTMLElement>,
  'color'
>;

export interface TypographyProps
  extends HTMLAttributesWithoutColor,
    VariantProps<typeof typographyVariants> {
  variant?: TypographyVariant;
  size?: TypographySize;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body',
  size,
  weight,
  align,
  color,
  transform,
  decoration,
  as,
  className,
  children,
  ...props
}: TypographyProps) => {
  // Determine which HTML element to render
  const Component = as || variantElementMap[variant] || 'p';

  // Create a properly typed className
  const combinedClassName = cn(
    typographyVariants({
      variant,
      size,
      weight,
      align,
      color,
      transform,
      decoration,
    }),
    className
  );

  // Use createElement to avoid TypeScript issues with dynamic components
  return React.createElement(
    Component,
    {
      className: combinedClassName,
      ...props,
    },
    children
  );
};
