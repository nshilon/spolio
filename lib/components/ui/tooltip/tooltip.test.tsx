import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/utils.tsx';
import { TooltipComponent } from './tooltip-component';
import { Button } from '@/components';
import { TooltipProvider } from './tooltip';
import React from "react";

// Mock the TooltipProvider to avoid issues with portals in tests
vi.mock('./tooltip', async () => {
  const actual = await vi.importActual('./tooltip');
  return {
    ...actual,
    TooltipProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe('Tooltip', () => {
  it('renders the trigger correctly', () => {
    render(
      <TooltipProvider>
        <TooltipComponent content="Tooltip content">
          <Button>Hover me</Button>
        </TooltipComponent>
      </TooltipProvider>
    );
    
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
  
  it('shows tooltip content on hover', async () => {
    render(
      <TooltipProvider>
        <TooltipComponent content="Tooltip content">
          <Button>Hover me</Button>
        </TooltipComponent>
      </TooltipProvider>
    );
    
    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    
    // Wait for the tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
  });
  
  it('hides tooltip content on mouse leave', async () => {
    render(
      <TooltipProvider>
        <TooltipComponent content="Tooltip content">
          <Button>Hover me</Button>
        </TooltipComponent>
      </TooltipProvider>
    );
    
    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    
    // Wait for the tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
    
    // Move mouse away from the trigger
    fireEvent.mouseLeave(screen.getByText('Hover me'));
    
    // Wait for the tooltip to disappear
    await waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });
  });
  
  it('does not render tooltip when disabled', () => {
    render(
      <TooltipProvider>
        <TooltipComponent content="Tooltip content" disabled>
          <Button>Hover me</Button>
        </TooltipComponent>
      </TooltipProvider>
    );
    
    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    
    // Tooltip should not appear
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });
  
  it('supports different variants', async () => {
    render(
      <TooltipProvider>
        <TooltipComponent content="Primary tooltip" variant="primary">
          <Button>Hover for primary</Button>
        </TooltipComponent>
      </TooltipProvider>
    );
    
    // Hover over the trigger
    fireEvent.mouseEnter(screen.getByText('Hover for primary'));
    
    // Wait for the tooltip to appear
    await waitFor(() => {
      const tooltip = screen.getByText('Primary tooltip');
      expect(tooltip).toBeInTheDocument();
      // Check if the tooltip has the primary variant class
      expect(tooltip.parentElement).toHaveClass('bg-[var(--tooltip-primary-background)]');
    });
  });
});
