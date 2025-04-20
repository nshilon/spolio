# Icon Component with IconRegistry

This directory contains the implementation of the Icon component and IconRegistry system.

## Overview

The Icon component has been refactored to use an IconRegistry approach, which allows:

1. Easy extension of available icons
2. Developers to add custom SVG icons to the registry
3. Separation of icon definitions from the component implementation

## Directory Structure

- `icon.tsx`: The main Icon component
- `icon-registry.tsx`: The registry system for managing icons
- `svg/`: Directory containing individual SVG icon definitions
  - `index.ts`: Exports all default icons
  - Individual icon files (e.g., `check.tsx`, `arrow-down.tsx`, etc.)

## Usage

### Basic Usage

```tsx
import { Icon } from '@/components';

// Use a built-in icon
<Icon name="check" size="medium" variant="primary" />
```

### Registering Custom Icons

You can register custom icons to use with the Icon component:

```tsx
import { registerIcon, Icon } from '@/components';

// Register a custom icon
registerIcon('custom-icon', {
  content: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  viewBox: '0 0 24 24',
});

// Use the custom icon
<Icon name="custom-icon" size="large" />
```

### Registering Multiple Icons

```tsx
import { registerIcons, Icon } from '@/components';

// Register multiple icons at once
registerIcons({
  'custom-icon-1': {
    content: <path d="..." />,
    viewBox: '0 0 24 24',
  },
  'custom-icon-2': {
    content: <path d="..." />,
    viewBox: '0 0 24 24',
  },
});
```

### Creating a New Icon File

To add a new icon to the default set:

1. Create a new file in the `svg/` directory (e.g., `my-icon.tsx`)
2. Define the icon using the `IconDefinition` interface
3. Add the icon to the `svg/index.ts` file

Example:

```tsx
// svg/my-icon.tsx
import React from 'react';
import { IconDefinition } from '../icon-registry';

export const MyIcon: IconDefinition = {
  content: <path d="..." />,
  viewBox: '0 0 24 24',
};

export default MyIcon;
```

Then add it to the index:

```tsx
// svg/index.ts
import MyIcon from './my-icon';

export const defaultIcons = {
  // ...existing icons
  'my-icon': MyIcon,
};
```

## API

### Icon Component

| Prop | Type | Description |
|------|------|-------------|
| name | string | The name of the icon to display |
| size | 'small' \| 'medium' \| 'large' | The size of the icon |
| variant | 'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' | The color variant of the icon |
| className | string | Additional CSS classes to apply |
| ...props | SVGProps | Any additional props are passed to the SVG element |

### IconRegistry API

| Function | Description |
|----------|-------------|
| registerIcon(name, definition) | Register a single icon |
| registerIcons(icons) | Register multiple icons at once |
| getIcon(name) | Get an icon definition by name |
| hasIcon(name) | Check if an icon exists in the registry |
| getIconNames() | Get an array of all registered icon names |

### IconDefinition Interface

```tsx
interface IconDefinition {
  content: React.ReactNode; // The SVG content (paths, circles, etc.)
  viewBox?: string; // Optional viewBox attribute (default: '0 0 24 24')
}
```
