import { ButtonHTMLAttributes } from 'react';

import './button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  className,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={`button button--${variant} button--${size} ${className}`}
    {...props}
  />
);

export default Button;
