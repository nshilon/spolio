export { default as Icon, type IconName } from './icon';
export { default as IconRegistry, registerIcon, registerIcons, getIcon, hasIcon, getIconNames, type IconDefinition } from './icon-registry';
export { default as defaultIcons } from './svg';
export { default as SvgUtils, svgToIconDefinition, registerSvgIcon, registerSvgIcons, loadAndRegisterSvgIcon, loadAndRegisterSvgIcons } from './svg-utils';
export { default as IconAssets, loadIconAssets, loadIconAsset } from './load-assets';
