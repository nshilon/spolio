import { Button, Icon } from '@/components';
import { useTheme } from './theme-context';

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      size="small"
      variant="ghost"
      className={`theme-switcher ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'dark' ? (
        <Icon name="moon" variant="primary" className="theme-switcher__icon" />
      ) : (
        <Icon name="sun" variant="secondary" className="theme-switcher__icon" />
      )}
      {/*<span className="theme-switcher__text">*/}
      {/*  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}*/}
      {/*</span>*/}
    </Button>
  );
}
