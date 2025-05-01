import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from "@/components";

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
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'danger'],
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
    as: {
      control: { type: 'select' },
      options: ['button', 'a'],
      description: 'The element type to render the button as',
    },
    href: {
      control: 'text',
      description: 'The href attribute for when the button is rendered as an anchor',
      if: { arg: 'as', eq: 'a' },
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

export const Outline: Story = {
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

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
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

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Link Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon name="check" size="small" />
        Button with Icon
      </>
    ),
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Button with Icon
        <Icon name="arrow-right" size="small" />
      </>
    ),
  },
};

export const ButtonGrid: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="primary" size="medium" disabled>Disabled</Button>
          <Button variant="primary" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
          <Button variant="secondary" size="medium" disabled>Disabled</Button>
          <Button variant="secondary" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Outline Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="small">Small</Button>
          <Button variant="outline" size="medium">Medium</Button>
          <Button variant="outline" size="large">Large</Button>
          <Button variant="outline" size="medium" disabled>Disabled</Button>
          <Button variant="outline" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Ghost Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="small">Small</Button>
          <Button variant="ghost" size="medium">Medium</Button>
          <Button variant="ghost" size="large">Large</Button>
          <Button variant="ghost" size="medium" disabled>Disabled</Button>
          <Button variant="ghost" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Link Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="link" size="small">Small</Button>
          <Button variant="link" size="medium">Medium</Button>
          <Button variant="link" size="large">Large</Button>
          <Button variant="link" size="medium" disabled>Disabled</Button>
          <Button variant="link" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Danger Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="danger" size="small">Small</Button>
          <Button variant="danger" size="medium">Medium</Button>
          <Button variant="danger" size="large">Large</Button>
          <Button variant="danger" size="medium" disabled>Disabled</Button>
          <Button variant="danger" size="medium">
            <Icon name="check" size="small" />
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">As Link</h3>
        <div className="flex flex-wrap gap-4">
          <Button as="a" href="#" size="small">Small Link</Button>
          <Button as="a" href="#" size="medium">Medium Link</Button>
          <Button as="a" href="#" size="large">Large Link</Button>
          <Button as="a" href="#" size="medium" disabled>Disabled Link</Button>
          <Button as="a" href="#" size="medium">
            <Icon name="check" size="small" />
            Link with Icon
          </Button>
        </div>
      </div>
    </div>
  ),
};
