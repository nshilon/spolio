import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper, StepperStep, Button, Icon } from '@/components';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A stepper component for displaying progress through a sequence of logical steps.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeStep: 0,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const ActiveStep: Story = {
  args: {
    activeStep: 1,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const VerticalOrientation: Story = {
  args: {
    activeStep: 1,
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const SmallSize: Story = {
  args: {
    activeStep: 1,
    size: 'small',
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const LargeSize: Story = {
  args: {
    activeStep: 1,
    size: 'large',
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const WithoutConnectors: Story = {
  args: {
    activeStep: 1,
    showConnectors: false,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Step 1" description="First step description" />
        <StepperStep label="Step 2" description="Second step description" />
        <StepperStep label="Step 3" description="Third step description" />
      </Stepper>
    </div>
  ),
};

export const WithCustomIcons: Story = {
  args: {
    activeStep: 1,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep 
          label="Account" 
          description="Create an account" 
          icon={<Icon name="user" />} 
        />
        <StepperStep 
          label="Profile" 
          description="Complete your profile" 
          icon={<Icon name="info" />} 
        />
        <StepperStep 
          label="Confirm" 
          description="Confirm your details" 
          icon={<Icon name="check" />} 
        />
      </Stepper>
    </div>
  ),
};

export const WithOptionalSteps: Story = {
  args: {
    activeStep: 1,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Stepper {...args}>
        <StepperStep label="Account" description="Create an account" />
        <StepperStep label="Profile" description="Complete your profile" optional />
        <StepperStep label="Confirm" description="Confirm your details" />
      </Stepper>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
      { label: 'Account', description: 'Create an account' },
      { label: 'Profile', description: 'Complete your profile' },
      { label: 'Review', description: 'Review your information' },
      { label: 'Complete', description: 'Registration completed' },
    ];
    
    const handleNext = () => {
      setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };
    
    const handleBack = () => {
      setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };
    
    const handleReset = () => {
      setActiveStep(0);
    };
    
    return (
      <div style={{ width: '600px' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <StepperStep 
              key={index} 
              label={step.label} 
              description={step.description} 
            />
          ))}
        </Stepper>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button 
            variant="secondary" 
            onClick={handleBack} 
            disabled={activeStep === 0}
          >
            Back
          </Button>
          
          {activeStep === steps.length - 1 ? (
            <Button variant="primary" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    );
  },
};
