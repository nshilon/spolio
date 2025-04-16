import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

// import './button.scss';
import { cn } from '@/utils';

const ButtonStyles = cva('button', {
  variants: {
    variant: {
      primary: 'button--primary bg-mint-500 text-white',
      secondary: 'button--secondary',
      outline: 'button--outline border rounded',
      ghost: 'button--ghost transition-colors duration-200',
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
      className: 'button--primary--small rounded-sm',
    },
    {
      variant: 'primary',
      size: 'medium',
      className: 'button--primary--medium rounded-md',
    },
    {
      variant: 'primary',
      size: 'large',
      className: 'button--primary--large rounded',
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
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof ButtonStyles>;

const Button = ({ className, size, variant, ...props }: ButtonProps) => (
  <button
    type="button"
    className={cn(ButtonStyles({ variant, size, className }))}
    {...props}
  />
);

export default Button;
