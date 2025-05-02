import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipComponent,
  Button,
  Icon,
} from '@/components';

const meta = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component for displaying additional information on hover.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'light', 'primary', 'success', 'warning', 'danger'],
      description: 'The visual style of the tooltip',
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side of the trigger to show the tooltip',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'The alignment of the tooltip relative to the trigger',
    },
    hideArrow: {
      control: 'boolean',
      description: 'Whether to hide the arrow',
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'The delay in milliseconds before showing the tooltip',
    },
    sideOffset: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
      description: 'The offset in pixels from the trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether to disable the tooltip',
    },
  },
    args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
    variant: 'default',
    side: 'top',
    align: 'center',
    hideArrow: false,
    delayDuration: 300,
    sideOffset: 4,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="p-8">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
    variant: 'default',
    side: 'top',
    align: 'center',
    hideArrow: false,
    delayDuration: 300,
    sideOffset: 4,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <TooltipComponent content="Default tooltip" variant="default">
        <Button variant="primary">Default</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Light tooltip" variant="light">
        <Button variant="secondary">Light</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Primary tooltip" variant="primary">
        <Button variant="outline">Primary</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Success tooltip" variant="success">
        <Button variant="primary">Success</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Warning tooltip" variant="warning">
        <Button variant="secondary">Warning</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Danger tooltip" variant="danger">
        <Button variant="danger">Danger</Button>
      </TooltipComponent>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 place-items-center">
      <div></div>
      <TooltipComponent content="Top tooltip" side="top">
        <Button>Top</Button>
      </TooltipComponent>
      <div></div>
      
      <TooltipComponent content="Left tooltip" side="left">
        <Button>Left</Button>
      </TooltipComponent>
      
      <div></div>
      
      <TooltipComponent content="Right tooltip" side="right">
        <Button>Right</Button>
      </TooltipComponent>
      
      <div></div>
      <TooltipComponent content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </TooltipComponent>
      <div></div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center gap-8">
        <TooltipComponent content="Start aligned" side="bottom" align="start">
          <Button>Start</Button>
        </TooltipComponent>
        
        <TooltipComponent content="Center aligned" side="bottom" align="center">
          <Button>Center</Button>
        </TooltipComponent>
        
        <TooltipComponent content="End aligned" side="bottom" align="end">
          <Button>End</Button>
        </TooltipComponent>
      </div>
    </div>
  ),
};

export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    children: <Button>No Arrow</Button>,
    hideArrow: true,
  },
};

export const WithIcon: Story = {
  render: () => (
    <TooltipComponent content="Help information">
      <Button variant="ghost" size="small">
        <Icon name="info" />
      </Button>
    </TooltipComponent>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Rich Content (hover me)</Button>
      </TooltipTrigger>
      <TooltipContent className="w-[300px] p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Rich Tooltip Content</h3>
          <p className="text-xs">
            This tooltip contains rich content with multiple elements, including
            text, headings, and even a button.
          </p>
          <Button size="small" variant="outline" className="mt-2">
            Action
          </Button>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DelayDuration: Story = {
  render: () => (
    <div className="flex gap-4">
      <TooltipComponent content="No delay" delayDuration={0}>
        <Button>No Delay</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Short delay (300ms)" delayDuration={300}>
        <Button>Short Delay</Button>
      </TooltipComponent>
      
      <TooltipComponent content="Long delay (1000ms)" delayDuration={1000}>
        <Button>Long Delay</Button>
      </TooltipComponent>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'You should not see this tooltip',
    children: <Button>Disabled Tooltip</Button>,
    disabled: true,
  },
};
