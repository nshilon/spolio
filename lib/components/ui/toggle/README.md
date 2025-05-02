# Toggle Component

The Toggle component is a switch that allows users to turn an option on or off.

## Features

- Built on Radix UI's Switch component for accessibility
- Supports different sizes (small, medium, large)
- Supports different variants (default, primary, success, danger, warning)
- Customizable with design tokens
- Fully accessible with keyboard navigation and screen reader support
- Dark mode support

## Usage

### Basic Usage

```tsx
import { Toggle } from '@/components';

// Simple toggle
<Toggle />

// Controlled toggle
const [enabled, setEnabled] = useState(false);
<Toggle checked={enabled} onCheckedChange={setEnabled} />
```

### With Label

```tsx
// Toggle with label on the right (default)
<Toggle label="Enable notifications" showLabel />

// Toggle with label on the left
<Toggle label="Enable notifications" showLabel labelPosition="left" />
```

### Sizes

```tsx
// Small toggle
<Toggle size="sm" />

// Medium toggle (default)
<Toggle size="md" />

// Large toggle
<Toggle size="lg" />
```

### Variants

```tsx
// Default variant
<Toggle variant="default" />

// Primary variant
<Toggle variant="primary" />

// Success variant
<Toggle variant="success" />

// Danger variant
<Toggle variant="danger" />

// Warning variant
<Toggle variant="warning" />
```

### Disabled State

```tsx
<Toggle disabled />
<Toggle checked disabled />
```

## Accessibility

The Toggle component follows WAI-ARIA guidelines for switches:

- Uses proper ARIA roles and states
- Supports keyboard navigation (Tab to focus, Space to toggle)
- Provides visual feedback for focus state
- Associates labels with the toggle for screen readers

## Customization

You can customize the appearance of the Toggle component by modifying the CSS variables in `lib/design-tokens/components/toggle.css`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Whether the toggle is checked |
| `defaultChecked` | `boolean` | - | The default checked state when uncontrolled |
| `onCheckedChange` | `(checked: boolean) => void` | - | Event handler called when the checked state changes |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `required` | `boolean` | `false` | Whether the toggle is required in a form |
| `name` | `string` | - | The name of the toggle when used in a form |
| `value` | `string` | - | The value of the toggle when used in a form |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the toggle |
| `variant` | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `'default'` | The visual style variant of the toggle |
| `label` | `string` | - | Label for the toggle |
| `showLabel` | `boolean` | `false` | Whether to show the label |
| `labelPosition` | `'left' \| 'right'` | `'right'` | Position of the label relative to the toggle |
