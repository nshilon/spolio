import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableCell
} from '@/components';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A responsive table component for displaying tabular data with various styling options and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'borderless'],
      description: 'The visual style of the table borders',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the table text and padding',
    },
    striped: {
      control: 'boolean',
      description: 'Whether to apply striped rows',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether to apply hover effect on rows',
    },
    caption: {
      control: 'text',
      description: 'Optional caption for the table',
    },
    captionSide: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Position of the caption',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for the tables
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
];

export const Default: Story = {
  args: {
    caption: 'User Information',
    captionSide: 'bottom',
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell colSpan={3}>Total: {users.length} users</TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  ),
};

export const Striped: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithAlignedCells: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell as="th">ID</TableCell>
          <TableCell as="th" align="center">Name</TableCell>
          <TableCell as="th" align="right">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell align="center">{user.name}</TableCell>
            <TableCell align="right">{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const NonHoverable: Story = {
  args: {
    hoverable: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Example of a more complex table with multiple styling options
export const TableVariants: StoryObj = {
  render: () => {
    const products = [
      { id: 1, name: 'Product A', category: 'Electronics', price: 199.99, stock: 25 },
      { id: 2, name: 'Product B', category: 'Books', price: 29.99, stock: 50 },
      { id: 3, name: 'Product C', category: 'Clothing', price: 49.99, stock: 15 },
      { id: 4, name: 'Product D', category: 'Electronics', price: 299.99, stock: 10 },
      { id: 5, name: 'Product E', category: 'Home', price: 99.99, stock: 30 },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px' }}>
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Default Table</h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell as="th">Product</TableCell>
                <TableCell as="th">Category</TableCell>
                <TableCell as="th" align="right">Price</TableCell>
                <TableCell as="th" align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFoot>
              <TableRow>
                <TableCell colSpan={2}>Total Products: {products.length}</TableCell>
                <TableCell align="right">
                  ${products.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {products.reduce((sum, product) => sum + product.stock, 0)}
                </TableCell>
              </TableRow>
            </TableFoot>
          </Table>
        </div>

        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Striped, Small Table</h3>
          <Table striped size="sm">
            <TableHead>
              <TableRow>
                <TableCell as="th">Product</TableCell>
                <TableCell as="th">Category</TableCell>
                <TableCell as="th" align="right">Price</TableCell>
                <TableCell as="th" align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Bordered, Large Table</h3>
          <Table variant="bordered" size="lg">
            <TableHead>
              <TableRow>
                <TableCell as="th">Product</TableCell>
                <TableCell as="th">Category</TableCell>
                <TableCell as="th" align="right">Price</TableCell>
                <TableCell as="th" align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Borderless, Non-Hoverable Table</h3>
          <Table variant="borderless" hoverable={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Product</TableCell>
                <TableCell as="th">Category</TableCell>
                <TableCell as="th" align="right">Price</TableCell>
                <TableCell as="th" align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  },
};
