import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography } from '@/components';

const meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'This page showcases all the design tokens used in the design system.'
      }
    }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to display a color swatch
const ColorSwatch = ({ 
  colorVar, 
  name, 
  hex 
}: { 
  colorVar: string; 
  name: string; 
  hex?: string;
}) => {
  // Get the computed color value
  const [computedColor, setComputedColor] = React.useState(hex || '');
  
  React.useEffect(() => {
    if (!hex) {
      const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
      setComputedColor(color);
    }
  }, [colorVar, hex]);
  
  return (
    <div className="flex flex-col items-start mb-4">
      <div 
        className="w-full h-16 rounded-md mb-2 border border-gray-200"
        style={{ backgroundColor: `var(${colorVar})` }}
      />
      <div className="flex flex-col">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{colorVar}</Typography>
        {computedColor && (
          <Typography variant="caption" className="text-xs">{computedColor}</Typography>
        )}
      </div>
    </div>
  );
};

// Helper component to display a spacing value
const SpacingExample = ({ 
  name, 
  variable 
}: { 
  name: string; 
  variable: string;
}) => {
  return (
    <div className="flex items-center mb-4 w-[300px]">
      <div className="w-32 flex flex-col">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs  no-wrap">{variable}</Typography>
      </div>
      <div 
        className="bg-primary-300 h-4 inline p-2"
        style={{ borderWidth: `0 var(${variable})`, borderStyle: 'solid', borderColor: 'var(--color-primary-100)' }}
      />
    </div>
  );
};

// Helper component to display a border radius value
const BorderRadiusExample = ({ 
  name, 
  variable 
}: { 
  name: string; 
  variable: string;
}) => {
  return (
    <div className="flex items-center mb-4 w-[300px]">
      <div className="w-32">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div 
        className="bg-primary-200 h-16 w-16"
        style={{ borderRadius: `var(${variable})` }}
      />
    </div>
  );
};

// Helper component to display a shadow value
const ShadowExample = ({ 
  name, 
  variable 
}: { 
  name: string; 
  variable: string;
}) => {
  return (
    <div className="flex flex-col items-center mb-6 p-4">
      <div className="w-32 whitespace-no-wrap">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div 
        className="bg-primary-200 h-16 w-16"
        style={{ boxShadow: `var(${variable})` }}
      />
    </div>
  );
};

// Helper component to display a typography example
const TypographyExample = ({ 
  name, 
  variant,
  size,
  weight
}: { 
  name: string; 
  variant: any;
  size?: any;
  weight?: any;
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">
          variant="{variant}"
          {size ? ` size="${size}"` : ''}
          {weight ? ` weight="${weight}"` : ''}
        </Typography>
      </div>
      <Typography 
        variant={variant} 
        size={size} 
        weight={weight}
      >
        The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  );
};

