import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Button from './button';
import {render, screen} from "@/test/utils.tsx";
import { vi } from 'vitest';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const { user } = render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard interactions', async () => {
    const handleClick = vi.fn();
    const { user } = render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard('[Space]');
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard('[Enter]');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('supports disabled state', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Button aria-label="Test button">Click me</Button>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('maintains accessibility when disabled', async () => {
    const { container } = render(
      <Button disabled aria-label="Disabled button">
        Click me
      </Button>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders as an anchor tag when as="a" is provided', () => {
    render(
      <Button as="a" href="https://example.com">
        Link Button
      </Button>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Link Button');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).not.toHaveAttribute('type');
  });

  it('renders as a button by default', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Default Button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('maintains styling when rendered as an anchor', () => {
    render(
      <Button as="a" href="#" variant="primary" size="medium">
        Styled Link
      </Button>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('button--primary');
    expect(link).toHaveClass('button--medium');
  });

  it('passes additional props to the rendered element', () => {
    render(
      <Button as="a" href="#" target="_blank" rel="noopener noreferrer" data-testid="test-link">
        External Link
      </Button>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('data-testid', 'test-link');
  });
});