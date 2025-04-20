import type { Preview, Decorator } from '@storybook/react';
import '../lib/index.css';

// @ts-ignore
import { ThemeProvider, ThemeSwitcher } from '@/components';


// Custom decorator that wraps stories with ThemeProvider and adds ThemeSwitcher
const withThemeProvider: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <div style={{ padding: '1rem',
              width: '100%',
          position: 'relative',
              height: '100%' }}>

          <ThemeSwitcher className="fixed top-4 right-4 z-50" />

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