export const Colors: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Color Tokens</Typography>
      <Typography variant="body">
        These are the color tokens used throughout the design system.
      </Typography>

      <div className="mt-8">
        <Typography variant="h2">Primary Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-primary-50" name="Primary 50" />
          <ColorSwatch colorVar="--color-primary-100" name="Primary 100" />
          <ColorSwatch colorVar="--color-primary-200" name="Primary 200" />
          <ColorSwatch colorVar="--color-primary-300" name="Primary 300" />
          <ColorSwatch colorVar="--color-primary-400" name="Primary 400" />
          <ColorSwatch colorVar="--color-primary-500" name="Primary 500" />
          <ColorSwatch colorVar="--color-primary-600" name="Primary 600" />
          <ColorSwatch colorVar="--color-primary-700" name="Primary 700" />
          <ColorSwatch colorVar="--color-primary-800" name="Primary 800" />
          <ColorSwatch colorVar="--color-primary-900" name="Primary 900" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Neutral Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-neutral-50" name="Neutral 50" />
          <ColorSwatch colorVar="--color-neutral-100" name="Neutral 100" />
          <ColorSwatch colorVar="--color-neutral-200" name="Neutral 200" />
          <ColorSwatch colorVar="--color-neutral-300" name="Neutral 300" />
          <ColorSwatch colorVar="--color-neutral-400" name="Neutral 400" />
          <ColorSwatch colorVar="--color-neutral-500" name="Neutral 500" />
          <ColorSwatch colorVar="--color-neutral-600" name="Neutral 600" />
          <ColorSwatch colorVar="--color-neutral-700" name="Neutral 700" />
          <ColorSwatch colorVar="--color-neutral-800" name="Neutral 800" />
          <ColorSwatch colorVar="--color-neutral-900" name="Neutral 900" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Semantic Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-success" name="Success" />
          <ColorSwatch colorVar="--color-warning" name="Warning" />
          <ColorSwatch colorVar="--color-danger" name="Danger" />
          <ColorSwatch colorVar="--color-info" name="Info" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Background Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-background-primary" name="Background Primary" />
          <ColorSwatch colorVar="--color-background-secondary" name="Background Secondary" />
          <ColorSwatch colorVar="--color-background-tertiary" name="Background Tertiary" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Foreground Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-foreground-primary" name="Foreground Primary" />
          <ColorSwatch colorVar="--color-foreground-secondary" name="Foreground Secondary" />
          <ColorSwatch colorVar="--color-foreground-tertiary" name="Foreground Tertiary" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Border Colors</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ColorSwatch colorVar="--color-border-primary" name="Border Primary" />
          <ColorSwatch colorVar="--color-border-secondary" name="Border Secondary" />
        </div>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Spacing Tokens</Typography>
      <Typography variant="body">
        These are the spacing tokens used throughout the design system.
      </Typography>

      <div className="mt-8">
        <div className="max-w-xl">
          <SpacingExample name="XXS (4px)" variable="--spacing-xxs" />
          <SpacingExample name="XS (8px)" variable="--spacing-xs" />
          <SpacingExample name="S (12px)" variable="--spacing-s" />
          <SpacingExample name="M (16px)" variable="--spacing-m" />
          <SpacingExample name="L (24px)" variable="--spacing-l" />
          <SpacingExample name="XL (32px)" variable="--spacing-xl" />
          <SpacingExample name="XXL (48px)" variable="--spacing-xxl" />
          <SpacingExample name="XXXL (64px)" variable="--spacing-xxxl" />
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Border Radius Tokens</Typography>
      <Typography variant="body">
        These are the border radius tokens used throughout the design system.
      </Typography>

      <div className="mt-8">
        <div className="max-w-xl">
          <BorderRadiusExample name="XS (2px)" variable="--border-radius-xs" />
          <BorderRadiusExample name="S (4px)" variable="--border-radius-s" />
          <BorderRadiusExample name="M (6px)" variable="--border-radius-m" />
          <BorderRadiusExample name="L (8px)" variable="--border-radius-l" />
          <BorderRadiusExample name="XL (12px)" variable="--border-radius-xl" />
          <BorderRadiusExample name="XXL (16px)" variable="--border-radius-xxl" />
          <BorderRadiusExample name="Full" variable="--border-radius-full" />
        </div>
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Shadow Tokens</Typography>
      <Typography variant="body">
        These are the shadow tokens used throughout the design system.
      </Typography>

      <div className="mt-8">
        <div className="max-w-xl">
          <ShadowExample name="Small" variable="--shadow-sm" />
          <ShadowExample name="Medium" variable="--shadow-md" />
          <ShadowExample name="Large" variable="--shadow-lg" />
          <ShadowExample name="Extra Large" variable="--shadow-xl" />
        </div>
      </div>
    </div>
  ),
};

export const TypographyTokens: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Typography Tokens</Typography>
      <Typography variant="body">
        These are the typography tokens used throughout the design system.
      </Typography>

      <div className="mt-8">
        <Typography variant="h2">Headings</Typography>
        <div className="mt-4">
          <TypographyExample name="Heading 1" variant="h1" />
          <TypographyExample name="Heading 2" variant="h2" />
          <TypographyExample name="Heading 3" variant="h3" />
          <TypographyExample name="Heading 4" variant="h4" />
          <TypographyExample name="Heading 5" variant="h5" />
          <TypographyExample name="Heading 6" variant="h6" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Body Text</Typography>
        <div className="mt-4">
          <TypographyExample name="Body" variant="body" />
          <TypographyExample name="Body Small" variant="bodySmall" />
          <TypographyExample name="Body Large" variant="bodyLarge" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Special Text Styles</Typography>
        <div className="mt-4">
          <TypographyExample name="Display" variant="display" />
          <TypographyExample name="Lead" variant="lead" />
          <TypographyExample name="Caption" variant="caption" />
          <TypographyExample name="Overline" variant="overline" />
          <TypographyExample name="Label" variant="label" />
          <TypographyExample name="Code" variant="code" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Font Sizes</Typography>
        <div className="mt-4">
          <TypographyExample name="Extra Small" variant="body" size="xs" />
          <TypographyExample name="Small" variant="body" size="sm" />
          <TypographyExample name="Base" variant="body" size="base" />
          <TypographyExample name="Large" variant="body" size="lg" />
          <TypographyExample name="Extra Large" variant="body" size="xl" />
          <TypographyExample name="2XL" variant="body" size="2xl" />
          <TypographyExample name="3XL" variant="body" size="3xl" />
          <TypographyExample name="4XL" variant="body" size="4xl" />
          <TypographyExample name="5XL" variant="body" size="5xl" />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Font Weights</Typography>
        <div className="mt-4">
          <TypographyExample name="Light" variant="body" weight="light" />
          <TypographyExample name="Regular" variant="body" weight="regular" />
          <TypographyExample name="Medium" variant="body" weight="medium" />
          <TypographyExample name="Semibold" variant="body" weight="semibold" />
          <TypographyExample name="Bold" variant="body" weight="bold" />
        </div>
      </div>
    </div>
  ),
};

