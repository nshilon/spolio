import type { Meta, StoryObj } from '@storybook/react';
import {Alert} from "@/components";


const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the alert',
    },
    children: {
      control: 'text',
      description: 'The content of the alert',
    },
    design: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      description: 'The visual style of the alert',
    },
    type: {
      control: { type: 'select' },
      options: ['critical', 'danger', 'warning', 'success', 'informative', 'discovery'],
      description: 'The type of the alert which determines its color',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Alert Title',
    children: 'This is an alert message providing important information to the user.',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'This is an alert message without a title.',
  },
};

export const Solid: Story = {
  args: {
    title: 'Solid Alert',
    children: 'This is a solid alert with the default style.',
    design: 'solid',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline Alert',
    children: 'This is an outline alert with a border.',
    design: 'outline',
  },
};

export const Critical: Story = {
  args: {
    title: 'Critical Alert',
    children: 'This is a critical alert for very important issues.',
    type: 'critical',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger Alert',
    children: 'This is a danger alert for error conditions.',
    type: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Alert',
    children: 'This is a warning alert for potential issues.',
    type: 'warning',
  },
};

export const Success: Story = {
  args: {
    title: 'Success Alert',
    children: 'This is a success alert for completed actions.',
    type: 'success',
  },
};

export const Informative: Story = {
  args: {
    title: 'Informative Alert',
    children: 'This is an informative alert providing general information.',
    type: 'informative',
  },
};

export const Discovery: Story = {
  args: {
    title: 'Discovery Alert',
    children: 'This is a discovery alert for new features or tips.',
    type: 'discovery',
  },
};

export const AlertTypes: StoryObj = {
  render: () => {
    const types = ['critical', 'danger', 'warning', 'success', 'informative', 'discovery'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        {types.map((type) => (
          <Alert 
            key={type} 
            title={`${type.charAt(0).toUpperCase() + type.slice(1)} Alert`}
            type={type as any}
          >
            This is a {type} alert message.
          </Alert>
        ))}
      </div>
    );
  },
};

export const AlertDesigns: StoryObj = {
  render: () => {
    const designs = ['solid', 'outline'];
    const types = ['critical', 'danger', 'warning', 'success', 'informative', 'discovery'];
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '1000px' }}>
        {designs.map((design) => (
          <div key={design} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ textAlign: 'center' }}>{design.charAt(0).toUpperCase() + design.slice(1)} Design</h3>
            
            {types.map((type) => (
              <Alert 
                key={`${design}-${type}`} 
                title={`${type.charAt(0).toUpperCase() + type.slice(1)}`}
                design={design as any}
                type={type as any}
              >
                This is a {design} {type} alert.
              </Alert>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
