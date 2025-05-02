import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete } from '@/components';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An autocomplete component for selecting a value from a list of options with filtering capabilities.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'error', 'success'],
      description: 'The visual style of the autocomplete',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the autocomplete',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the autocomplete should take up the full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the autocomplete is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the autocomplete is required',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label text for the autocomplete',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the autocomplete',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the autocomplete',
    },
    options: {
      control: 'object',
      description: 'The options to display in the autocomplete',
    },
    allowFreeText: {
      control: 'boolean',
      description: 'Whether to allow free text input that\'s not in the options',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Whether to show a clear button',
    },
    showDropdownIcon: {
      control: 'boolean',
      description: 'Whether to show a dropdown icon',
    },
    showSearchIcon: {
      control: 'boolean',
      description: 'Whether to show a search icon',
    },
    maxOptions: {
      control: 'number',
      description: 'Maximum number of options to show',
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'blackberry', label: 'Blackberry' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'mango', label: 'Mango' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'watermelon', label: 'Watermelon' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
};

export const WithLabel: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    placeholder: 'Search fruits...',
  },
};

export const WithHelperText: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    helperText: 'Start typing to search for a fruit',
    placeholder: 'Search fruits...',
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    errorMessage: 'Please select a fruit',
    placeholder: 'Search fruits...',
  },
};

export const Required: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    required: true,
    placeholder: 'Search fruits...',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    disabled: true,
    placeholder: 'Search fruits...',
    value: 'Apple',
  },
};

export const GhostVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    variant: 'ghost',
    placeholder: 'Search fruits...',
  },
};

export const SuccessVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    variant: 'success',
    placeholder: 'Search fruits...',
    value: 'Apple',
  },
};

export const SmallSize: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    size: 'sm',
    placeholder: 'Search fruits...',
  },
};

export const LargeSize: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    size: 'lg',
    placeholder: 'Search fruits...',
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
    placeholder: 'Search fruits...',
  },
};

export const WithoutIcons: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    placeholder: 'Search fruits...',
    showSearchIcon: false,
    showClearButton: false,
    showDropdownIcon: false,
  },
};

export const WithFreeTextInput: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    placeholder: 'Search or enter a custom fruit...',
    allowFreeText: true,
    helperText: 'You can enter a fruit that is not in the list',
  },
};

export const LimitedOptions: Story = {
  args: {
    options: defaultOptions,
    label: 'Favorite Fruit',
    placeholder: 'Search fruits...',
    maxOptions: 5,
    helperText: 'Only showing the first 5 matching results',
  },
};

export const Controlled: Story = {
  args: {
    options: defaultOptions,
    label: 'Controlled Autocomplete',
    placeholder: 'Search fruits...',
  },
  render: () => {
    // Use a controlled component to demonstrate value changes
    const ControlledAutocomplete = () => {
      const [value, setValue] = useState('apple');
      
      return (
        <div className="flex flex-col items-center gap-4">
          <Autocomplete
            options={defaultOptions}
            label="Controlled Autocomplete"
            value={value}
            onValueChange={setValue}
          />
          <p>Selected value: {value}</p>
        </div>
      );
    };
    
    return <ControlledAutocomplete />;
  },
};

export const CustomFilter: Story = {
  args: {
    options: defaultOptions,
    label: 'Custom Filter',
    placeholder: 'Type to filter...',
    helperText: 'Only matches the beginning of words',
  },
  render: () => {
    // Example with custom filter function
    const CustomFilterExample = () => {
      // Custom filter that only matches the beginning of words
      const customFilter = (option: { label: string; }, inputValue: string) => {
        return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
      };
      
      return (
        <div className="w-80">
          <Autocomplete
            options={defaultOptions}
            label="Custom Filter"
            placeholder="Type to filter..."
            helperText="Only matches the beginning of words"
            filterFunction={customFilter}
          />
        </div>
      );
    };
    
    return <CustomFilterExample />;
  },
};

export const CountrySearch: Story = {
  args: {
    label: 'Country',
    placeholder: 'Search for a country...',
    helperText: 'Start typing to search for a country',
    options: [],
  },
  render: () => {
    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'it', label: 'Italy' },
      { value: 'es', label: 'Spain' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
      { value: 'in', label: 'India' },
      { value: 'br', label: 'Brazil' },
      { value: 'au', label: 'Australia' },
    ];
    
    return (
      <div className="w-80">
        <Autocomplete
          options={countries}
          label="Country"
          placeholder="Search for a country..."
          helperText="Start typing to search for a country"
        />
      </div>
    );
  },
};
