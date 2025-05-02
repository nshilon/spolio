import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Toggle from './toggle';
import { render, screen } from "@/test/utils";
import { vi } from 'vitest';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders with default unchecked state', () => {
    render(<Toggle />);
    expect(screen.getByRole('switch')).not.toBeChecked();
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('renders with checked state when defaultChecked is true', () => {
    render(<Toggle defaultChecked />);
    expect(screen.getByRole('switch')).toBeChecked();
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('handles checked state changes', async () => {
    const handleCheckedChange = vi.fn();
    const { user } = render(
      <Toggle onCheckedChange={handleCheckedChange} />
    );

    const toggle = screen.getByRole('switch');
    await user.click(toggle);

    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('handles keyboard interactions', async () => {
    const handleCheckedChange = vi.fn();
    const { user } = render(
      <Toggle onCheckedChange={handleCheckedChange} />
    );

    const toggle = screen.getByRole('switch');
    await user.tab();
    expect(toggle).toHaveFocus();

    await user.keyboard('[Space]');
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('supports disabled state', () => {
    render(<Toggle disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('renders with a label when showLabel is true', () => {
    render(<Toggle label="Test Label" showLabel />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('positions label correctly based on labelPosition', () => {
    const { rerender } = render(
      <Toggle label="Right Label" showLabel labelPosition="right" data-testid="toggle" />
    );

    // Check that the label is on the right (default)
    const toggleContainer = screen.getByTestId('toggle').parentElement;
    expect(toggleContainer).not.toHaveClass('flex-row-reverse');

    // Rerender with label on the left
    rerender(
      <Toggle label="Left Label" showLabel labelPosition="left" data-testid="toggle" />
    );

    // Check that the label is on the left
    expect(toggleContainer).toHaveClass('flex-row-reverse');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Toggle size="sm" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('h-[var(--toggle-height-sm)]');

    rerender(<Toggle size="md" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('h-[var(--toggle-height-md)]');

    rerender(<Toggle size="lg" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('h-[var(--toggle-height-lg)]');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Toggle variant="primary" data-testid="toggle" />);

    rerender(<Toggle variant="success" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('data-[state=checked]:bg-success-500');

    rerender(<Toggle variant="danger" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('data-[state=checked]:bg-danger-500');

    rerender(<Toggle variant="warning" data-testid="toggle" />);
    expect(screen.getByTestId('toggle')).toHaveClass('data-[state=checked]:bg-warning-500');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Toggle label="Accessible toggle" showLabel />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
