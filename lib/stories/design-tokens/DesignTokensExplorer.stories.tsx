import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Typography, Button, ThemeProvider, ThemeSwitcher } from '@/components';

const meta = {
  title: 'Design System/Design Tokens/Explorer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An interactive explorer for the design tokens used in the design system.'
      }
    }
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Token categories
const tokenCategories = [
  {
    id: 'colors',
    name: 'Colors',
    description: 'Color tokens used throughout the design system',
    groups: [
      {
        name: 'Primary',
        tokens: [
          { name: 'Primary 50', variable: '--color-primary-50' },
          { name: 'Primary 100', variable: '--color-primary-100' },
          { name: 'Primary 200', variable: '--color-primary-200' },
          { name: 'Primary 300', variable: '--color-primary-300' },
          { name: 'Primary 400', variable: '--color-primary-400' },
          { name: 'Primary 500', variable: '--color-primary-500' },
          { name: 'Primary 600', variable: '--color-primary-600' },
          { name: 'Primary 700', variable: '--color-primary-700' },
          { name: 'Primary 800', variable: '--color-primary-800' },
          { name: 'Primary 900', variable: '--color-primary-900' },
        ]
      },
      {
        name: 'Neutral',
        tokens: [
          { name: 'Neutral 50', variable: '--color-neutral-50' },
          { name: 'Neutral 100', variable: '--color-neutral-100' },
          { name: 'Neutral 200', variable: '--color-neutral-200' },
          { name: 'Neutral 300', variable: '--color-neutral-300' },
          { name: 'Neutral 400', variable: '--color-neutral-400' },
          { name: 'Neutral 500', variable: '--color-neutral-500' },
          { name: 'Neutral 600', variable: '--color-neutral-600' },
          { name: 'Neutral 700', variable: '--color-neutral-700' },
          { name: 'Neutral 800', variable: '--color-neutral-800' },
          { name: 'Neutral 900', variable: '--color-neutral-900' },
        ]
      },
      {
        name: 'Semantic',
        tokens: [
          { name: 'Success', variable: '--color-success' },
          { name: 'Warning', variable: '--color-warning' },
          { name: 'Danger', variable: '--color-danger' },
          { name: 'Info', variable: '--color-info' },
        ]
      },
      {
        name: 'Background',
        tokens: [
          { name: 'Background Primary', variable: '--color-background-primary' },
          { name: 'Background Secondary', variable: '--color-background-secondary' },
          { name: 'Background Tertiary', variable: '--color-background-tertiary' },
        ]
      },
      {
        name: 'Foreground',
        tokens: [
          { name: 'Foreground Primary', variable: '--color-foreground-primary' },
          { name: 'Foreground Secondary', variable: '--color-foreground-secondary' },
          { name: 'Foreground Tertiary', variable: '--color-foreground-tertiary' },
        ]
      },
      {
        name: 'Border',
        tokens: [
          { name: 'Border Primary', variable: '--color-border-primary' },
          { name: 'Border Secondary', variable: '--color-border-secondary' },
        ]
      }
    ]
  },
  {
    id: 'spacing',
    name: 'Spacing',
    description: 'Spacing tokens used throughout the design system',
    groups: [
      {
        name: 'Spacing Scale',
        tokens: [
          { name: 'XXS (4px)', variable: '--spacing-xxs' },
          { name: 'XS (8px)', variable: '--spacing-xs' },
          { name: 'S (12px)', variable: '--spacing-s' },
          { name: 'M (16px)', variable: '--spacing-m' },
          { name: 'L (24px)', variable: '--spacing-l' },
          { name: 'XL (32px)', variable: '--spacing-xl' },
          { name: 'XXL (48px)', variable: '--spacing-xxl' },
          { name: 'XXXL (64px)', variable: '--spacing-xxxl' },
        ]
      }
    ]
  },
  {
    id: 'borderRadius',
    name: 'Border Radius',
    description: 'Border radius tokens used throughout the design system',
    groups: [
      {
        name: 'Border Radius Scale',
        tokens: [
          { name: 'XS (2px)', variable: '--border-radius-xs' },
          { name: 'S (4px)', variable: '--border-radius-s' },
          { name: 'M (6px)', variable: '--border-radius-m' },
          { name: 'L (8px)', variable: '--border-radius-l' },
          { name: 'XL (12px)', variable: '--border-radius-xl' },
          { name: 'XXL (16px)', variable: '--border-radius-xxl' },
          { name: 'Full', variable: '--border-radius-full' },
        ]
      }
    ]
  },
  {
    id: 'shadows',
    name: 'Shadows',
    description: 'Shadow tokens used throughout the design system',
    groups: [
      {
        name: 'Shadow Scale',
        tokens: [
          { name: 'Small', variable: '--shadow-sm' },
          { name: 'Medium', variable: '--shadow-md' },
          { name: 'Large', variable: '--shadow-lg' },
          { name: 'Extra Large', variable: '--shadow-xl' },
        ]
      }
    ]
  },
  {
    id: 'typography',
    name: 'Typography',
    description: 'Typography tokens used throughout the design system',
    groups: [
      {
        name: 'Font Family',
        tokens: [
          { name: 'Base', variable: '--font-family' },
        ]
      },
      {
        name: 'Font Size',
        tokens: [
          { name: 'XS', variable: 'text-xs' },
          { name: 'SM', variable: 'text-sm' },
          { name: 'Base', variable: 'text-base' },
          { name: 'LG', variable: 'text-lg' },
          { name: 'XL', variable: 'text-xl' },
          { name: '2XL', variable: 'text-2xl' },
          { name: '3XL', variable: 'text-3xl' },
          { name: '4XL', variable: 'text-4xl' },
          { name: '5XL', variable: 'text-5xl' },
        ]
      },
      {
        name: 'Font Weight',
        tokens: [
          { name: 'Light', variable: 'font-light' },
          { name: 'Regular', variable: 'font-normal' },
          { name: 'Medium', variable: 'font-medium' },
          { name: 'Semibold', variable: 'font-semibold' },
          { name: 'Bold', variable: 'font-bold' },
        ]
      }
    ]
  }
];

