import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/ui/input';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'error', 'success'],
      description: 'The visual style of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take up the full width of its container',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
      description: 'The type of the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We\'ll never share your email with anyone else.',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    errorMessage: 'Password must be at least 8 characters long',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    disabled: true,
    placeholder: 'Enter your username',
    value: 'johndoe',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Search',
    variant: 'ghost',
    placeholder: 'Search...',
    type: 'search',
  },
};

export const Success: Story = {
  args: {
    label: 'Username',
    variant: 'success',
    helperText: 'Username is available',
    placeholder: 'Enter your username',
  },
};

export const Small: Story = {
  args: {
    label: 'API Key',
    size: 'sm',
    placeholder: 'Enter API key',
  },
};

export const Large: Story = {
  args: {
    label: 'Message',
    size: 'lg',
    placeholder: 'Enter your message',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
  },
};

export const Date: Story = {
  args: {
    label: 'Birth Date',
    type: 'date',
    placeholder: 'Select your birth date',
  },
};

export const AutoWidth: Story = {
  args: {
    label: 'Zip Code',
    fullWidth: false,
    placeholder: 'Zip',
  },
};

export const ControlledInput: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <div className="w-80">
        <Input
          label="Controlled Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <p className="mt-4 text-sm">Current value: {value || '(empty)'}</p>
      </div>
    );
  },
};

export const FormExample: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: '',
    });
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prev) => ({ ...prev, [name]: value }));
      
      // Clear errors when user types
      if (errors[name as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Simple validation
      const newErrors = {
        username: !formState.username ? 'Username is required' : '',
        email: !formState.email ? 'Email is required' : !formState.email.includes('@') ? 'Invalid email format' : '',
        password: !formState.password ? 'Password is required' : formState.password.length < 8 ? 'Password must be at least 8 characters' : '',
      };
      
      setErrors(newErrors);
      
      // Check if there are any errors
      if (Object.values(newErrors).some((error) => error)) {
        return;
      }
      
      // Form is valid
      setSubmitted(true);
    };
    
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-success-600 dark:text-success-400 mb-2">Form Submitted!</h3>
            <p className="mb-4">Thank you for your submission.</p>
            <button
              className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
              onClick={() => {
                setFormState({ username: '', email: '', password: '' });
                setErrors({ username: '', email: '', password: '' });
                setSubmitted(false);
              }}
            >
              Reset Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            
            <Input
              label="Username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              errorMessage={errors.username}
              required
              placeholder="Enter your username"
            />
            
            <Input
              label="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              errorMessage={errors.email}
              required
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              errorMessage={errors.password}
              required
              placeholder="Enter your password"
              helperText="Must be at least 8 characters"
            />
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    );
  },
};

export const InputVariants: StoryObj = {
  render: () => (
    <div className="space-y-8 w-full max-w-md">
      <div>
        <h3 className="text-lg font-medium mb-4">Input Variants</h3>
        <div className="space-y-4">
          <Input label="Default Variant" placeholder="Default input" />
          <Input label="Ghost Variant" variant="ghost" placeholder="Ghost input" />
          <Input label="Error Variant" variant="error" placeholder="Error input" />
          <Input label="Success Variant" variant="success" placeholder="Success input" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Input Sizes</h3>
        <div className="space-y-4">
          <Input label="Small Size" size="sm" placeholder="Small input" />
          <Input label="Medium Size" size="md" placeholder="Medium input" />
          <Input label="Large Size" size="lg" placeholder="Large input" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Input States</h3>
        <div className="space-y-4">
          <Input label="Normal State" placeholder="Normal input" />
          <Input label="Disabled State" disabled placeholder="Disabled input" />
          <Input label="Required State" required placeholder="Required input" />
          <Input 
            label="With Helper Text" 
            helperText="This is some helpful information"
            placeholder="Input with helper text" 
          />
          <Input 
            label="With Error Message" 
            errorMessage="This field has an error"
            placeholder="Input with error" 
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Input Types</h3>
        <div className="space-y-4">
          <Input label="Text Input" type="text" placeholder="Text input" />
          <Input label="Email Input" type="email" placeholder="Email input" />
          <Input label="Password Input" type="password" placeholder="Password input" />
          <Input label="Number Input" type="number" placeholder="Number input" />
          <Input label="Date Input" type="date" />
        </div>
      </div>
    </div>
  ),
};
