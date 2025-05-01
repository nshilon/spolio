import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, ThemeSwitcher, Button, Typography } from '@/components';

const meta = {
  title: 'Examples/Theme Customization',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Custom theme wrapper with inline styles
const CustomThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        '--color-primary-500': '#0070f3',
        '--color-primary-600': '#0060df',
        '--color-primary-700': '#0050b3',
        '--color-success-500': '#10b981',
        '--color-warning-500': '#f59e0b',
        '--color-danger-500': '#ef4444',
        '--border-radius-m': '0.5rem',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Brand theme wrapper with inline styles
const BrandThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        '--color-primary-50': '#f0f9ff',
        '--color-primary-100': '#e0f2fe',
        '--color-primary-200': '#bae6fd',
        '--color-primary-300': '#7dd3fc',
        '--color-primary-400': '#38bdf8',
        '--color-primary-500': '#0ea5e9',
        '--color-primary-600': '#0284c7',
        '--color-primary-700': '#0369a1',
        '--color-primary-800': '#075985',
        '--color-primary-900': '#0c4a6e',
        '--color-background-primary': '#ffffff',
        '--color-background-secondary': '#f0f9ff',
        '--color-background-tertiary': '#e0f2fe',
        '--color-foreground-primary': '#0c4a6e',
        '--color-foreground-secondary': '#075985',
        '--color-foreground-tertiary': '#0369a1',
        '--color-border-primary': '#bae6fd',
        '--color-border-secondary': '#e0f2fe',
        '--border-radius-m': '0.75rem',
        '--border-radius-l': '1rem',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Dark theme wrapper with inline styles
const CustomDarkThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="dark"
      style={{
        '--color-background-primary': '#121212',
        '--color-background-secondary': '#1e1e1e',
        '--color-background-tertiary': '#2c2c2c',
        '--color-foreground-primary': '#ffffff',
        '--color-foreground-secondary': '#e0e0e0',
        '--color-foreground-tertiary': '#a0a0a0',
        '--color-border-primary': '#434343',
        '--color-border-secondary': '#2c2c2c',
        '--color-primary-500': '#38bdf8',
        '--color-primary-600': '#0284c7',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Example component to demonstrate theme variables
const ThemeDemo = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          backgroundColor: 'var(--color-background-primary)',
          color: 'var(--color-foreground-primary)',
          padding: '2rem',
          borderRadius: 'var(--border-radius-l)',
          border: '1px solid var(--color-border-primary)',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h2">Theme Customization</Typography>
        <Typography variant="body">
          This example demonstrates how to customize the theme variables to create a unique look and feel.
        </Typography>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        
        <div
          style={{
            backgroundColor: 'var(--color-background-secondary)',
            color: 'var(--color-foreground-secondary)',
            padding: '1rem',
            borderRadius: 'var(--border-radius-m)',
            marginTop: '1rem',
            border: '1px solid var(--color-border-secondary)',
          }}
        >
          <Typography variant="h4">Secondary Background</Typography>
          <Typography variant="body">
            This section uses the secondary background color.
          </Typography>
        </div>
        
        <div
          style={{
            backgroundColor: 'var(--color-background-tertiary)',
            color: 'var(--color-foreground-tertiary)',
            padding: '1rem',
            borderRadius: 'var(--border-radius-m)',
            marginTop: '1rem',
            border: '1px solid var(--color-border-secondary)',
          }}
        >
          <Typography variant="h4">Tertiary Background</Typography>
          <Typography variant="body">
            This section uses the tertiary background color.
          </Typography>
        </div>
      </div>
      
      <div style={{ textAlign: 'right' }}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export const DefaultTheme: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <ThemeProvider>
      <CustomThemeWrapper>
        <ThemeDemo />
      </CustomThemeWrapper>
    </ThemeProvider>
  ),
};

export const BrandTheme: Story = {
  render: () => (
    <ThemeProvider>
      <BrandThemeWrapper>
        <ThemeDemo />
      </BrandThemeWrapper>
    </ThemeProvider>
  ),
};

export const CustomDarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <CustomDarkThemeWrapper>
        <ThemeDemo />
      </CustomDarkThemeWrapper>
    </ThemeProvider>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Default Theme
        </Typography>
        <ThemeProvider>
          <ThemeDemo />
        </ThemeProvider>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Custom Theme
        </Typography>
        <ThemeProvider>
          <CustomThemeWrapper>
            <ThemeDemo />
          </CustomThemeWrapper>
        </ThemeProvider>
      </div>
      
      <div>
        <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Brand Theme
        </Typography>
        <ThemeProvider>
          <BrandThemeWrapper>
            <ThemeDemo />
          </BrandThemeWrapper>
        </ThemeProvider>
      </div>
    </div>
  ),
};
