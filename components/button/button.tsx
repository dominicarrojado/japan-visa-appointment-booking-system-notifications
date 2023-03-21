import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { ButtonVariant } from './types';
import { getButtonClassNames } from './lib';

type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
};

export default function Button({
  className,
  children,
  disabled,
  type = 'button',
  variant = ButtonVariant.PRIMARY,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={cn(className, getButtonClassNames(variant, disabled))}
    >
      {children}
    </button>
  );
}
