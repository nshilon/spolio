import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component built on top of Radix UI Dialog.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogDescription>
            This is a basic dialog example using the Dialog component.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This is the content of the dialog.</p>
          <p className="mt-2">You can put any content here.</p>
        </div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Form Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="John Doe"
              className="col-span-3 h-10 rounded-md border border-gray-300 px-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              defaultValue="@johndoe"
              className="col-span-3 h-10 rounded-md border border-gray-300 px-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ControlledDialog: Story = {
  render: () => {
    // Use the ControlledDialog component to demonstrate a controlled dialog
    const ControlledDialogExample = () => {
      const [open, setOpen] = useState(false);
      
      return (
        <div className="flex flex-col items-center gap-4">
          <Button variant="primary" onClick={() => setOpen(true)}>
            Open Controlled Dialog
          </Button>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Controlled Dialog</DialogTitle>
                <DialogDescription>
                  This dialog is controlled using React state.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>
                  You can programmatically control this dialog using the <code>open</code> and <code>onOpenChange</code> props.
                </p>
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => {
                  alert('Action performed!');
                  setOpen(false);
                }}>
                  Continue
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <div className="mt-4">
            <p>Current state: <strong>{open ? 'Open' : 'Closed'}</strong></p>
            <Button 
              variant="secondary" 
              onClick={() => setOpen(!open)}
              className="mt-2"
            >
              Toggle Dialog
            </Button>
          </div>
        </div>
      );
    };
    
    return <ControlledDialogExample />;
  },
};

export const UsingDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Using Dialog</DialogTitle>
          <DialogDescription>
            This example uses the Dialog component.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>
            The Dialog components, providing dialogs.
          </p>
        </div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomSized: Story = {
  render: () => (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Small Modal</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Small Modal</DialogTitle>
            <DialogDescription>
              This is a small-sized modal dialog.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>This modal has a max width of 24rem (sm).</p>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Large Modal</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Large Modal</DialogTitle>
            <DialogDescription>
              This is a large-sized modal dialog.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>This modal has a max width of 48rem (3xl).</p>
            <p className="mt-2">
              You can customize the size of the modal by adding Tailwind classes
              to the DialogContent component.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

export const DestructiveAction: Story = {
  render: () => {
    const DestructiveExample = () => {
      const [open, setOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      
      const handleDelete = () => {
        setIsDeleting(true);
        // Simulate API call
        setTimeout(() => {
          setIsDeleting(false);
          setOpen(false);
          alert('Item deleted successfully!');
        }, 1500);
      };
      
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="danger">Delete Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Item</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this item? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-red-500">
                This will permanently delete the item and all associated data.
              </p>
            </div>
            <DialogFooter>
              <Button 
                variant="secondary" 
                onClick={() => setOpen(false)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button 
                variant="danger" 
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    };
    
    return <DestructiveExample />;
  },
};
