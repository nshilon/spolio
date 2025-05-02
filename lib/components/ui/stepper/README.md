# Stepper Component

This directory contains the implementation of the Stepper component and its related sub-components.

## Overview

The Stepper component provides a way to display progress through a sequence of logical and numbered steps. It's commonly used for multi-step forms, wizards, or any process that requires users to complete steps in a specific order.

## Components

- `Stepper`: The main container component
- `StepperStep`: Individual step component

## Usage

### Basic Usage

```tsx
import { Stepper, StepperStep } from '@/components';

<Stepper activeStep={1}>
  <StepperStep label="Step 1" description="First step description" />
  <StepperStep label="Step 2" description="Second step description" />
  <StepperStep label="Step 3" description="Third step description" />
</Stepper>
```

### Vertical Orientation

```tsx
import { Stepper, StepperStep } from '@/components';

<Stepper activeStep={1} orientation="vertical">
  <StepperStep label="Step 1" description="First step description" />
  <StepperStep label="Step 2" description="Second step description" />
  <StepperStep label="Step 3" description="Third step description" />
</Stepper>
```

### Custom Icons

```tsx
import { Stepper, StepperStep, Icon } from '@/components';

<Stepper activeStep={1}>
  <StepperStep 
    label="Account" 
    description="Create an account" 
    icon={<Icon name="user" />} 
  />
  <StepperStep 
    label="Profile" 
    description="Complete your profile" 
    icon={<Icon name="profile" />} 
  />
  <StepperStep 
    label="Confirm" 
    description="Confirm your details" 
    icon={<Icon name="check" />} 
  />
</Stepper>
```

### Optional Steps

```tsx
import { Stepper, StepperStep } from '@/components';

<Stepper activeStep={1}>
  <StepperStep label="Account" description="Create an account" />
  <StepperStep label="Profile" description="Complete your profile" optional />
  <StepperStep label="Confirm" description="Confirm your details" />
</Stepper>
```

## Props

### Stepper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activeStep` | `number` | `0` | The active step index (zero-based) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the stepper |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the step indicators |
| `showConnectors` | `boolean` | `true` | Whether to show connectors between steps |

### StepperStep Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | The label of the step |
| `description` | `string` | - | Optional description of the step |
| `icon` | `ReactNode` | - | Optional icon to display instead of the step number |
| `completedIcon` | `ReactNode` | `<Icon name="check" />` | Optional completed icon to display when the step is completed |
| `index` | `number` | - | The index of the step (automatically calculated if not provided) |
| `optional` | `boolean` | `false` | Whether the step is optional |