export const AllTokens: Story = {
  render: () => (
    <div className="p-8">
      <Typography variant="h1">Design Tokens</Typography>
      <Typography variant="lead">
        This page showcases all the design tokens used in the design system.
      </Typography>

      <div className="mt-12">
        <Typography variant="h2">Color Tokens</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <Typography variant="h4">Primary</Typography>
            <div className="mt-2">
              <ColorSwatch colorVar="--color-primary-500" name="Primary 500" />
              <ColorSwatch colorVar="--color-primary-600" name="Primary 600" />
            </div>
          </div>
          <div>
            <Typography variant="h4">Semantic</Typography>
            <div className="mt-2">
              <ColorSwatch colorVar="--color-success" name="Success" />
              <ColorSwatch colorVar="--color-warning" name="Warning" />
              <ColorSwatch colorVar="--color-danger" name="Danger" />
              <ColorSwatch colorVar="--color-info" name="Info" />
            </div>
          </div>
          <div>
            <Typography variant="h4">Background</Typography>
            <div className="mt-2">
              <ColorSwatch colorVar="--color-background-primary" name="Background Primary" />
              <ColorSwatch colorVar="--color-background-secondary" name="Background Secondary" />
              <ColorSwatch colorVar="--color-background-tertiary" name="Background Tertiary" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Spacing Tokens</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <SpacingExample name="XXS (4px)" variable="--spacing-xxs" />
            <SpacingExample name="XS (8px)" variable="--spacing-xs" />
            <SpacingExample name="S (12px)" variable="--spacing-s" />
            <SpacingExample name="M (16px)" variable="--spacing-m" />
          </div>
          <div>
            <SpacingExample name="L (24px)" variable="--spacing-l" />
            <SpacingExample name="XL (32px)" variable="--spacing-xl" />
            <SpacingExample name="XXL (48px)" variable="--spacing-xxl" />
            <SpacingExample name="XXXL (64px)" variable="--spacing-xxxl" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Border Radius Tokens</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <BorderRadiusExample name="XS (2px)" variable="--border-radius-xs" />
            <BorderRadiusExample name="S (4px)" variable="--border-radius-s" />
            <BorderRadiusExample name="M (6px)" variable="--border-radius-m" />
          </div>
          <div>
            <BorderRadiusExample name="L (8px)" variable="--border-radius-l" />
            <BorderRadiusExample name="XL (12px)" variable="--border-radius-xl" />
            <BorderRadiusExample name="XXL (16px)" variable="--border-radius-xxl" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Shadow Tokens</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <ShadowExample name="Small" variable="--shadow-sm" />
            <ShadowExample name="Medium" variable="--shadow-md" />
          </div>
          <div>
            <ShadowExample name="Large" variable="--shadow-lg" />
            <ShadowExample name="Extra Large" variable="--shadow-xl" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h2">Typography</Typography>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <Typography variant="h4">Headings</Typography>
            <div className="mt-2">
              <TypographyExample name="Heading 1" variant="h1" />
              <TypographyExample name="Heading 2" variant="h2" />
              <TypographyExample name="Heading 3" variant="h3" />
            </div>
          </div>
          <div>
            <Typography variant="h4">Body Text</Typography>
            <div className="mt-2">
              <TypographyExample name="Body" variant="body" />
              <TypographyExample name="Body Small" variant="bodySmall" />
              <TypographyExample name="Body Large" variant="bodyLarge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
