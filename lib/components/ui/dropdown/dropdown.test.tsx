import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { axe } from 'jest-axe';
import { Dropdown } from './dropdown-component';
import userEvent from '@testing-library/user-event';

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

describe('Dropdown', () => {
  it('renders correctly with default props', () => {
    render(<Dropdown options={defaultOptions} />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Dropdown options={defaultOptions} label="Fruit Selection" />);
    const label = screen.getByText('Fruit Selection');
    expect(label).toBeInTheDocument();
  });

  it('renders with a placeholder', () => {
    render(<Dropdown options={defaultOptions} placeholder="Choose a fruit" />);
    const placeholder = screen.getByText('Choose a fruit');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(
      <Dropdown
        options={defaultOptions}
        helperText="Select your favorite fruit"
      />
    );
    const helperText = screen.getByText('Select your favorite fruit');
    expect(helperText).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(
      <Dropdown options={defaultOptions} errorMessage="Please select a fruit" />
    );
    const errorMessage = screen.getByText('Please select a fruit');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders as required', () => {
    render(<Dropdown options={defaultOptions} label="Fruit" required />);
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<Dropdown options={defaultOptions} disabled />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeDisabled();
  });

  it('calls onValueChange when a value is selected', async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Dropdown
        options={defaultOptions}
        onValueChange={onValueChange}
      />
    );
    
    // Open the dropdown
    const dropdown = screen.getByRole('combobox');
    await user.click(dropdown);
    
    // Select an option
    const option = screen.getByText('Apple');
    await user.click(option);
    
    expect(onValueChange).toHaveBeenCalledWith('apple');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Dropdown options={defaultOptions} label="Fruit" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
