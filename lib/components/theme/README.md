# Theming System

This directory contains the theming system for the UI kit.

## Components

- `ThemeProvider`: Provides theme context to all components
- `ThemeSwitcher`: Allows users to toggle between light and dark themes

## Documentation

Due to issues with MDX rendering in Storybook, we've created a standalone HTML page that demonstrates the theming system:

- `/public/theming-guide.html`: A comprehensive guide to the theming system

You can access this guide by opening the HTML file directly in your browser.

## Example

We've also created a React component that demonstrates the theming system:

- `ThemingExample`: A component that showcases the theming system

You can find this component in the Storybook under "Examples/Theming Example".

## Theme Variables

The theming system uses CSS custom properties (variables) to define colors, spacing, typography, and other design tokens. These variables are defined in the `:root` selector and can be overridden to customize the appearance of components.

### Color Variables

- `--color-primary-500`: Primary color (500)
- `--color-primary-600`: Primary color (600)
- `--color-success-500`: Success color
- `--color-warning-500`: Warning color
- `--color-danger-500`: Danger color
- `--color-info-500`: Info color

### Semantic Color Variables

- `--color-background-primary`: Primary background color
- `--color-background-secondary`: Secondary background color
- `--color-background-tertiary`: Tertiary background color
- `--color-foreground-primary`: Primary text color
- `--color-foreground-secondary`: Secondary text color
- `--color-foreground-tertiary`: Tertiary text color

## Customizing Themes

You can customize the theme by overriding the CSS variables in your application's CSS:

```css
:root {
  /* Override primary color */
  --color-primary-500: #0070f3;
  --color-primary-600: #0060df;
  
  /* Override border radius */
  --border-radius-m: 0.5rem;
}
```

## Dark Mode

You can also customize the dark mode theme by overriding the variables in the `.dark` selector:

```css
.dark {
  /* Override dark mode background colors */
  --color-background-primary: #121212;
  --color-background-secondary: #1e1e1e;
  
  /* Override dark mode text colors */
  --color-foreground-primary: #ffffff;
  --color-foreground-secondary: #e0e0e0;
}
```
