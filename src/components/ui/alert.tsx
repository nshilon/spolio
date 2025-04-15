import { VariantProps, cva } from 'class-variance-authority';
import './alert.scss';
import Icon from './icon.tsx';

const alert = cva('Alert', {
  variants: {
    design: {
      solid: 'Alert--solid',
      outline: 'Alert--outline',
    },
    type: {
      critical: 'Alert--critical',
      danger: 'Alert--danger',
      warning: 'Alert--warning',
      success: 'Alert--success',
      informative: 'Alert--informative',
      discovery: 'Alert--discovery',
    },
  },
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
      {title && <h2 className="Alert__title">{title}</h2>}
      <div className="Alert__content ">
        <Icon name="info" className="Alert__icon" />

        <div>{children}</div>
      </div>
      <Icon name="close" className="Alert__close" />
    </div>
  );
};

export default Alert;
