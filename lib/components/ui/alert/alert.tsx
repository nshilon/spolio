import { Icon } from '@/components';
import { VariantProps, cva } from 'class-variance-authority';

const alert = cva('Alert relative', {
  variants: {
    design: {
      solid:
        'Alert--solid bg-gray-100 shadow p-4 rounded-md text-white text-sm ',
      outline: 'Alert--outline border border-gray-300 p-4 rounded-md',
    },
    type: {
      critical: 'Alert--critical bg-red-500 animate-pulse',
      danger: 'Alert--danger bg-red-700',
      warning: 'Alert--warning bg-orange-500',
      success: 'Alert--success bg-green-900',
      informative: 'Alert--informative bg-gray-500',
      discovery: 'Alert--discovery bg-purple-500 animate-bounce',
    },
  },
  compoundVariants: [
    {
      design: 'outline',
      type: 'critical',
      className: 'bg-white text-red-500 border-red-500',
    },
    {
      design: 'solid',
      type: 'critical',
      className: 'text-white',
    },
    {
      design: 'outline',
      type: 'danger',
      className: 'bg-white text-red-700 border-red-700',
    },
    {
      design: 'solid',
      type: 'danger',
      className: 'text-white',
    },
    {
      design: 'outline',
      type: 'warning',
      className:
        'Alert--solid--warning bg-white text-yellow-500 border-yellow-500',
    },
    {
      design: 'outline',
      type: 'success',
      className:
        'Alert--solid--success bg-white text-green-500 border-green-500',
    },
    {
      design: 'outline',
      type: 'informative',
      className:
        'Alert--solid--informative bg-white text-gray-700 border-gray-500',
    },
    {
      design: 'outline',
      type: 'discovery',
      className: 'Alert--solid--discovery bg-white text-purple-500',
    },
    {
      design: 'solid',
      type: 'discovery',
      className: 'text-white',
    },
  ],
  defaultVariants: {
    design: 'solid',
    type: 'informative',
  },
});
export type AlertVariants = VariantProps<typeof alert>;
export interface AlertProps {
  title?: string;
  children?: React.ReactNode;
  design?: NonNullable<AlertVariants['design']>;
  type?: NonNullable<AlertVariants['type']>;
}
const Alert = ({
  title,
  children,
  design = 'solid',
  type = 'informative',
}: AlertProps) => {
  return (
    <div className={alert({ design, type })}>
      {title && (
        <h2 className="Alert__title text-lg font-bold center">{title}</h2>
      )}
      <div className="Alert__content flex gap-2 ">
        <Icon name="info" className="Alert__icon" />

        <div>{children}</div>
      </div>
      <Icon name="close" className="pointer absolute right-2 top-2" />
    </div>
  );
};

export default Alert;
