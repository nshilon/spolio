import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { axe } from 'jest-axe';
import Badge from './badge';

describe('Badge', () => {
  it('renders correctly with default props', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Badge variant="soft" data-testid="badge">Soft</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-soft-primary-background)]');

    rerender(<Badge variant="critical" data-testid="badge">Critical</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-critical-primary-background)]');

    rerender(<Badge variant="outline" data-testid="badge">Outline</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-outline-primary-background)]');
  });

  it('applies type classes correctly', () => {
    const { rerender } = render(<Badge type="primary" data-testid="badge">Primary</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-soft-primary-background)]');

    rerender(<Badge type="danger" data-testid="badge">Danger</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-soft-danger-background)]');

    rerender(<Badge type="success" data-testid="badge">Success</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-[var(--badge-soft-success-background)]');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Badge size="small" data-testid="badge">Small</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('text-[var(--badge-unit-small-font-size)]');

    rerender(<Badge size="medium" data-testid="badge">Medium</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('text-[var(--badge-unit-medium-font-size)]');

    rerender(<Badge size="large" data-testid="badge">Large</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('text-[var(--badge-unit-large-font-size)]');
  });

  it('combines variant and type correctly', () => {
    render(
      <Badge variant="critical" type="danger" data-testid="badge">
        Critical Danger
      </Badge>
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-[var(--badge-critical-danger-background)]');
    expect(badge).toHaveClass('text-[var(--badge-critical-danger-label)]');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class" data-testid="badge">Custom</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Badge data-testid="badge" aria-label="Status indicator">
        Status
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveAttribute('aria-label', 'Status indicator');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Badge aria-label="Status indicator">New</Badge>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
