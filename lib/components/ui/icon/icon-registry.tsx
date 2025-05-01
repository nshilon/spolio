
import defaultIcons from './svg';

// Define the type for an icon in the registry
export interface IconDefinition {
  content: React.ReactNode;
  viewBox?: string;
}

// The registry is a map of icon names to their definitions
const iconRegistry = new Map<string, IconDefinition>();

/**
 * Register an icon in the registry
 * @param name The name of the icon
 * @param definition The icon definition
 */
export function registerIcon(name: string, definition: IconDefinition): void {
  iconRegistry.set(name, definition);
}

/**
 * Register multiple icons at once
 * @param icons A record of icon names to their definitions
 */
export function registerIcons(icons: Record<string, IconDefinition>): void {
  Object.entries(icons).forEach(([name, definition]) => {
    registerIcon(name, definition);
  });
}

/**
 * Get an icon from the registry
 * @param name The name of the icon
 * @returns The icon definition or undefined if not found
 */
export function getIcon(name: string): IconDefinition | undefined {
  return iconRegistry.get(name);
}

/**
 * Check if an icon exists in the registry
 * @param name The name of the icon
 * @returns True if the icon exists, false otherwise
 */
export function hasIcon(name: string): boolean {
  return iconRegistry.has(name);
}

/**
 * Get all registered icon names
 * @returns An array of all registered icon names
 */
export function getIconNames(): string[] {
  return Array.from(iconRegistry.keys());
}

// Register the default icons from the SVG directory
registerIcons(defaultIcons);

export default {
  registerIcon,
  registerIcons,
  getIcon,
  hasIcon,
  getIconNames,
};
