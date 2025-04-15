import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';


// Create custom light Storybook theme
const simpleUITheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Simple UI Kit',
  brandUrl: './',
  brandImage: './logo.svg',
  brandTarget: '_self',

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e5e5',
  appBorderRadius: 8,

  // Typography
  fontBase: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#171717',
  textInverseColor: '#ffffff',
  textMutedColor: '#737373',

  // Toolbar default and active colors
  barTextColor: '#171717',
  barSelectedColor: '#8A4DFF',
  barBg: '#fafafa',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d4d4d4',
  inputTextColor: '#171717',
  inputBorderRadius: 4,

  // Colors
  colorPrimary: '#8A4DFF',
  colorSecondary: '#6F3AFF',
});

// Add a theme toggle button to Storybook
addons.setConfig({
  theme: simpleUITheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    'storybook/theme-toggle': {
      icon: 'sun',
      title: 'Toggle Storybook theme',
      onClick: () => {
        const currentTheme = addons.getConfig().theme;
        const nextTheme = currentTheme.base === 'dark' ? simpleUITheme : entaUIDarkTheme;
        addons.setConfig({ theme: nextTheme });
      },
    },
  },
});