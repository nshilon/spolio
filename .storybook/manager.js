import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Create custom dark Storybook theme
const entaUIDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Simple UI Kit',
  brandUrl: './',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // UI
  appBg: '#171717',
  appContentBg: '#262626',
  appBorderColor: '#404040',
  appBorderRadius: 8,

  // Typography
  fontBase: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#f5f5f5',
  textInverseColor: '#171717',
  textMutedColor: '#a3a3a3',

  // Toolbar default and active colors
  barTextColor: '#f5f5f5',
  barSelectedColor: '#8A4DFF',
  barBg: '#171717',

  // Form colors
  inputBg: '#404040',
  inputBorder: '#525252',
  inputTextColor: '#f5f5f5',
  inputBorderRadius: 4,

  // Colors
  colorPrimary: '#8A4DFF',
  colorSecondary: '#6F3AFF',
});

// Create custom light Storybook theme
const entaUILightTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Simple UI Kit',
  brandUrl: './',
  brandImage: '/logo.svg',
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

// Determine initial theme based on system preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = prefersDarkMode ? entaUIDarkTheme : entaUILightTheme;

// Add a theme toggle button to Storybook
addons.setConfig({
  theme: initialTheme,
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
        const nextTheme = currentTheme.base === 'dark' ? entaUILightTheme : entaUIDarkTheme;
        addons.setConfig({ theme: nextTheme });
      },
    },
  },
});