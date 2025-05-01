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
    variant: {
      control: { type: 'select' },
      options: ['soft', 'critical'],
      description: 'The visual style of the alert',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
      description: 'The type of the alert which determines its color',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the close button is clicked',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Alert Title',
    children: 'This is an alert message providing important information to the user.',
    variant: 'soft',
    type: 'info',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'This is an alert message without a title.',
    variant: 'soft',
    type: 'info',
  },
};

export const Soft: Story = {
  args: {
    title: 'Soft Alert',
    children: 'This is a soft alert with a subtle background and left border.',
    variant: 'soft',
    type: 'info',
  },
};

export const Critical: Story = {
  args: {
    title: 'Critical Alert',
    children: 'This is a critical alert with a stronger background color.',
    variant: 'critical',
    type: 'info',
  },
};

export const Primary: Story = {
  args: {
    title: 'Primary Alert',
    children: 'This is a primary alert using the primary color scheme.',
    variant: 'soft',
    type: 'primary',
  },
};

export const Neutral: Story = {
  args: {
    title: 'Neutral Alert',
    children: 'This is a neutral alert using neutral colors.',
    variant: 'soft',
    type: 'neutral',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger Alert',
    children: 'This is a danger alert for error conditions.',
    variant: 'soft',
    type: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Alert',
    children: 'This is a warning alert for potential issues.',
    variant: 'soft',
    type: 'warning',
  },
};

export const Success: Story = {
  args: {
    title: 'Success Alert',
    children: 'This is a success alert for completed actions.',
    variant: 'soft',
    type: 'success',
  },
};

export const Info: Story = {
  args: {
    title: 'Info Alert',
    children: 'This is an info alert providing general information.',
    variant: 'soft',
    type: 'info',
  },
};

export const WithCloseButton: Story = {
  args: {
    title: 'Closable Alert',
    children: 'This alert has a close button that can be clicked.',
    variant: 'soft',
    type: 'info',
    showCloseButton: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: 'Non-Closable Alert',
    children: 'This alert does not have a close button.',
    variant: 'soft',
    type: 'info',
    showCloseButton: false,
  },
};

export const AlertTypes: StoryObj = {
  render: () => {
    const types = ['primary', 'neutral', 'danger', 'success', 'warning', 'info'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        {types.map((type) => (
          <Alert
            key={type}
            title={`${type.charAt(0).toUpperCase() + type.slice(1)} Alert`}
            type={type as any}
            variant="soft"
          >
            This is a {type} alert message.
          </Alert>
        ))}
      </div>
    );
  },
};

export const AlertVariants: StoryObj = {
  render: () => {
    const variants = ['soft', 'critical'];
    const types = ['primary', 'neutral', 'danger', 'success', 'warning', 'info'];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '1000px' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ textAlign: 'center' }}>{variant.charAt(0).toUpperCase() + variant.slice(1)} Variant</h3>

            {types.map((type) => (
              <Alert
                key={`${variant}-${type}`}
                title={`${type.charAt(0).toUpperCase() + type.slice(1)}`}
                variant={variant as any}
                type={type as any}
              >
                This is a {variant} {type} alert.
              </Alert>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const InteractiveAlerts: StoryObj = {
  render: () => {
    // This is just for demonstration in Storybook
    const handleClose = (alertName: string) => {
      console.log(`${alertName} alert closed`);
      // In a real app, you would handle state here to hide the alert
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        <Alert
          title="Closable Alert"
          variant="soft"
          type="info"
          showCloseButton={true}
          onClose={() => handleClose('Info')}
        >
          Click the X button to close this alert.
        </Alert>

        <Alert
          title="Critical Warning"
          variant="critical"
          type="warning"
          showCloseButton={true}
          onClose={() => handleClose('Warning')}
        >
          This is an important warning that can be dismissed.
        </Alert>

        <Alert
          title="Permanent Error"
          variant="critical"
          type="danger"
          showCloseButton={false}
        >
          This error alert cannot be dismissed.
        </Alert>
      </div>
    );
  },
};
