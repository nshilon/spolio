# Table Component

This directory contains the implementation of the Table component and its related sub-components.

## Overview

The Table component provides a way to display tabular data with various styling options and accessibility features.

## Components

- `Table`: The main table container
- `TableHead`: The header section of the table
- `TableBody`: The body section of the table
- `TableFoot`: The footer section of the table
- `TableRow`: A row within the table
- `TableCell`: A cell within a row (can be a header cell or a data cell)

## Usage

### Basic Usage

```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/components';

<Table>
  <TableHead>
    <TableRow>
      <TableCell as="th">Name</TableCell>
      <TableCell as="th">Email</TableCell>
      <TableCell as="th">Role</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Footer

```tsx
import { Table, TableHead, TableBody, TableFoot, TableRow, TableCell } from '@/components';

<Table>
  <TableHead>
    <TableRow>
      <TableCell as="th">Item</TableCell>
      <TableCell as="th">Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Product 1</TableCell>
      <TableCell>$10.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Product 2</TableCell>
      <TableCell>$15.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFoot>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>$25.00</TableCell>
    </TableRow>
  </TableFoot>
</Table>
```

### With Caption

```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/components';

<Table caption="User Information" captionSide="top">
  <TableHead>
    <TableRow>
      <TableCell as="th">Name</TableCell>
      <TableCell as="th">Email</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Styling Options

```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/components';

// Striped rows
<Table striped>
  {/* ... */}
</Table>

// Different sizes
<Table size="sm">
  {/* ... */}
</Table>

// Bordered or borderless
<Table variant="bordered">
  {/* ... */}
</Table>

// Disable row hover effect
<Table hoverable={false}>
  {/* ... */}
</Table>

// Cell alignment
<TableCell align="right">
  $10.00
</TableCell>
```

## Accessibility

The Table component follows accessibility best practices:

- Uses semantic HTML elements (`<table>`, `<thead>`, `<tbody>`, etc.)
- Properly associates headers with data cells
- Supports keyboard navigation
- Includes proper ARIA attributes
- Provides caption support for table descriptions
