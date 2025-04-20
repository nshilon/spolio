import { loadAndRegisterSvgIcons } from './svg-utils';

/**
 * Load all SVG icons from the assets directory
 * This function should be called during application initialization
 */
export async function loadIconAssets(): Promise<void> {
  // Define the icons to load
  // The keys are the icon names, and the values are the paths to the SVG files
  const iconAssets: Record<string, string> = {
    'star-asset': '/lib/components/ui/icon/assets/star.svg',
    'heart-asset': '/lib/components/ui/icon/assets/heart.svg',
    // Add more icons here as needed
  };
  
  // Load and register all icons
  await loadAndRegisterSvgIcons(iconAssets);
}

/**
 * Load a specific SVG icon from the assets directory
 * @param name The name to register the icon under
 * @param fileName The file name in the assets directory (without the path)
 */
export async function loadIconAsset(name: string, fileName: string): Promise<void> {
  const url = `/lib/components/ui/icon/assets/${fileName}`;
  await loadAndRegisterSvgIcons({ [name]: url });
}

export default {
  loadIconAssets,
  loadIconAsset,
};
