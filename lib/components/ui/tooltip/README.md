# Tooltip Component

This directory contains the implementation of the Tooltip component and its related sub-components.

## Overview

The Tooltip component provides a way to display additional information when users hover over an element. It's commonly used for providing context, explanations, or additional details about UI elements.

## Components

- `TooltipProvider`: Provider component that should wrap your application or the section where tooltips are used
- `Tooltip`: The main container component
- `TooltipTrigger`: The element that triggers the tooltip
- `TooltipContent`: The content of the tooltip
- `TooltipComponent`: A convenient wrapper component that combines the above components

## Usage

### Basic Usage

```tsx
import { TooltipComponent, TooltipProvider } from '@/components';

<TooltipProvider>
  <TooltipComponent content="This is a tooltip">
    <Button>Hover me</Button>
  </TooltipComponent>
</TooltipProvider>
```

### Using Individual Components

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      This is a tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Styling Options

```tsx
// Different variants
<TooltipComponent content="Default tooltip" variant="default">
  <Button>Default</Button>
</TooltipComponent>

<TooltipComponent content="Light tooltip" variant="light">
  <Button>Light</Button>
</TooltipComponent>

<TooltipComponent content="Primary tooltip" variant="primary">
  <Button>Primary</Button>
</TooltipComponent>

// Different positions
<TooltipComponent content="Top tooltip" side="top">
  <Button>Top</Button>
</TooltipComponent>

<TooltipComponent content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</TooltipComponent>

// Without arrow
<TooltipComponent content="Tooltip without arrow" hideArrow>
  <Button>No Arrow</Button>
</TooltipComponent>
```

## Accessibility

The Tooltip component follows accessibility best practices:

- Uses proper ARIA attributes
- Supports keyboard navigation
- Provides appropriate focus management
- Includes appropriate timing delays

## Customization

The Tooltip component can be customized using CSS variables defined in `lib/design-tokens/components/tooltip.css`.
