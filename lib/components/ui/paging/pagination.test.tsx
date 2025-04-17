import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@/test/utils.tsx';
import { axe } from 'jest-axe';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('renders correctly with default props', () => {
    const onChangeIndex = vi.fn();
    render(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={onChangeIndex}
        hasNext={true}
        hasPrevious={false}
      />
    );

    // Check if pagination displays correct page info
    const pageInfo = screen.getByLabelText('Page');
    expect(pageInfo).toHaveTextContent('1 of 10');

    // Check if navigation buttons are present
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4); // First, Previous, Next, Last

    // First page should have disabled previous buttons
    expect(buttons[0]).toBeDisabled(); // First
    expect(buttons[1]).toBeDisabled(); // Previous
    expect(buttons[2]).not.toBeDisabled(); // Next
    expect(buttons[3]).not.toBeDisabled(); // Last
  });

  it('handles page navigation correctly', () => {
    const onChangeIndex = vi.fn();
    render(
      <Pagination
        pageSize={10}
        index={2}
        total={10}
        onChangeIndex={onChangeIndex}
        hasNext={true}
        hasPrevious={true}
      />
    );

    // Check if pagination displays correct page info
    const pageInfo = screen.getByLabelText('Page');
    expect(pageInfo).toHaveTextContent('3 of 10');

    // All navigation buttons should be enabled for middle pages
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).not.toBeDisabled(); // First
    expect(buttons[1]).not.toBeDisabled(); // Previous
    expect(buttons[2]).not.toBeDisabled(); // Next
    expect(buttons[3]).not.toBeDisabled(); // Last

    // Test navigation
    fireEvent.click(buttons[0]); // First
    expect(onChangeIndex).toHaveBeenCalledWith(0);

    fireEvent.click(buttons[1]); // Previous
    expect(onChangeIndex).toHaveBeenCalledWith(1);

    fireEvent.click(buttons[2]); // Next
    expect(onChangeIndex).toHaveBeenCalledWith(3);

    fireEvent.click(buttons[3]); // Last
    expect(onChangeIndex).toHaveBeenCalledWith(9);
  });

  it('disables next buttons on last page', () => {
    const onChangeIndex = vi.fn();
    render(
      <Pagination
        pageSize={10}
        index={9}
        total={10}
        onChangeIndex={onChangeIndex}
        hasNext={false}
        hasPrevious={true}
      />
    );

    // Check if pagination displays correct page info
    const pageInfo = screen.getByLabelText('Page');
    expect(pageInfo).toHaveTextContent('10 of 10');

    // Last page should have disabled next buttons
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).not.toBeDisabled(); // First
    expect(buttons[1]).not.toBeDisabled(); // Previous
    expect(buttons[2]).toBeDisabled(); // Next
    expect(buttons[3]).toBeDisabled(); // Last
  });

  it('handles single page correctly', () => {
    const onChangeIndex = vi.fn();
    render(
      <Pagination
        pageSize={10}
        index={0}
        total={1}
        onChangeIndex={onChangeIndex}
        hasNext={false}
        hasPrevious={false}
      />
    );

    // Check if pagination displays correct page info
    const pageInfo = screen.getByText(/of/).closest('p');
    expect(pageInfo).toHaveTextContent('1');
    expect(pageInfo).toHaveTextContent('1');

    // All navigation buttons should be disabled for single page
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeDisabled(); // First
    expect(buttons[1]).toBeDisabled(); // Previous
    expect(buttons[2]).toBeDisabled(); // Next
    expect(buttons[3]).toBeDisabled(); // Last
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        size="small"
        hasNext={true}
        hasPrevious={false}
      />
    );

    const container = screen.getByLabelText('Pagination');
    expect(container).toHaveClass('text-sm');

    rerender(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        size="medium"
        hasNext={true}
        hasPrevious={false}
      />
    );

    expect(container).toHaveClass('text-base');

    rerender(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        size="large"
        hasNext={true}
        hasPrevious={false}
      />
    );

    expect(container).toHaveClass('text-lg');
  });

  it('accepts additional className', () => {
    render(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        className="custom-class"
        hasNext={true}
        hasPrevious={false}
      />
    );

    const container = screen.getByLabelText('Pagination');
    expect(container).toHaveClass('custom-class');
  });

  it('passes additional props to the container', () => {
    render(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        data-testid="pagination-test"
        hasNext={true}
        hasPrevious={false}
      />
    );

    expect(screen.getByTestId('pagination-test')).toBeInTheDocument();
  });

  it('handles pageSize correctly', () => {
    const onChangeIndex = vi.fn();
    render(
      <Pagination
        pageSize={5}
        index={0}
        total={10}
        onChangeIndex={onChangeIndex}
        hasNext={true}
        hasPrevious={false}
      />
    );

    // Check if pagination displays correct page info
    const pageInfo = screen.getByText(/of/).closest('p');
    expect(pageInfo).toHaveTextContent('1');
    expect(pageInfo).toHaveTextContent('10');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Pagination
        pageSize={10}
        index={2}
        total={10}
        onChangeIndex={() => {}}
        hasNext={true}
        hasPrevious={true}
      />
    );

    // Add aria-labels to all buttons that don't have them
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button, index) => {
      if (!button.getAttribute('aria-label')) {
        if (index === 0) button.setAttribute('aria-label', 'First');
        if (index === 3) button.setAttribute('aria-label', 'Last');
      }
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has correct ARIA attributes', () => {
    render(
      <Pagination
        pageSize={10}
        index={0}
        total={10}
        onChangeIndex={() => {}}
        hasNext={true}
        hasPrevious={false}
      />
    );

    // Check if container has correct ARIA label
    const container = screen.getByLabelText('Pagination');
    expect(container).toHaveAttribute('aria-label', 'Pagination');

    // Check if buttons have correct ARIA labels
    const buttons = screen.getAllByRole('button');
    expect(buttons[1]).toHaveAttribute('aria-label', 'Previous');
    expect(buttons[2]).toHaveAttribute('aria-label', 'Next');
  });
});
