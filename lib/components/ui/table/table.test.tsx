import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { axe } from 'jest-axe';
import { Table, TableHead, TableBody, TableFoot, TableRow, TableCell } from './index';

describe('Table', () => {
  it('renders correctly', () => {
    render(
      <Table>
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
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('cell')).toHaveLength(4);
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  });

  it('renders with caption', () => {
    render(
      <Table caption="User Information">
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
    );

    expect(screen.getByText('User Information')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell>$10.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item 2</TableCell>
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
    );

    const footerCells = screen.getAllByRole('cell');
    expect(footerCells[footerCells.length - 2]).toHaveTextContent('Total');
    expect(footerCells[footerCells.length - 1]).toHaveTextContent('$25.00');
  });

  it('applies different size variants', () => {
    const { rerender } = render(
      <Table size="sm">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole('table')).toHaveClass('text-sm');

    rerender(
      <Table size="lg">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole('table')).toHaveClass('text-lg');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Table caption="User Information">
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
        <TableFoot>
          <TableRow>
            <TableCell colSpan={3}>Total: 2 users</TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
