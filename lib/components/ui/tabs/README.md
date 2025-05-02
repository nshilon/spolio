# Tabs Component

This directory contains the implementation of the Tabs component and its related sub-components.

## Overview

The Tabs component provides a way to organize content into separate views that are displayed one at a time. It's commonly used for navigation, settings panels, and other content that needs to be organized into discrete sections.

## Components

- `Tabs`: The main container component
- `TabsList`: Container for the tab buttons
- `TabsTrigger`: Individual tab button
- `TabsContent`: Content panel for each tab

## Usage

### Basic Usage

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>
```

### Controlled Tabs

```tsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
    </Tabs>
  );
}
```

### Styling Options

```tsx
// Different variants
<Tabs variant="default">
  {/* ... */}
</Tabs>

<Tabs variant="underline">
  {/* ... */}
</Tabs>

<Tabs variant="pills">
  {/* ... */}
</Tabs>

// Different sizes
<Tabs size="sm">
  {/* ... */}
</Tabs>

<Tabs size="md">
  {/* ... */}
</Tabs>

<Tabs size="lg">
  {/* ... */}
</Tabs>

// Disabled tab
<TabsTrigger value="tab3" disabled>
  Tab 3 (Disabled)
</TabsTrigger>
```

## Accessibility

The Tabs component follows the WAI-ARIA Tabs Pattern for accessibility:

- Proper ARIA roles are applied: `tablist`, `tab`, and `tabpanel`
- Keyboard navigation is supported
- Focus management is handled correctly
- Proper labeling and relationships between tabs and panels

## Customization

The Tabs component can be customized using CSS variables defined in `lib/design-tokens/components/tabs.css`.
