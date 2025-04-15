import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/utils';
import { axe } from 'jest-axe';
import ThemeSwitcher from './theme-switcher';
import { ThemeProvider } from './theme-context';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('renders correctly with light theme by default', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('toggles theme when clicked', async () => {
    const { user } = render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    
    // Initially in light mode
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    
    // Click to toggle to dark mode
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    
    // Click again to toggle back to light mode
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
