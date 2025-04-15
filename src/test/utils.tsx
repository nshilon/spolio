import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

expect.extend(toHaveNoViolations);

function render(ui: React.ReactElement, options = {}) {
  const user = userEvent.setup();
  return {
    user,
    ...rtlRender(ui, options),
  };
}

export * from '@testing-library/react';
export { render, axe };
