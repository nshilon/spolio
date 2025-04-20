import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components';
import { useState, useEffect } from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'The current value of the progress indicator',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'The maximum value of the progress indicator',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the progress bar',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: 'The color of the progress bar',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether to show the progress as indeterminate',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show a label with the progress percentage',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Small: Story = {
  args: {
    value: 30,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    value: 50,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    value: 70,
    size: 'large',
  },
};

export const WithLabel: Story = {
  args: {
    value: 65,
    showLabel: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 125,
    max: 500,
    showLabel: true,
  },
};

export const CustomLabelFormat: Story = {
  args: {
    value: 3,
    max: 10,
    showLabel: true,
    formatLabel: (value, max) => `Step ${value} of ${max}`,
  },
};

export const ColorVariants: StoryObj = {
  render: () => {
    const colors = ['default', 'primary', 'success', 'warning', 'danger'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        {colors.map((color) => (
          <div key={color}>
            <p style={{ marginBottom: '0.5rem' }}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
            <Progress 
              value={70} 
              color={color as any}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const SizeVariants: StoryObj = {
  render: () => {
    const sizes = ['small', 'medium', 'large'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        {sizes.map((size) => (
          <div key={size}>
            <p style={{ marginBottom: '0.5rem' }}>{size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <Progress 
              value={70} 
              size={size as any}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const AnimatedProgress: StoryObj = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            return 0;
          }
          return prevProgress + 5;
        });
      }, 500);
      
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div style={{ width: '400px' }}>
        <Progress value={progress} showLabel />
      </div>
    );
  },
};
