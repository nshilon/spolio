import type { Preview, Decorator } from '@storybook/react';
import '../lib/index.css';
import React from 'react';
import { ThemeProvider } from '../lib/components/theme/theme-context';
import ThemeSwitcher from '../lib/components/theme/theme-switcher';

// Custom decorator that wraps stories with ThemeProvider and adds ThemeSwitcher
const withThemeProvider: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <div style={{ padding: '1rem',
              width: '100%',
              height: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem',
              position: 'absolute',
              top: '.1rem',
              right: '.1rem',
          }}
        >
          <ThemeSwitcher />
        </div>
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-background-primary)',
            transition: 'all var(--transition-normal) ease',
          }}
        >
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
      layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'transparent',
      values: [
        { name: 'transparent', value: 'transparent' },
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
      ],
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
