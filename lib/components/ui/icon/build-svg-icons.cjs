#!/usr/bin/env node

/**
 * This script converts SVG files in the assets directory to TypeScript icon definitions
 * It can be run as part of the build process to pre-compile SVG icons
 */

const  fs = require('fs');
const path = require('path');

// Directories
const ASSETS_DIR = path.join(__dirname, 'assets');
const OUTPUT_DIR = path.join(__dirname, 'svg', 'generated');

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all SVG files in the assets directory
const svgFiles = fs.readdirSync(ASSETS_DIR)
  .filter(file => file.endsWith('.svg'));

// Create an index file to export all generated icons
let indexFileContent = `// This file is auto-generated. Do not edit directly.
import { IconDefinition } from '../../icon-registry';

`;

// Process each SVG file
svgFiles.forEach(svgFile => {
  const svgPath = path.join(ASSETS_DIR, svgFile);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Extract the file name without extension to use as the icon name
  const iconName = path.basename(svgFile, '.svg');
  const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon`;
  const outputPath = path.join(OUTPUT_DIR, `${iconName}.tsx`);
  
  // Parse the SVG to extract viewBox and content
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extract the content inside the SVG tags
  const contentMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  let content = contentMatch ? contentMatch[1].trim() : '';
  
  // Convert the SVG content to JSX
  content = content
    // Convert kebab-case attributes to camelCase
    .replace(/([a-z])-([a-z])/g, (match, p1, p2) => `${p1}${p2.toUpperCase()}`)
    // Replace "class" with "className"
    .replace(/class=/g, 'className=')
    // Replace "fill-rule" with "fillRule"
    .replace(/fill-rule=/g, 'fillRule=')
    // Replace "stroke-width" with "strokeWidth"
    .replace(/stroke-width=/g, 'strokeWidth=')
    // Replace "stroke-linecap" with "strokeLinecap"
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    // Replace "stroke-linejoin" with "strokeLinejoin"
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  
  // Create the TypeScript file content
  const tsContent = `import React from 'react';
import { IconDefinition } from '../../icon-registry';

export const ${componentName}: IconDefinition = {
  content: (
    <>
      ${content}
    </>
  ),
  viewBox: '${viewBox}',
};

export default ${componentName};
`;

  // Write the TypeScript file
  fs.writeFileSync(outputPath, tsContent);
  console.log(`Generated ${outputPath}`);
  
  // Add the icon to the index file
  indexFileContent += `import ${componentName} from './${iconName}';\n`;
});

// Complete the index file
indexFileContent += `\n// Export all generated icons\nexport const generatedIcons: Record<string, IconDefinition> = {\n`;
svgFiles.forEach(svgFile => {
  const iconName = path.basename(svgFile, '.svg');
  const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon`;
  indexFileContent += `  '${iconName}': ${componentName},\n`;
});
indexFileContent += `};\n\nexport default generatedIcons;\n`;

// Write the index file
const indexPath = path.join(OUTPUT_DIR, 'index.ts');
fs.writeFileSync(indexPath, indexFileContent);
console.log(`Generated ${indexPath}`);

console.log(`Successfully generated ${svgFiles.length} icon definitions.`);
