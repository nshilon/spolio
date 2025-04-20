import { IconDefinition } from '../icon-registry';
import ArrowDownIcon from './arrow-down';
import ArrowUpIcon from './arrow-up';
import ArrowLeftIcon from './arrow-left';
import ArrowRightIcon from './arrow-right';
import ArrowFirstIcon from './arrow-first';
import ArrowLastIcon from './arrow-last';
import CheckIcon from './check';
import CloseIcon from './close';
import InfoIcon from './info';
import WarningIcon from './warning';
import ErrorIcon from './error';
import SuccessIcon from './success';
import SunIcon from './sun';
import MoonIcon from './moon';

// Export all icons
export const defaultIcons: Record<string, IconDefinition> = {
  'arrow-down': ArrowDownIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-first': ArrowFirstIcon,
  'arrow-last': ArrowLastIcon,
  'check': CheckIcon,
  'close': CloseIcon,
  'info': InfoIcon,
  'warning': WarningIcon,
  'error': ErrorIcon,
  'success': SuccessIcon,
  'sun': SunIcon,
  'moon': MoonIcon,
};

export default defaultIcons;
