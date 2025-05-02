import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toggle from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toggle',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning'],
      description: 'The visual style variant of the toggle',
    },
    label: {
      control: 'text',
      description: 'Label for the toggle',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the label relative to the toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
    showLabel: true,
  },
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Enable notifications',
    showLabel: true,
    labelPosition: 'left',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle size="sm" label="Small" showLabel />
        <Toggle size="md" label="Medium" showLabel />
        <Toggle size="lg" label="Large" showLabel />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle variant="default" defaultChecked label="Default" showLabel />
        <Toggle variant="primary" defaultChecked label="Primary" showLabel />
        <Toggle variant="success" defaultChecked label="Success" showLabel />
        <Toggle variant="danger" defaultChecked label="Danger" showLabel />
        <Toggle variant="warning" defaultChecked label="Warning" showLabel />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle disabled label="Disabled Off" showLabel />
        <Toggle disabled defaultChecked label="Disabled On" showLabel />
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="flex flex-col gap-4">
        <Toggle 
          checked={checked} 
          onCheckedChange={setChecked}
          label={`Toggle is ${checked ? 'ON' : 'OFF'}`}
          showLabel
        />
        <div className="text-sm text-gray-500">
          Current state: <strong>{checked ? 'ON' : 'OFF'}</strong>
        </div>
      </div>
    );
  },
};
