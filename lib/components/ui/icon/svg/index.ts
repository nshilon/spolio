import { IconDefinition } from '../icon-registry';
import ArrowDownIcon from './arrow-down';
import ArrowFirstIcon from './arrow-first';
import ArrowLastIcon from './arrow-last';
import ArrowLeftIcon from './arrow-left';
import ArrowRightIcon from './arrow-right';
import ArrowUpIcon from './arrow-up';
import CheckIcon from './check';
import CloseIcon from './close';
import ErrorIcon from './error';
import InfoIcon from './info';
import MoonIcon from './moon';
import SuccessIcon from './success';
import SunIcon from './sun';
import WarningIcon from './warning';

// Export all icons
export const defaultIcons: Record<string, IconDefinition> = {
  'arrow-down': ArrowDownIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-first': ArrowFirstIcon,
  'arrow-last': ArrowLastIcon,
  check: CheckIcon,
  close: CloseIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: SuccessIcon,
  sun: SunIcon,
  moon: MoonIcon,
};

export default defaultIcons;
