import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/utils';
import { axe } from 'jest-axe';
import Icon from './icon.tsx';

describe('Icon', () => {
  it('renders correctly with default props', () => {
    render(<Icon name="info" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon.tagName.toLowerCase()).toBe('svg');
    expect(icon).toHaveClass('icon');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Icon name="info" size="small" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--small');

    rerender(<Icon name="info" size="medium" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--medium');

    rerender(<Icon name="info" size="large" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--large');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Icon name="info" variant="primary" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--primary');

    rerender(<Icon name="info" variant="success" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--success');

    rerender(<Icon name="info" variant="warning" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--warning');

    rerender(<Icon name="info" variant="danger" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--danger');
  });

  it('renders different icons based on name prop', () => {
    const { rerender } = render(<Icon name="check" data-testid="icon" />);
    let icon = screen.getByTestId('icon');
    expect(icon.querySelector('path')).toBeInTheDocument();

    rerender(<Icon name="info" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon.querySelector('circle')).toBeInTheDocument();
    expect(icon.querySelector('path')).toBeInTheDocument();
  });

  it('accepts additional props', () => {
    render(<Icon name="info" data-testid="icon" aria-label="Information" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('aria-label', 'Information');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Icon name="info" aria-label="Information" />
      </div>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
