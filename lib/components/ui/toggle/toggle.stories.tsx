import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toggle from './toggle';
import { Icon } from '@/components';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toggle',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning'],
      description: 'The visual style variant of the toggle',
    },
    label: {
      control: 'text',
      description: 'Label for the toggle',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the label relative to the toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
    showLabel: true,
  },
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Enable notifications',
    showLabel: true,
    labelPosition: 'left',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle size="sm" label="Small" showLabel />
        <Toggle size="md" label="Medium" showLabel />
        <Toggle size="lg" label="Large" showLabel />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle variant="default" defaultChecked label="Default" showLabel />
        <Toggle variant="primary" defaultChecked label="Primary" showLabel />
        <Toggle variant="success" defaultChecked label="Success" showLabel />
        <Toggle variant="danger" defaultChecked label="Danger" showLabel />
        <Toggle variant="warning" defaultChecked label="Warning" showLabel />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle disabled label="Disabled Off" showLabel />
        <Toggle disabled defaultChecked label="Disabled On" showLabel />
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Toggle
          checked={checked}
          onCheckedChange={setChecked}
          label={`Toggle is ${checked ? 'ON' : 'OFF'}`}
          showLabel
        />
        <div className="text-sm text-gray-500">
          Current state: <strong>{checked ? 'ON' : 'OFF'}</strong>
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Icon name="sun" size="small" />
        <Toggle defaultChecked size="md" />
        <Icon name="moon" size="small" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Light</span>
        <Toggle defaultChecked variant="primary" size="md" />
        <span className="text-sm font-medium">Dark</span>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [settings, setSettings] = useState({
      notifications: true,
      marketing: false,
      updates: true,
    });

    const handleChange = (key: keyof typeof settings) => (value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
      <div className="w-80 p-4 border border-gray-200 rounded-md">
        <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
        <div className="flex flex-col gap-4">
          <Toggle
            checked={settings.notifications}
            onCheckedChange={handleChange('notifications')}
            label="Enable notifications"
            showLabel
            size="md"
          />
          <Toggle
            checked={settings.marketing}
            onCheckedChange={handleChange('marketing')}
            label="Receive marketing emails"
            showLabel
            size="md"
          />
          <Toggle
            checked={settings.updates}
            onCheckedChange={handleChange('updates')}
            label="Receive product updates"
            showLabel
            size="md"
          />
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <pre className="p-2 bg-gray-100 rounded">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle
        defaultChecked
        className="bg-purple-100 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-800"
        label="Custom purple theme"
        showLabel
      />
      <Toggle
        defaultChecked
        className="bg-gradient-to-r from-blue-400 to-emerald-400 data-[state=checked]:from-pink-500 data-[state=checked]:to-yellow-500"
        label="Gradient background"
        showLabel
      />
    </div>
  ),
};

export const ThemeToggleExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
      <div className={`p-6 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Theme Settings</h3>
          <div className="flex items-center gap-2">
            <Icon name="sun" size="small" className={isDarkMode ? 'text-gray-400' : 'text-yellow-500'} />
            <Toggle
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              variant={isDarkMode ? 'primary' : 'default'}
              size="md"
            />
            <Icon name="moon" size="small" className={isDarkMode ? 'text-blue-300' : 'text-gray-400'} />
          </div>
        </div>
        <div className={`p-4 rounded border ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
          <p className="mb-2">Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Toggle the switch above to change the theme of this card.
          </p>
        </div>
      </div>
    );
  },
};

export const AccessibilityExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <div>
        <h3 className="text-lg font-medium mb-2">Accessibility Features</h3>
        <p className="text-sm text-gray-500 mb-4">
          The Toggle component is built with accessibility in mind, supporting keyboard navigation,
          screen readers, and proper ARIA attributes.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Toggle
            id="toggle-example-1"
            label="Enable screen reader announcements"
            showLabel
            defaultChecked
          />
          <p className="text-xs text-gray-500 mt-1 ml-6">
            Uses proper labelling and ARIA attributes
          </p>
        </div>

        <div>
          <Toggle
            id="toggle-example-2"
            label="High contrast mode"
            showLabel
            aria-describedby="high-contrast-desc"
          />
          <p id="high-contrast-desc" className="text-xs text-gray-500 mt-1 ml-6">
            Associated with description via aria-describedby
          </p>
        </div>

        <div className="p-3 bg-gray-100 rounded-md">
          <p className="text-sm mb-2"><strong>Keyboard Navigation:</strong></p>
          <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
            <li>Tab to focus on the toggle</li>
            <li>Space to toggle the state</li>
            <li>Focus ring provides visual indication</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const MobileSettingsExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [settings, setSettings] = useState({
      notifications: true,
      locationServices: false,
      darkMode: true,
      dataSync: true,
      autoUpdate: false,
    });

    const handleToggle = (key: keyof typeof settings) => (value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
      <div className="w-80 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">App Settings</h3>
        </div>

        {/* Settings List */}
        <div className="divide-y divide-gray-100">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Notifications</p>
              <p className="text-xs text-gray-500">Receive app notifications</p>
            </div>
            <Toggle
              checked={settings.notifications}
              onCheckedChange={handleToggle('notifications')}
              size="md"
            />
          </div>

          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Location Services</p>
              <p className="text-xs text-gray-500">Allow app to use your location</p>
            </div>
            <Toggle
              checked={settings.locationServices}
              onCheckedChange={handleToggle('locationServices')}
              size="md"
            />
          </div>

          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-xs text-gray-500">Use dark theme</p>
            </div>
            <Toggle
              checked={settings.darkMode}
              onCheckedChange={handleToggle('darkMode')}
              size="md"
              variant="primary"
            />
          </div>

          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Data Synchronization</p>
              <p className="text-xs text-gray-500">Sync data across devices</p>
            </div>
            <Toggle
              checked={settings.dataSync}
              onCheckedChange={handleToggle('dataSync')}
              size="md"
            />
          </div>

          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Auto Updates</p>
              <p className="text-xs text-gray-500">Update app automatically</p>
            </div>
            <Toggle
              checked={settings.autoUpdate}
              onCheckedChange={handleToggle('autoUpdate')}
              size="md"
            />
          </div>
        </div>
      </div>
    );
  },
};
