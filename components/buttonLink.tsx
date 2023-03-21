import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import { ButtonVariant, getButtonClassNames } from './button';

export type Props = HTMLProps<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  disabled?: boolean;
};

const ButtonLink = forwardRef(
  (
    {
      target,
      rel,
      className,
      children,
      variant = ButtonVariant.PRIMARY,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <a
        {...props}
        ref={ref}
        className={cn(className, getButtonClassNames(variant))}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
