import { VariantProps } from 'class-variance-authority';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  tooltipContentVariants,
} from './tooltip';

export interface TooltipComponentProps {
  /**
   * The content to display in the tooltip
   */
  content: React.ReactNode;
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * The variant of the tooltip
   */
  variant?: VariantProps<typeof tooltipContentVariants>['variant'];
  /**
   * Whether to hide the arrow
   */
  hideArrow?: boolean;
  /**
   * The delay in milliseconds before showing the tooltip
   */
  delayDuration?: number;
  /**
   * The offset in pixels from the trigger
   */
  sideOffset?: number;
  /**
   * The side of the trigger to show the tooltip
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The alignment of the tooltip relative to the trigger
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Whether the tooltip is open by default
   */
  defaultOpen?: boolean;
  /**
   * Whether the tooltip is open (controlled)
   */
  open?: boolean;
  /**
   * Callback when the open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Additional class name for the tooltip content
   */
  className?: string;
  /**
   * Whether to disable the tooltip
   */
  disabled?: boolean;
}

/**
 * Tooltip component for displaying additional information on hover
 *
 * @example
 * ```tsx
 * <TooltipComponent content="This is a tooltip">
 *   <Button>Hover me</Button>
 * </TooltipComponent>
 * ```
 */
export const TooltipComponent = ({
  content,
  children,
  variant = 'default',
  hideArrow = false,
  delayDuration = 300,
  sideOffset = 4,
  side = 'top',
  align = 'center',
  defaultOpen,
  open,
  onOpenChange,
  className,
  disabled = false,
}: TooltipComponentProps) => {
  // If disabled, just render the children without the tooltip
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <Tooltip
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        variant={variant}
        hideArrow={hideArrow}
        sideOffset={sideOffset}
        side={side}
        align={align}
        className={className}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};
