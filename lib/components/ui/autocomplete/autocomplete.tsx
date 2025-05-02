import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Search, X, ChevronDown } from 'lucide-react';
import { inputVariants } from '../input/input';

import '@/design-tokens/components/autocomplete.css';

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'>,
    VariantProps<typeof autocompleteVariants> {
  /**
   * The options to display in the autocomplete
   */
  options: AutocompleteOption[];
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
   * Label for the autocomplete
   */
  label?: string;
  /**
   * Helper text to display below the autocomplete
   */
  helperText?: string;
  /**
   * Error message to display below the autocomplete
   */
  errorMessage?: string;
  /**
   * Whether the autocomplete is required
   */
  required?: boolean;
  /**
   * The variant of the autocomplete
   */
  variant?: 'default' | 'ghost' | 'error' | 'success';
  /**
   * The size of the autocomplete
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the autocomplete should take up the full width
   */
  fullWidth?: boolean;
  /**
   * Additional class name for the autocomplete
   */
  className?: string;
  /**
   * Callback when the value changes
   */
  onValueChange?: (value: string) => void;
  /**
   * Whether to allow free text input that's not in the options
   */
  allowFreeText?: boolean;
  /**
   * Whether to show a clear button
   */
  showClearButton?: boolean;
  /**
   * Whether to show a dropdown icon
   */
  showDropdownIcon?: boolean;
  /**
   * Whether to show a search icon
   */
  showSearchIcon?: boolean;
  /**
   * Maximum number of options to show
   */
  maxOptions?: number;
  /**
   * Custom filter function
   */
  filterFunction?: (option: AutocompleteOption, inputValue: string) => boolean;
}

const autocompleteVariants = cva('autocomplete w-full', {
  variants: {
    variant: {
      default: 'autocomplete--default',
      ghost: 'autocomplete--ghost',
      error: 'autocomplete--error',
      success: 'autocomplete--success',
    },
    size: {
      sm: 'autocomplete--sm',
      md: 'autocomplete--md',
      lg: 'autocomplete--lg',
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
});

const defaultFilterFunction = (option: AutocompleteOption, inputValue: string) => {
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value,
      defaultValue = '',
      placeholder = 'Select an option',
      label,
      helperText,
      errorMessage,
      required,
      variant = 'default',
      size = 'md',
      fullWidth = true,
      className,
      onValueChange,
      disabled,
      allowFreeText = false,
      showClearButton = true,
      showDropdownIcon = true,
      showSearchIcon = true,
      maxOptions = 10,
      filterFunction = defaultFilterFunction,
      ...props
    },
    ref
  ) => {
    // State for controlled/uncontrolled input
    const [inputValue, setInputValue] = useState(
      value !== undefined ? value : defaultValue
    );
    const [open, setOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState<AutocompleteOption[]>(options);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Merge the forwarded ref with our local ref
    const mergedRef = (node: HTMLInputElement) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inputRef.current = node;
    };

    // Generate a unique ID if none is provided
    const id = React.useId();
    const helperTextId = `${id}-helper-text`;
    const errorId = `${id}-error`;
    const listboxId = `${id}-listbox`;

    // Determine if we should show the autocomplete in error state
    const isError = !!errorMessage;
    const autocompleteVariant = isError ? 'error' : variant;

    // Determine the aria-describedby attribute value
    const ariaDescribedBy =
      [helperText ? helperTextId : null, errorMessage ? errorId : null]
        .filter(Boolean)
        .join(' ') || undefined;

    // Update the input value when the controlled value changes
    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value);
      }
    }, [value]);

    // Filter options when input value changes
    useEffect(() => {
      const filtered = options.filter((option) => 
        filterFunction(option, inputValue)
      ).slice(0, maxOptions);
      
      setFilteredOptions(filtered);
    }, [inputValue, options, filterFunction, maxOptions]);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      
      // Open the popover when typing
      if (newValue && !open) {
        setOpen(true);
      }
      
      // Call onValueChange if provided and allowFreeText is true
      if (allowFreeText && onValueChange) {
        onValueChange(newValue);
      }
    };

    // Handle option selection
    const handleOptionSelect = (option: AutocompleteOption) => {
      if (option.disabled) return;
      
      setInputValue(option.label);
      setOpen(false);
      
      if (onValueChange) {
        onValueChange(option.value);
      }
      
      // Focus the input after selection
      inputRef.current?.focus();
    };

    // Handle clear button click
    const handleClear = () => {
      setInputValue('');
      
      if (onValueChange) {
        onValueChange('');
      }
      
      // Focus the input after clearing
      inputRef.current?.focus();
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    return (
      <div className={cn(autocompleteVariants({ variant, size, fullWidth, className }))}>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            {label}
            {required && <span className="ml-1 text-danger-500">*</span>}
          </label>
        )}
        
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <div className="relative">
            <div className="autocomplete-input-wrapper relative flex items-center">
              {showSearchIcon && (
                <Search className="autocomplete-search-icon absolute left-3 h-4 w-4 text-neutral-500" />
              )}
              
              <input
                ref={mergedRef}
                id={id}
                type="text"
                className={cn(
                  inputVariants({ 
                    variant: autocompleteVariant, 
                    size, 
                    fullWidth 
                  }),
                  'autocomplete-input',
                  showSearchIcon && 'pl-9',
                  (showClearButton || showDropdownIcon) && 'pr-9'
                )}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => inputValue && setOpen(true)}
                onKeyDown={handleKeyDown}
                aria-invalid={isError}
                aria-describedby={ariaDescribedBy}
                aria-autocomplete="list"
                aria-controls={open ? listboxId : undefined}
                aria-expanded={open}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                autoComplete="off"
                {...props}
              />
              
              {showClearButton && inputValue && (
                <button
                  type="button"
                  className="autocomplete-clear-button absolute right-9 flex h-5 w-5 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={handleClear}
                  aria-label="Clear"
                  tabIndex={-1}
                >
                  <X className="h-3 w-3" />
                </button>
              )}
              
              {showDropdownIcon && (
                <button
                  type="button"
                  className="autocomplete-dropdown-button absolute right-3 flex h-5 w-5 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={() => setOpen(!open)}
                  aria-label={open ? "Close options" : "Show options"}
                  tabIndex={-1}
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <PopoverPrimitive.Portal>
              <PopoverPrimitive.Content
                className="autocomplete-content z-50 min-w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 shadow-md animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 dark:border-neutral-700 dark:bg-neutral-800"
                align="start"
                sideOffset={5}
                avoidCollisions
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                {filteredOptions.length > 0 ? (
                  <ul
                    id={listboxId}
                    role="listbox"
                    className="autocomplete-options max-h-60 overflow-auto p-1"
                  >
                    {filteredOptions.map((option) => (
                      <li
                        key={option.value}
                        role="option"
                        aria-selected={inputValue === option.label}
                        aria-disabled={option.disabled}
                        className={cn(
                          'autocomplete-option relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
                          inputValue === option.label && 'bg-primary-50 text-primary-900 dark:bg-primary-900 dark:text-primary-50',
                          !option.disabled && 'hover:bg-neutral-100 dark:hover:bg-neutral-700',
                          option.disabled && 'opacity-50 cursor-not-allowed'
                        )}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="autocomplete-no-results px-2 py-4 text-center text-sm text-neutral-500">
                    No results found
                  </div>
                )}
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </div>
        </PopoverPrimitive.Root>
        
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

Autocomplete.displayName = 'Autocomplete';
