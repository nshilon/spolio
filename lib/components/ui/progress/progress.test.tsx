import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils.tsx';
import { axe } from 'jest-axe';
import Progress from './progress';

describe('Progress', () => {
  it('renders correctly with default props', () => {
    render(<Progress />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    expect(progress).toHaveAttribute('aria-valuenow', '0');
  });

  it('renders with custom value and max', () => {
    render(<Progress value={50} max={200} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '200');
    expect(progress).toHaveAttribute('aria-valuenow', '50');
    expect(progress).toHaveAttribute('aria-valuetext', '25%');
  });

  it('renders in indeterminate state', () => {
    render(<Progress indeterminate />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-busy', 'true');
    expect(progress).not.toHaveAttribute('aria-valuenow');
    expect(progress).not.toHaveAttribute('aria-valuetext');
  });

  it('shows label when showLabel is true', () => {
    render(<Progress value={75} showLabel />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('uses custom label formatter when provided', () => {
    render(
      <Progress 
        value={42} 
        max={100} 
        showLabel 
        formatLabel={(value, max) => `${value} of ${max} completed`} 
      />
    );
    expect(screen.getByText('42 of 100 completed')).toBeInTheDocument();
  });

  it('applies different size variants correctly', () => {
    const { rerender } = render(<Progress size="small" data-testid="progress" />);
    let progressBar = screen.getByTestId('progress').querySelector('div');
    expect(progressBar).toHaveClass('h-1');
    
    rerender(<Progress size="medium" data-testid="progress" />);
    progressBar = screen.getByTestId('progress').querySelector('div');
    expect(progressBar).toHaveClass('h-2');
    
    rerender(<Progress size="large" data-testid="progress" />);
    progressBar = screen.getByTestId('progress').querySelector('div');
    expect(progressBar).toHaveClass('h-4');
  });

  it('applies different color variants correctly', () => {
    const { rerender } = render(<Progress color="primary" data-testid="progress" />);
    let progressIndicator = screen.getByLabelText( 'progress-indicator');
    expect(progressIndicator).toHaveClass('bg-primary-600');
    
    rerender(<Progress color="success" data-testid="progress" />);
    progressIndicator = screen.getByLabelText( 'progress-indicator');
    expect(progressIndicator).toHaveClass('bg-success-600');
    
    rerender(<Progress color="warning" data-testid="progress" />);
    progressIndicator = screen.getByLabelText( 'progress-indicator');
    expect(progressIndicator).toHaveClass('bg-warning-600');
    
    rerender(<Progress color="danger" data-testid="progress" />);
    progressIndicator = screen.getByLabelText( 'progress-indicator');
    expect(progressIndicator).toHaveClass('bg-danger-600');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Progress aria-label="Loading progress" value={30} />
        <Progress aria-label="Indeterminate loading" indeterminate />
        <Progress aria-label="Download progress" value={75} showLabel />
      </div>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
