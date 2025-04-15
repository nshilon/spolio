import type { Meta, StoryObj } from '@storybook/react';
import {Icon, type IconName} from "@/components";



const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'check',
        'close',
        'info',
        'warning',
        'error',
        'success',
        'sun',
        'moon',
      ],
      description: 'The name of the icon to display',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'The color variant of the icon',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'info',
    size: 'medium',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    name: 'info',
    size: 'medium',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    name: 'info',
    size: 'small',
    variant: 'default',
  },
};

export const Medium: Story = {
  args: {
    name: 'info',
    size: 'medium',
    variant: 'default',
  },
};

export const Large: Story = {
  args: {
    name: 'info',
    size: 'large',
    variant: 'default',
  },
};

export const AllIcons: StoryObj = {
  render: () => {
    const icons: IconName[] = [
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'check',
      'close',
      'info',
      'warning',
      'error',
      'success',
      'sun',
      'moon',
    ];
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
        {icons.map((iconName) => (
          <div 
            key={iconName} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '1rem',
              border: '1px solid var(--color-border-primary)',
              borderRadius: 'var(--border-radius-m)',
            }}
          >
            <Icon name={iconName} size="large" />
            <span style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-sm)' }}>{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const ColorVariants: StoryObj = {
  render: () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {variants.map((variant) => (
          <div 
            key={variant} 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 1rem',
              border: '1px solid var(--color-border-primary)',
              borderRadius: 'var(--border-radius-m)',
            }}
          >
            <Icon name="info" size="medium" variant={variant as any} />
            <span>{variant}</span>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {sizes.map((size) => (
          <div 
            key={size} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Icon name="info" size={size as any} />
            <span style={{ fontSize: 'var(--font-size-sm)' }}>{size}</span>
          </div>
        ))}
      </div>
    );
  },
};