// Helper component to display a color swatch
const ColorSwatch = ({ 
  colorVar, 
  name 
}: { 
  colorVar: string; 
  name: string; 
}) => {
  // Get the computed color value
  const [computedColor, setComputedColor] = React.useState('');
  
  React.useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
    setComputedColor(color);
  }, [colorVar]);
  
  return (
    <div className="flex items-center p-4 border rounded-md mb-2">
      <div 
        className="w-12 h-12 rounded-md mr-4 border border-gray-200"
        style={{ backgroundColor: `var(${colorVar})` }}
      />
      <div>
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
    <div className="flex items-center p-4 border rounded-md mb-2">
      <div className="w-32 mr-4">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div 
        className="bg-primary-500 h-4"
        style={{ width: `var(${variable})` }}
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
    <div className="flex items-center p-4 border rounded-md mb-2">
      <div className="w-32 mr-4">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div 
        className="bg-primary-500 h-12 w-12"
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
    <div className="flex items-center p-4 border rounded-md mb-2">
      <div className="w-32 mr-4">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div 
        className="bg-white h-12 w-12"
        style={{ boxShadow: `var(${variable})` }}
      />
    </div>
  );
};

// Helper component to display a typography value
const TypographyExample = ({ 
  name, 
  variable 
}: { 
  name: string; 
  variable: string;
}) => {
  return (
    <div className="p-4 border rounded-md mb-2">
      <div className="flex items-center justify-between mb-2">
        <Typography variant="label" className="mb-0">{name}</Typography>
        <Typography variant="code" className="text-xs">{variable}</Typography>
      </div>
      <div className={variable}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

// Main component
const DesignTokensExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(tokenCategories[0].id);
  
  // Get the active category
  const category = tokenCategories.find(cat => cat.id === activeCategory);
  
  // Render the appropriate token display based on the category
  const renderTokenDisplay = (token: { name: string; variable: string }) => {
    switch (activeCategory) {
      case 'colors':
        return <ColorSwatch name={token.name} colorVar={token.variable} />;
      case 'spacing':
        return <SpacingExample name={token.name} variable={token.variable} />;
      case 'borderRadius':
        return <BorderRadiusExample name={token.name} variable={token.variable} />;
      case 'shadows':
        return <ShadowExample name={token.name} variable={token.variable} />;
      case 'typography':
        return <TypographyExample name={token.name} variable={token.variable} />;
      default:
        return null;
    }
  };
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-primary">
        <div className="container mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <Typography variant="h1">Design Tokens Explorer</Typography>
            <ThemeSwitcher />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tokenCategories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {category && (
            <>
              <Typography variant="h2">{category.name}</Typography>
              <Typography variant="body" className="mb-8">{category.description}</Typography>
              
              {category.groups.map(group => (
                <div key={group.name} className="mb-12">
                  <Typography variant="h3" className="mb-4">{group.name}</Typography>
                  <div className="space-y-2">
                    {group.tokens.map(token => (
                      <div key={token.variable}>
                        {renderTokenDisplay(token)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export const Explorer: Story = {
  render: () => <DesignTokensExplorer />,
};
