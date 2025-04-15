import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/utils';
import { ThemeProvider, useTheme } from './theme-context';

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

// Test component that uses the theme context
function TestComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <div>
      <div data-testid="theme-value">{theme}</div>
      <button onClick={() => setTheme('dark')} data-testid="set-dark">Set Dark</button>
      <button onClick={() => setTheme('light')} data-testid="set-light">Set Light</button>
      <button onClick={toggleTheme} data-testid="toggle-theme">Toggle Theme</button>
    </div>
  );
}

describe('ThemeContext', () => {
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
    
    // Reset document attributes
    document.documentElement.removeAttribute('data-theme');
    document.body.classList.remove('dark-theme', 'light-theme');
  });

  it('provides default light theme when no preference is set', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });

  it('respects system preference for dark mode', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
  });

  it('allows setting theme explicitly', async () => {
    const { user } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Default is light
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    
    // Set to dark
    await user.click(screen.getByTestId('set-dark'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    
    // Set back to light
    await user.click(screen.getByTestId('set-light'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });

  it('toggles theme correctly', async () => {
    const { user } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Default is light
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    
    // Toggle to dark
    await user.click(screen.getByTestId('toggle-theme'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    
    // Toggle back to light
    await user.click(screen.getByTestId('toggle-theme'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });

  it('persists theme preference in localStorage', async () => {
    const { user } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Set to dark
    await user.click(screen.getByTestId('set-dark'));
    expect(localStorageMock.getItem('theme')).toBe('dark');
    
    // Set to light
    await user.click(screen.getByTestId('set-light'));
    expect(localStorageMock.getItem('theme')).toBe('light');
  });

  it('applies theme to document element', async () => {
    const { user } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Default is light
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(document.body.classList.contains('light-theme')).toBe(true);
    
    // Set to dark
    await user.click(screen.getByTestId('set-dark'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.body.classList.contains('dark-theme')).toBe(true);
    expect(document.body.classList.contains('light-theme')).toBe(false);
  });
});
