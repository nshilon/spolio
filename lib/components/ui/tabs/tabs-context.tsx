import { createContext, useContext } from 'react';

interface TabsContextValue {
  /**
   * The currently selected tab value
   */
  value: string;
  /**
   * Function to change the selected tab
   */
  onValueChange: (value: string) => void;
  /**
   * The variant of the tabs
   */
  variant?: 'default' | 'underline' | 'pills';
  /**
   * The size of the tabs
   */
  size?: 'sm' | 'md' | 'lg';
}

export const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
}
