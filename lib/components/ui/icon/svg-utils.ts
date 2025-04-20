import { createElement } from 'react';
import { IconDefinition, registerIcon, registerIcons } from './icon-registry';

/**
 * Convert an SVG string to an icon definition
 * @param svgString The SVG string to convert
 * @returns An icon definition object
 */
export function svgToIconDefinition(svgString: string): IconDefinition {
  // Create a DOM parser to parse the SVG string
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');

  // Check for parsing errors
  const parserError = svgDoc.querySelector('parsererror');
  if (parserError) {
    console.error('Error parsing SVG:', parserError.textContent);
    throw new Error('Failed to parse SVG string');
  }

  // Get the root SVG element
  const svgElement = svgDoc.documentElement;

  // Extract the viewBox attribute
  const viewBox = svgElement.getAttribute('viewBox') || '0 0 24 24';

  // Extract all child elements and convert them to React elements
  const childNodes = Array.from(svgElement.childNodes);
  const reactElements = childNodes
    .filter((node) => node.nodeType === Node.ELEMENT_NODE)
    .map((node, index) => {
      const element = node as Element;
      const tagName = element.tagName.toLowerCase();

      // Get all attributes of the element
      const attributes: Record<string, string> = {};
      Array.from(element.attributes).forEach((attr) => {
        // Convert kebab-case to camelCase for React props
        const attrName = attr.name.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        attributes[attrName] = attr.value;
      });

      // Create the React element based on the tag name
      return createElement(tagName, {
        key: `${tagName}-${index}`,
        ...attributes,
      });
    });

  // Return the icon definition
  return {
    content: reactElements,
    viewBox,
  };
}

/**
 * Register an icon from an SVG string
 * @param name The name to register the icon under
 * @param svgString The SVG string to convert
 */
export function registerSvgIcon(name: string, svgString: string): void {
  try {
    const iconDefinition = svgToIconDefinition(svgString);
    registerIcon(name, iconDefinition);
  } catch (error) {
    console.error(`Failed to register SVG icon "${name}":`, error);
  }
}

/**
 * Register multiple icons from SVG strings
 * @param icons A record of icon names to SVG strings
 */
export function registerSvgIcons(icons: Record<string, string>): void {
  const iconDefinitions: Record<string, IconDefinition> = {};

  Object.entries(icons).forEach(([name, svgString]) => {
    try {
      iconDefinitions[name] = svgToIconDefinition(svgString);
    } catch (error) {
      console.error(`Failed to convert SVG icon "${name}":`, error);
    }
  });

  registerIcons(iconDefinitions);
}

/**
 * Load an SVG file and register it as an icon
 * This function is meant to be used in a browser environment
 * @param name The name to register the icon under
 * @param url The URL of the SVG file
 * @returns A promise that resolves when the icon is registered
 */
export async function loadAndRegisterSvgIcon(
  name: string,
  url: string
): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG file: ${response.statusText}`);
    }

    const svgString = await response.text();
    registerSvgIcon(name, svgString);
  } catch (error) {
    console.error(`Failed to load and register SVG icon "${name}":`, error);
    throw error;
  }
}

/**
 * Load multiple SVG files and register them as icons
 * This function is meant to be used in a browser environment
 * @param icons A record of icon names to SVG file URLs
 * @returns A promise that resolves when all icons are registered
 */
export async function loadAndRegisterSvgIcons(
  icons: Record<string, string>
): Promise<void> {
  const promises = Object.entries(icons).map(([name, url]) =>
    loadAndRegisterSvgIcon(name, url).catch((error) => {
      console.error(`Failed to load and register SVG icon "${name}":`, error);
      // Don't reject the promise, just log the error
      return Promise.resolve();
    })
  );

  await Promise.all(promises);
}

export default {
  svgToIconDefinition,
  registerSvgIcon,
  registerSvgIcons,
  loadAndRegisterSvgIcon,
  loadAndRegisterSvgIcons,
};
