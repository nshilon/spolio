import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';

describe('Tabs', () => {
  it('renders correctly with default props', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>
    );

    // Check if tabs are rendered
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();

    // Check if the first tab is selected by default
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');

    // Check if the first tab content is visible
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
  });

  it('switches tabs when clicked', async () => {
    const { user } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>
    );

    // Click on the second tab
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    // Check if the second tab is now selected
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');

    // Check if the second tab content is now visible
    expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
  });

  it('works as a controlled component', async () => {
    const handleValueChange = vi.fn();

    const { user, rerender } = render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>
    );

    // Click on the second tab
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    // Check if onValueChange was called with the correct value
    expect(handleValueChange).toHaveBeenCalledWith('tab2');

    // The component is controlled, so the tab shouldn't change until the value prop changes
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');

    // Update the value prop
    rerender(
      <Tabs value="tab2" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>
    );

    // Now the second tab should be selected
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');
  });

  it('respects the disabled state of tabs', async () => {
    const handleValueChange = vi.fn();

    const { user } = render(
      <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2 (Disabled)</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
        <TabsContent value="tab3">Content for Tab 3</TabsContent>
      </Tabs>
    );

    // Check if the disabled tab has the disabled attribute
    expect(screen.getByRole('tab', { name: 'Tab 2 (Disabled)' })).toBeDisabled();

    // Try to click on the disabled tab
    await user.click(screen.getByRole('tab', { name: 'Tab 2 (Disabled)' }));

    // Check that onValueChange was not called
    expect(handleValueChange).not.toHaveBeenCalled();

    // Check that the first tab is still selected
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');

    // Click on the third tab (which is not disabled)
    await user.click(screen.getByRole('tab', { name: 'Tab 3' }));

    // Check that onValueChange was called with the correct value
    expect(handleValueChange).toHaveBeenCalledWith('tab3');
  });

  it('applies variant and size classes correctly', () => {
    render(
      <Tabs variant="underline" size="lg" defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>
    );

    // Check if the tabs container has the correct variant and size classes
    const tabsContainer = screen.getByRole('tablist').parentElement;
    expect(tabsContainer).toHaveClass('tabs--underline');
    expect(tabsContainer).toHaveClass('tabs--lg');
  });
});
