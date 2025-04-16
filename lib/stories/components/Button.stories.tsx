import type { Meta, StoryObj } from '@storybook/react';
import {Button, Icon} from "@/components";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outilne: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon name="check" size="small" style={{ marginRight: '0.5rem', color: 'currentColor' }} />
        Button with Icon
      </>
    ),
  },
};

export const ButtonGrid: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '1rem' }}>
      <Button variant="primary" size="small">Primary Small</Button>
      <Button variant="secondary" size="small">Secondary Small</Button>
      <Button variant="primary" size="small" disabled>Disabled Primary</Button>

      <Button variant="primary" size="medium">Primary Medium</Button>
      <Button variant="secondary" size="medium">Secondary Medium</Button>
      <Button variant="secondary" size="medium" disabled>Disabled Secondary</Button>

      <Button variant="outline" size="medium">outline Medium</Button>
      <Button variant="ghost" size="medium">ghost Medium</Button>
      <Button size="medium" disabled>Disabled Secondary</Button>

      <Button variant="primary" size="large">Primary Large</Button>
      <Button variant="secondary" size="large">Secondary Large</Button>
      <Button variant="primary" size="large">
        <Icon name="arrow-right" size="small" style={{ marginRight: '0.5rem', color: 'currentColor' }} />
        With Icon
      </Button>
    </div>
  ),
};
