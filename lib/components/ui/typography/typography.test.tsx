import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/utils';
import { axe } from 'jest-axe';
import { Typography } from './typography';

describe('Typography', () => {
  it('renders correctly with default props', () => {
    render(<Typography>Hello World</Typography>);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('p');
    expect(element).toHaveClass('typography');
    expect(element).toHaveClass('typography--body');
  });

  it('renders different variants with correct HTML elements', () => {
    const { rerender } = render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1').tagName.toLowerCase()).toBe('h1');
    
    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2').tagName.toLowerCase()).toBe('h2');
    
    rerender(<Typography variant="body">Body Text</Typography>);
    expect(screen.getByText('Body Text').tagName.toLowerCase()).toBe('p');
    
    rerender(<Typography variant="caption">Caption</Typography>);
    expect(screen.getByText('Caption').tagName.toLowerCase()).toBe('span');
    
    rerender(<Typography variant="code">Code</Typography>);
    expect(screen.getByText('Code').tagName.toLowerCase()).toBe('code');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Typography size="xs">Extra Small</Typography>);
    expect(screen.getByText('Extra Small')).toHaveClass('typography--xs');
    
    rerender(<Typography size="lg">Large</Typography>);
    expect(screen.getByText('Large')).toHaveClass('typography--lg');
    
    rerender(<Typography size="2xl">2XL</Typography>);
    expect(screen.getByText('2XL')).toHaveClass('typography--2xl');
  });

  it('applies weight classes correctly', () => {
    const { rerender } = render(<Typography weight="light">Light</Typography>);
    expect(screen.getByText('Light')).toHaveClass('typography--light');
    
    rerender(<Typography weight="bold">Bold</Typography>);
    expect(screen.getByText('Bold')).toHaveClass('typography--bold');
  });

  it('applies color classes correctly', () => {
    const { rerender } = render(<Typography color="primary">Primary</Typography>);
    expect(screen.getByText('Primary')).toHaveClass('typography--color-primary');
    
    rerender(<Typography color="danger">Danger</Typography>);
    expect(screen.getByText('Danger')).toHaveClass('typography--color-danger');
  });

  it('applies alignment classes correctly', () => {
    const { rerender } = render(<Typography align="center">Centered</Typography>);
    expect(screen.getByText('Centered')).toHaveClass('typography--center');
    
    rerender(<Typography align="right">Right</Typography>);
    expect(screen.getByText('Right')).toHaveClass('typography--right');
  });

  it('applies transform classes correctly', () => {
    const { rerender } = render(<Typography transform="uppercase">Uppercase</Typography>);
    expect(screen.getByText('Uppercase')).toHaveClass('typography--uppercase');
    
    rerender(<Typography transform="capitalize">capitalize</Typography>);
    expect(screen.getByText('capitalize')).toHaveClass('typography--capitalize');
  });

  it('applies decoration classes correctly', () => {
    const { rerender } = render(<Typography decoration="underline">Underlined</Typography>);
    expect(screen.getByText('Underlined')).toHaveClass('typography--underline');
    
    rerender(<Typography decoration="lineThrough">Strikethrough</Typography>);
    expect(screen.getByText('Strikethrough')).toHaveClass('typography--line-through');
  });

  it('allows overriding the HTML element with the "as" prop', () => {
    render(<Typography variant="h1" as="div">Heading as div</Typography>);
    expect(screen.getByText('Heading as div').tagName.toLowerCase()).toBe('div');
    expect(screen.getByText('Heading as div')).toHaveClass('typography--h1');
  });

  it('accepts additional className', () => {
    render(<Typography className="custom-class">With custom class</Typography>);
    expect(screen.getByText('With custom class')).toHaveClass('custom-class');
    expect(screen.getByText('With custom class')).toHaveClass('typography');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Typography variant="h1">Accessible Heading</Typography>
        <Typography>Accessible paragraph</Typography>
      </div>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
