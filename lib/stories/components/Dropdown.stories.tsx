import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from '@/components';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown component for selecting a single value from a list of options.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost'],
      description: 'The visual style of the dropdown',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the dropdown is required',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label text for the dropdown',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the dropdown',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the dropdown',
    },
    options: {
      control: 'object',
      description: 'The options to display in the dropdown',
    },
  },
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
      { value: 'strawberry', label: 'Strawberry' },
    ],
    placeholder: 'Select an option',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a fruit',
  },
};

export const WithLabel: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit',
  },
};

export const WithHelperText: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    helperText: 'Choose your favorite fruit from the list',
    placeholder: 'Select a fruit',
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    errorMessage: 'Please select a fruit',
    placeholder: 'Select a fruit',
  },
};

export const Required: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    required: true,
    placeholder: 'Select a fruit',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    disabled: true,
    placeholder: 'Select a fruit',
  },
};

export const OutlineVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    variant: 'outline',
    placeholder: 'Select a fruit',
  },
};

export const GhostVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    variant: 'ghost',
    placeholder: 'Select a fruit',
  },
};

export const SmallSize: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    size: 'small',
    placeholder: 'Select a fruit',
  },
};

export const LargeSize: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    size: 'large',
    placeholder: 'Select a fruit',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape', disabled: true },
      { value: 'strawberry', label: 'Strawberry' },
    ],
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit',
  },
};

export const Controlled: Story = {
  render: () => {
    // Use a controlled component to demonstrate value changes
    const ControlledDropdown = () => {
      const [value, setValue] = useState('apple');
      
      return (
        <div className="flex flex-col items-center gap-4">
          <Dropdown
            options={defaultOptions}
            label="Controlled Dropdown"
            value={value}
            onValueChange={setValue}
          />
          <p>Selected value: {value}</p>
        </div>
      );
    };
    
    return <ControlledDropdown />;
  },
};
