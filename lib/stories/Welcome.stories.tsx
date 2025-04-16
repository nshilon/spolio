import type { Meta, StoryObj } from '@storybook/react';
import {Typography} from "simple-ui";

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const WelcomePage = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}>
        <img src="./logo.svg" alt="Simple UI Kit Logo" style={{ width: '200px', height: '200px' }} />
      </div>
      
      <Typography variant="h1" style={{ textAlign: 'center' }}>Welcome to Simple UI Kit</Typography>
      
      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Simple UI Kit is a modern, accessible, and customizable component library for React applications.
        Built with a focus on developer experience and user accessibility, it provides a comprehensive set
        of components to build beautiful and functional user interfaces.
      </Typography>
      
      <Typography variant="h2">Getting Started</Typography>
      
      <Typography variant="body" >
        Browse components in the sidebar to see examples, documentation, and interactive controls.</Typography>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        margin: '2rem 0',
      }}>
        <div style={{
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: 'var(--color-background-secondary)',
          border: '1px solid var(--color-border-primary)',
        }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-primary-600)' }}>Themeable</h3>
          <p>Fully customizable theming system with light and dark mode support out of the box.</p>
        </div>
        
        <div style={{
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: 'var(--color-background-secondary)',
          border: '1px solid var(--color-border-primary)',
        }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-primary-600)' }}>Accessible</h3>
          <p>Built with accessibility in mind, following WCAG guidelines and best practices.</p>
        </div>
        
        <div style={{
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: 'var(--color-background-secondary)',
          border: '1px solid var(--color-border-primary)',
        }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-primary-600)' }}>Responsive</h3>
          <p>Components designed to work seamlessly across all device sizes and screen types.</p>
        </div>
        
        <div style={{
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: 'var(--color-background-secondary)',
          border: '1px solid var(--color-border-primary)',
        }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-primary-600)' }}>Customizable</h3>
          <p>Easily customize components to match your brand and design requirements.</p>
        </div>
      </div>

      <Typography variant="h2" >Pre requisites</Typography>
      <ul>
        tailwind see how to install <a target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary-600)'}} href="https://tailwindcss.com/docs/installation">here</a>
      </ul>

      <Typography variant="h2">Core Components</Typography>
      
      <ul>
        <li><strong>Button</strong>: Versatile button component with multiple variants and sizes</li>
        <li><strong>Icon</strong>: Comprehensive icon system with customizable sizes and colors</li>
        <li><strong>Alert</strong>: Informative alert messages with different severity levels</li>
        <li><strong>ThemeSwitcher</strong>: Easy theme switching between light and dark modes</li>
      </ul>
      
      <Typography variant="h2">Usage</Typography>

      <pre style={{
        backgroundColor: 'var(--color-background-secondary)',
        padding: '1rem',
        borderRadius: '8px',
        overflow: 'auto',
      }}>
        <code>


          {`
import @tailwindcss;

import 'simple-ui/dist/index.css';

import { Button, Icon, Alert } from 'simple-ui';

function MyComponent() {
  return (
    <div>
      <Alert type="success" title="Success">
        Operation completed successfully!
      </Alert>
      
      <Button variant="primary" size="medium">
        <Icon name="check" size="small" />
        Submit
      </Button>
    </div>
  );
}`}
        </code>
      </pre>
    </div>
  );
};

export const WelcomeStories: Story = {
  render: () => <WelcomePage />,
};
