import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Typography,
  Alert,
  Badge, Icon, Dropdown,
} from '@/components';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tabbed interface component for organizing content into separate views.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'underline', 'pills'],
      description: 'The visual style of the tabs',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected tab (uncontrolled)',
    },
    value: {
      control: 'text',
      description: 'The selected tab (controlled)',
    },
    onValueChange: {
      action: 'changed',
      description: 'Callback when the selected tab changes',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab1" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Typography variant="h4">Account Settings</Typography>
        <Typography variant="body">
          Manage your account settings and preferences.
        </Typography>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Typography variant="h4">Password Settings</Typography>
        <Typography variant="body">
          Change your password and security settings.
        </Typography>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Typography variant="h4">General Settings</Typography>
        <Typography variant="body">
          Configure your application preferences.
        </Typography>
      </TabsContent>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="h4" className="mb-2">Default Variant</Typography>
        <Tabs defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Alert title="Account Settings" type="info">
              Manage your account settings and preferences.
            </Alert>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Alert title="Password Settings" type="warning">
              Change your password and security settings.
            </Alert>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Alert title="General Settings" type="success">
              Configure your application preferences.
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <Typography variant="h4" className="mb-2">Underline Variant</Typography>
        <Tabs variant="underline" defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Alert title="Account Settings" type="info">
              Manage your account settings and preferences.
            </Alert>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Alert title="Password Settings" type="warning">
              Change your password and security settings.
            </Alert>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Alert title="General Settings" type="success">
              Configure your application preferences.
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <Typography variant="h4" className="mb-2">Pills Variant</Typography>
        <Tabs variant="pills" defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Alert title="Account Settings" type="info">
              Manage your account settings and preferences.
            </Alert>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Alert title="Password Settings" type="warning">
              Change your password and security settings.
            </Alert>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Alert title="General Settings" type="success">
              Configure your application preferences.
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="h4" className="mb-2">Small Size</Typography>
        <Tabs size="sm" defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Typography variant="bodySmall">
              Manage your account settings and preferences.
            </Typography>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Typography variant="bodySmall">
              Change your password and security settings.
            </Typography>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Typography variant="bodySmall">
              Configure your application preferences.
            </Typography>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <Typography variant="h4" className="mb-2">Medium Size (Default)</Typography>
        <Tabs size="md" defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Typography variant="body">
              Manage your account settings and preferences.
            </Typography>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Typography variant="body">
              Change your password and security settings.
            </Typography>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Typography variant="body">
              Configure your application preferences.
            </Typography>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <Typography variant="h4" className="mb-2">Large Size</Typography>
        <Tabs size="lg" defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Typography variant="bodyLarge">
              Manage your account settings and preferences.
            </Typography>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Typography variant="bodyLarge">
              Change your password and security settings.
            </Typography>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Typography variant="bodyLarge">
              Configure your application preferences.
            </Typography>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="tab1" className="flex items-center gap-2">
          <Icon name="check" size="small" />
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex items-center gap-2">
          <Icon name="warning" size="small" />
          <span>Password</span>
        </TabsTrigger>
        <TabsTrigger value="tab3" className="flex items-center gap-2">
          <Icon name="moon" size="small" />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Typography variant="h4">Account Settings</Typography>
        <Typography variant="body">
          Manage your account settings and preferences.
        </Typography>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Typography variant="h4">Password Settings</Typography>
        <Typography variant="body">
          Change your password and security settings.
        </Typography>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Typography variant="h4">General Settings</Typography>
        <Typography variant="body">
          Configure your application preferences.
        </Typography>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3" disabled>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Typography variant="h4">Account Settings</Typography>
        <Typography variant="body">
          Manage your account settings and preferences.
        </Typography>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Typography variant="h4">Password Settings</Typography>
        <Typography variant="body">
          Change your password and security settings.
        </Typography>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Typography variant="h4">General Settings</Typography>
        <Typography variant="body">
          Configure your application preferences.
        </Typography>
      </TabsContent>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="tab1" className="flex items-center gap-2">
          Account
          <Badge variant="soft" type="primary" size="small">New</Badge>
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex items-center gap-2">
          Password
          <Badge variant="soft" type="warning" size="small">2</Badge>
        </TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Typography variant="h4">Account Settings</Typography>
        <Typography variant="body">
          Manage your account settings and preferences.
        </Typography>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Typography variant="h4">Password Settings</Typography>
        <Typography variant="body">
          Change your password and security settings.
        </Typography>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Typography variant="h4">General Settings</Typography>
        <Typography variant="body">
          Configure your application preferences.
        </Typography>
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    // Use the useState hook to control the active tab
    const [activeTab, setActiveTab] = useState('tab1');
    
    return (
      <div className="space-y-4 w-[500px]">
        <Typography variant="h4">Controlled Tabs Example</Typography>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
            <Dropdown
            value={activeTab}
            onValueChange={setActiveTab}
            options={[
              { value: 'tab1', label: 'Account' },
              { value: 'tab2', label: 'Password' },
              { value: 'tab3', label: 'Settings' },
            ]}
          />
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <Alert title="Account Settings" type="info">
              Manage your account settings and preferences.
            </Alert>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Alert title="Password Settings" type="warning">
              Change your password and security settings.
            </Alert>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Alert title="General Settings" type="success">
              Configure your application preferences.
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
