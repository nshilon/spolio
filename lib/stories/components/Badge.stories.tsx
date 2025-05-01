import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['soft', 'critical', 'outline'],
      description: 'The visual style of the badge',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'tertiary', 'danger', 'success', 'warning', 'info'],
      description: 'The type of the badge which determines its color',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the badge',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Soft Badge',
  },
};

export const Critical: Story = {
  args: {
    variant: 'critical',
    children: 'Critical Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    children: 'Danger',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Info',
  },
};

export const BadgeGrid: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Soft Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="soft" type="primary">Primary</Badge>
          <Badge variant="soft" type="neutral">Neutral</Badge>
          <Badge variant="soft" type="tertiary">Tertiary</Badge>
          <Badge variant="soft" type="danger">Danger</Badge>
          <Badge variant="soft" type="success">Success</Badge>
          <Badge variant="soft" type="warning">Warning</Badge>
          <Badge variant="soft" type="info">Info</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Critical Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="critical" type="primary">Primary</Badge>
          <Badge variant="critical" type="neutral">Neutral</Badge>
          <Badge variant="critical" type="tertiary">Tertiary</Badge>
          <Badge variant="critical" type="danger">Danger</Badge>
          <Badge variant="critical" type="success">Success</Badge>
          <Badge variant="critical" type="warning">Warning</Badge>
          <Badge variant="critical" type="info">Info</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Outline Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" type="primary">Primary</Badge>
          <Badge variant="outline" type="neutral">Neutral</Badge>
          <Badge variant="outline" type="tertiary">Tertiary</Badge>
          <Badge variant="outline" type="danger">Danger</Badge>
          <Badge variant="outline" type="success">Success</Badge>
          <Badge variant="outline" type="warning">Warning</Badge>
          <Badge variant="outline" type="info">Info</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Badge Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge size="small">Small</Badge>
          <Badge size="medium">Medium</Badge>
          <Badge size="large">Large</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Usage Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="soft" type="primary">New</Badge>
          <Badge variant="critical" type="danger">Alert</Badge>
          <Badge variant="soft" type="success">Completed</Badge>
          <Badge variant="outline" type="warning">Pending</Badge>
          <Badge variant="soft" type="info">Info</Badge>
          <Badge variant="critical" type="primary">Featured</Badge>
          <Badge variant="outline" type="neutral">Draft</Badge>
        </div>
      </div>
    </div>
  ),
};
