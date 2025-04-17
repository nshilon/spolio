import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils.tsx';
import { axe } from 'jest-axe';
import Input from './input';
import {createRef} from "react";

describe('Input', () => {
  it('renders correctly with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with a label', () => {
    render(<Input label="Username" placeholder="Enter username" />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', expect.any(String));
    
    const input = screen.getByPlaceholderText('Enter username');
    expect(input).toBeInTheDocument();
    expect(input.id).toBe(label.getAttribute('for'));
  });

  it('renders with helper text', () => {
    render(<Input helperText="Must be at least 8 characters" placeholder="Enter password" />);
    const helperText = screen.getByText('Must be at least 8 characters');
    expect(helperText).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(helperText.id));
  });

  it('renders with error message', () => {
    render(<Input errorMessage="This field is required" placeholder="Enter email" />);
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(errorMessage.id));
  });

  it('renders with both helper text and error message, but only shows error', () => {
    render(
      <Input 
        helperText="Enter your email address" 
        errorMessage="Invalid email format" 
        placeholder="Enter email" 
      />
    );
    
    expect(screen.queryByText('Enter your email address')).not.toBeInTheDocument();
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Input variant="default" placeholder="Default variant" />);
    let input = screen.getByPlaceholderText('Default variant');
    expect(input).toHaveClass('border-neutral-300');
    
    rerender(<Input variant="ghost" placeholder="Ghost variant" />);
    input = screen.getByPlaceholderText('Ghost variant');
    expect(input).toHaveClass('bg-neutral-100');
    
    rerender(<Input variant="error" placeholder="Error variant" />);
    input = screen.getByPlaceholderText('Error variant');
    expect(input).toHaveClass('border-danger-300');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Input size="sm" placeholder="Small input" />);
    let input = screen.getByPlaceholderText('Small input');
    expect(input).toHaveClass('h-8');
    
    rerender(<Input size="md" placeholder="Medium input" />);
    input = screen.getByPlaceholderText('Medium input');
    expect(input).toHaveClass('h-10');
    
    rerender(<Input size="lg" placeholder="Large input" />);
    input = screen.getByPlaceholderText('Large input');
    expect(input).toHaveClass('h-12');
  });

  it('applies fullWidth correctly', () => {
    const { rerender } = render(<Input fullWidth={true} placeholder="Full width" />);
    let input = screen.getByPlaceholderText('Full width');
    expect(input).toHaveClass('w-full');
    
    rerender(<Input fullWidth={false} placeholder="Auto width" />);
    input = screen.getByPlaceholderText('Auto width');
    expect(input).toHaveClass('w-auto');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('passes additional props to the input element', () => {
    render(
      <Input 
        placeholder="Additional props" 
        data-testid="test-input"
        maxLength={10}
        readOnly
      />
    );
    
    const input = screen.getByPlaceholderText('Additional props');
    expect(input).toHaveAttribute('data-testid', 'test-input');
    expect(input).toHaveAttribute('maxlength', '10');
    expect(input).toHaveAttribute('readonly');
  });

  it('marks required fields correctly', () => {
    render(<Input label="Email" required placeholder="Enter email" />);
    
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toHaveAttribute('required');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Input label="Username" placeholder="Enter username" />
        <Input 
          label="Email" 
          type="email" 
          required 
          helperText="We'll never share your email"
          placeholder="Enter email" 
        />
        <Input 
          label="Password" 
          type="password" 
          errorMessage="Password is too short"
          placeholder="Enter password" 
        />
      </div>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations with aria-labelledby instead of label', async () => {
    const { container } = render(
      <div>
        <h2 id="custom-label">Custom Label</h2>
        <Input aria-labelledby="custom-label" placeholder="Custom labeled input" />
      </div>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
