import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { axe } from 'jest-axe';
import Icon from './icon.tsx';
import { registerIcon, hasIcon, getIcon } from './icon-registry';

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

describe('IconRegistry', () => {
  it('can register and retrieve custom icons', () => {
    // Register a custom icon
    const customIcon = {
      content: <path d="M1 1L23 23M1 23L23 1" />,
      viewBox: '0 0 24 24',
    };

    registerIcon('custom-icon', customIcon);

    // Check if the icon exists in the registry
    expect(hasIcon('custom-icon')).toBe(true);

    // Get the icon from the registry
    const retrievedIcon = getIcon('custom-icon');
    expect(retrievedIcon).toEqual(customIcon);

    // Render the custom icon
    render(<Icon name="custom-icon" data-testid="custom-icon" />);
    const icon = screen.getByTestId('custom-icon');
    expect(icon).toBeInTheDocument();
  });
});
