import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import React, { createContext, useContext, forwardRef } from 'react';
import { Icon } from '@/components';

import '@/design-tokens/components/stepper.css';

// Define the stepper variants using CVA
const stepperVariants = cva('stepper', {
  variants: {
    orientation: {
      horizontal: 'stepper--horizontal',
      vertical: 'stepper--vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

// Define the step indicator variants using CVA
const stepIndicatorVariants = cva('stepper-indicator', {
  variants: {
    size: {
      small: 'stepper-indicator--small',
      medium: 'stepper-indicator--medium',
      large: 'stepper-indicator--large',
    },
    state: {
      completed: 'stepper-indicator--completed',
      current: 'stepper-indicator--current',
      upcoming: 'stepper-indicator--upcoming',
    },
  },
  defaultVariants: {
    size: 'medium',
    state: 'upcoming',
  },
});

// Define the connector variants using CVA
const connectorVariants = cva('stepper-connector', {
  variants: {
    state: {
      completed: 'stepper-connector--completed',
      current: 'stepper-connector--current',
      upcoming: 'stepper-connector--upcoming',
    },
  },
  defaultVariants: {
    state: 'upcoming',
  },
});

// Define the Stepper context
type StepperContextValue = {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
  showConnectors: boolean;
  totalSteps: number;
};

const StepperContext = createContext<StepperContextValue | undefined>(undefined);

// Hook to use the Stepper context
const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('Stepper components must be used within a Stepper');
  }
  return context;
};

// Define the Stepper props
export interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  /**
   * The active step index (zero-based)
   * @default 0
   */
  activeStep?: number;
  /**
   * The orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The size of the step indicators
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether to show connectors between steps
   * @default true
   */
  showConnectors?: boolean;
  /**
   * The children of the stepper (should be StepperStep components)
   */
  children: React.ReactNode;
}

/**
 * Stepper component for displaying a sequence of steps
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep = 0,
      orientation = 'horizontal',
      size = 'medium',
      showConnectors = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Count the number of steps
    const childrenArray = React.Children.toArray(children);
    const totalSteps = childrenArray.length;

    return (
      <StepperContext.Provider
        value={{
          activeStep,
          orientation,
          size,
          showConnectors,
          totalSteps,
        }}
      >
        <div
          ref={ref}
          className={cn(stepperVariants({ orientation }), className)}
          role="list"
          aria-label="Progress"
          {...props}
        >
          {
            childrenArray.map((child, index) => <>
              {child && React.cloneElement(child as React.ReactElement, { index, totalSteps })}
            </>)
          }
        </div>
      </StepperContext.Provider>
    );
  }
);

Stepper.displayName = 'Stepper';

// Define the StepperStep props
export interface StepperStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The label of the step
   */
  label: string;
  /**
   * Optional description of the step
   */
  description?: string;
  /**
   * Optional icon to display instead of the step number
   */
  icon?: React.ReactNode;
  /**
   * Optional completed icon to display when the step is completed
   * @default <Icon name="check" />
   */
  completedIcon?: React.ReactNode;
  /**
   * The index of the step (automatically calculated if not provided)
   */
  index?: number;
  /**
   * Whether the step is optional
   * @default false
   */
  optional?: boolean;
}

/**
 * StepperStep component for displaying an individual step in a stepper
 */
export const StepperStep = forwardRef<HTMLDivElement, StepperStepProps>(
  (
    {
      label,
      description,
      icon,
      completedIcon,
      index: providedIndex,
      optional = false,
      className,
      ...props
    },
    ref
  ) => {
    const { activeStep, orientation, size, showConnectors, totalSteps } =
      useStepperContext();

    // Use the provided index or default to 0
    const index = providedIndex !== undefined ? providedIndex : 0;

    // Determine the state of the step
    const state =
      activeStep > index
        ? 'completed'
        : activeStep === index
        ? 'current'
        : 'upcoming';

    // Determine the content of the step indicator
    const indicatorContent = () => {
      if (state === 'completed' && completedIcon) {
        return completedIcon;
      }
      if (state === 'completed' && !completedIcon) {
        return <Icon name="check" size="small" />;
      }
      if (icon) {
        return icon;
      }
      return index + 1;
    };

    return (
      <div
        ref={ref}
        className={cn('stepper-step', className)}
        role="listitem"
        aria-current={state === 'current' ? 'step' : undefined}
        {...props}
      >
          {showConnectors && index < totalSteps - 1 && (
            <div className={cn(connectorVariants({ state }))} />
          )}

        <div className="stepper-step-header">
          <div
            className={cn(stepIndicatorVariants({ size, state }))}
            aria-label={`Step ${index + 1}: ${state}`}
          >
            {indicatorContent()}
          </div>
        </div>
        <div className="stepper-content">
          <div className="stepper-label">{label}</div>
          {description && (
            <div className="stepper-description">{description}</div>
          )}
          {optional && (
            <div className="stepper-optional">Optional</div>
          )}
        </div>
      </div>
    );
  }
);

StepperStep.displayName = 'StepperStep';

// Export the components
export default Stepper;
