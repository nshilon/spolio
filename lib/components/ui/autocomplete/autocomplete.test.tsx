import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@/test/utils';
import { axe } from 'jest-axe';
import { Autocomplete } from './autocomplete';
// import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

describe('Autocomplete', () => {
  it('renders correctly with default props', () => {
    render(<Autocomplete options={defaultOptions} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Autocomplete options={defaultOptions} label="Fruit Selection" />);
    const label = screen.getByText('Fruit Selection');
    expect(label).toBeInTheDocument();
  });

  it('renders with a placeholder', () => {
    render(<Autocomplete options={defaultOptions} placeholder="Choose a fruit" />);
    const input = screen.getByPlaceholderText('Choose a fruit');
    expect(input).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(
      <Autocomplete
        options={defaultOptions}
        helperText="Select your favorite fruit"
      />
    );
    const helperText = screen.getByText('Select your favorite fruit');
    expect(helperText).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(
      <Autocomplete options={defaultOptions} errorMessage="Please select a fruit" />
    );
    const errorMessage = screen.getByText('Please select a fruit');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders as required', () => {
    render(<Autocomplete options={defaultOptions} label="Fruit" required />);
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<Autocomplete options={defaultOptions} disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('shows options when focused', async () => {
    const { user } = render(<Autocomplete options={defaultOptions} />);
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.type(input, 'a');
    
    // Wait for the popover to appear
    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });
  });

  it('filters options based on input', async () => {
    const { user } = render(<Autocomplete options={defaultOptions} />);
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.type(input, 'ap');
    
    // Wait for the filtered options
    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Grape')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });
  });

  it('selects an option when clicked', async () => {
    const onValueChange = vi.fn();
    const { user } = render(
      <Autocomplete
        options={defaultOptions}
        onValueChange={onValueChange}
      />
    );
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.type(input, 'a');
    
    // Wait for the options to appear
    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });
    
    // Click on an option
    await user.click(screen.getByText('Apple'));
    
    expect(onValueChange).toHaveBeenCalledWith('apple');
    expect(input).toHaveValue('Apple');
  });

  it('clears the input when clear button is clicked', async () => {
    const onValueChange = vi.fn();
    const { user } = render(
      <Autocomplete
        options={defaultOptions}
        onValueChange={onValueChange}
        value="Apple"
      />
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Apple');
    
    // Click the clear button
    const clearButton = screen.getByLabelText('Clear');
    await user.click(clearButton);
    
    expect(onValueChange).toHaveBeenCalledWith('');
    expect(input).toHaveValue('');
  });

  it('allows free text input when allowFreeText is true', async () => {
    const onValueChange = vi.fn();
    const { user } = render(
      <Autocomplete
        options={defaultOptions}
        onValueChange={onValueChange}
        allowFreeText
      />
    );
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.type(input, 'Custom Value');
    
    expect(onValueChange).toHaveBeenCalledWith('Custom Value');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Autocomplete ref={ref} options={defaultOptions} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Autocomplete options={defaultOptions} label="Fruit" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
