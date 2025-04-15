import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from '../../components/theme/theme-switcher';
// import { ThemeProvider } from '../../components/theme/theme-context';

const meta = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // No need for decorators here as the global decorator in preview.tsx already provides ThemeProvider
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-theme-switcher',
  },
};

export const ThemeSwitcherDemo: StoryObj = {

  render: () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
        borderRadius: 'var(--border-radius-l)',
        backgroundColor: 'var(--color-background-secondary)',
        border: '1px solid var(--color-border-primary)',
        transition: 'all var(--transition-normal) ease',
      }}>
        <h2>Theme Switcher Demo</h2>
        <p>Click the button below to toggle between light and dark themes:</p>
        <ThemeSwitcher />
        <div style={{
          padding: '1rem',
          backgroundColor: 'var(--color-background-primary)',
          border: '1px solid var(--color-border-primary)',
          borderRadius: 'var(--border-radius-m)',
        }}>
          <p>This content will change appearance based on the selected theme.</p>
        </div>
      </div>
    );
  },
};
