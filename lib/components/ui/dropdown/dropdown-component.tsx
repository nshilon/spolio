import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './dropdown';
import { cva, type VariantProps } from 'class-variance-authority';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<React.ComponentProps<typeof Select>, 'value' | 'defaultValue'>,
    VariantProps<typeof dropdownVariants> {
  /**
   * The options to display in the dropdown
   */
  options: DropdownOption[];
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * The default value to use when uncontrolled
   */
  defaultValue?: string;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Label for the dropdown
   */
  label?: string;
  /**
   * Helper text to display below the dropdown
   */
  helperText?: string;
  /**
   * Error message to display below the dropdown
   */
  errorMessage?: string;
  /**
   * Whether the dropdown is required
   */
  required?: boolean;
  /**
   * The variant of the dropdown
   */
  variant?: 'default' | 'outline' | 'ghost';
  /**
   * The size of the dropdown
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class name for the dropdown
   */
  className?: string;
  /**
   * Callback when the value changes
   */
  onValueChange?: (value: string) => void;
}

const dropdownVariants = cva('dropdown w-full', {
  variants: {
    variant: {
      default: 'dropdown--default',
      outline: 'dropdown--outline',
      ghost: 'dropdown--ghost',
    },
    size: {
      small: 'dropdown--small',
      medium: 'dropdown--medium',
      large: 'dropdown--large',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = 'Select an option',
      label,
      helperText,
      errorMessage,
      required,
      variant = 'default',
      size = 'medium',
      className,
      onValueChange,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if none is provided
    const id = React.useId();
    const helperTextId = `${id}-helper-text`;
    const errorId = `${id}-error`;

    // Determine if we should show the dropdown in error state
    const isError = !!errorMessage;
    const dropdownVariant = isError ? 'outline' : variant;

    // Determine the aria-describedby attribute value
    const ariaDescribedBy =
      [helperText ? helperTextId : null, errorMessage ? errorId : null]
        .filter(Boolean)
        .join(' ') || undefined;

    return (
      <div className={cn(dropdownVariants({ variant, size, className }))}>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            {label}
            {required && <span className="ml-1 text-danger-500">*</span>}
          </label>
        )}
        <Select
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          {...props}
        >
          <SelectTrigger
            ref={ref}
            id={id}
            variant={dropdownVariant}
            size={size}
            aria-describedby={ariaDescribedBy}
            aria-invalid={isError}
            className={isError ? 'border-danger-500 focus:ring-danger-500' : ''}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {helperText && !errorMessage && (
          <p
            id={helperTextId}
            className="mt-2 text-xs text-neutral-500 dark:text-neutral-400"
          >
            {helperText}
          </p>
        )}
        {errorMessage && (
          <p
            id={errorId}
            className="mt-2 text-xs text-danger-600 dark:text-danger-400"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
