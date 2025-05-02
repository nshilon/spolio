import { Button } from '@/components';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import React from 'react';
import { TooltipComponent } from './tooltip-component';

export const TooltipExample: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-8 p-8">
        <div className="flex gap-4">
          <TooltipComponent content="Default tooltip" variant="default">
            <Button>Default</Button>
          </TooltipComponent>

          <TooltipComponent content="Light tooltip" variant="light">
            <Button variant="secondary">Light</Button>
          </TooltipComponent>

          <TooltipComponent content="Primary tooltip" variant="primary">
            <Button variant="outline">Primary</Button>
          </TooltipComponent>
        </div>

        <div className="flex gap-4">
          <TooltipComponent content="Success tooltip" variant="success">
            <Button variant="success">Success</Button>
          </TooltipComponent>

          <TooltipComponent content="Warning tooltip" variant="warning">
            <Button variant="warning">Warning</Button>
          </TooltipComponent>

          <TooltipComponent content="Danger tooltip" variant="danger">
            <Button variant="danger">Danger</Button>
          </TooltipComponent>
        </div>

        <div className="grid grid-cols-3 gap-8 place-items-center">
          <TooltipComponent content="Top tooltip" side="top">
            <Button>Top</Button>
          </TooltipComponent>

          <TooltipComponent content="Left tooltip" side="left">
            <Button>Left</Button>
          </TooltipComponent>

          <TooltipComponent content="Right tooltip" side="right">
            <Button>Right</Button>
          </TooltipComponent>

          <TooltipComponent content="Bottom tooltip" side="bottom">
            <Button>Bottom</Button>
          </TooltipComponent>
        </div>
      </div>
    </TooltipProvider>
  );
};
