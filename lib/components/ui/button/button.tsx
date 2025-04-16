import {VariantProps, cva} from 'class-variance-authority';
import {ComponentProps, forwardRef} from 'react';

// import './button.scss';
import {cn} from '@/utils';

const ButtonStyles = cva(['focus:outline-none cursor-pointer',
    'flex items-center ',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'justify-center '], {
    variants: {
        variant: {
            primary: 'button--primary bg-mint-500 dark:text-white ',
            secondary: 'button--secondary rounded bg-gray-200 dark:text-gray-700',
            outline: 'button--outline border rounded',
            ghost: 'button--ghost transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-500',
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, size, variant, ...props}, ref) => (
    <button
        ref={ref}
        type="button"
        className={cn(ButtonStyles({variant, size, className}))}
        {...props}
    />
));

export default Button;
