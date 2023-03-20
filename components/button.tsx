import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit';
};

export default function Button({
  type = 'button',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        className,
        'block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm',
        'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      )}
    >
      {children}
    </button>
  );
}
