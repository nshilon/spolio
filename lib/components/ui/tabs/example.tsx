import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';
import { Typography } from '@/components';

export const TabsExample: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2">Default Tabs</Typography>
        <Tabs defaultValue="tab1" className="mt-4">
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
      </div>
      
      <div>
        <Typography variant="h2">Underline Tabs</Typography>
        <Tabs variant="underline" defaultValue="tab1" className="mt-4">
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
      </div>
      
      <div>
        <Typography variant="h2">Pills Tabs</Typography>
        <Tabs variant="pills" defaultValue="tab1" className="mt-4">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3" disabled>Settings (Disabled)</TabsTrigger>
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
      </div>
    </div>
  );
};
