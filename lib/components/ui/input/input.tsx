import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

export const inputVariants = cva(
  'flex w-full rounded-md border bg-transparent px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-300 dark:border-neutral-700 dark:text-neutral-50',
        ghost: 'border-transparent bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50',
        error: 'border-danger-300 dark:border-danger-700 text-danger-600 dark:text-danger-400 focus-visible:ring-danger-500',
        success: 'border-success-300 dark:border-success-700 text-success-600 dark:text-success-400 focus-visible:ring-success-500',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: true,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Optional label for the input
   */
  label?: string;
  /**
   * Optional helper text to display below the input
   */
  helperText?: string;
  /**
   * Optional error message to display below the input
   */
  errorMessage?: string;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * ID for the input element
   */
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      label,
      helperText,
      errorMessage,
      required,
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if none is provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    const helperTextId = `${inputId}-helper-text`;
    const errorId = `${inputId}-error`;
    
    // Determine if we should show the input in error state
    const isError = !!errorMessage;
    const inputVariant = isError ? 'error' : variant;
    
    // Determine the aria-describedby attribute value
    const ariaDescribedBy = [
      helperText ? helperTextId : null,
      errorMessage ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            {label}
            {required && <span className="ml-1 text-danger-500">*</span>}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(inputVariants({ variant: inputVariant, size, fullWidth, className }))}
          ref={ref}
          aria-invalid={isError}
          aria-describedby={ariaDescribedBy}
          required={required}
          {...props}
        />
        {helperText && !errorMessage && (
          <p id={helperTextId} className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            {helperText}
          </p>
        )}
        {errorMessage && (
          <p id={errorId} className="mt-2 text-xs text-danger-600 dark:text-danger-400">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
