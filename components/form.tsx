import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLFormElement>;

export default function Form({ className, children, ...props }: Props) {
  return (
    <form
      {...props}
      className={cn(
        className,
        'mx-auto shadow-xl border border-gray-300 rounded-lg max-w-xl bg-white p-6'
      )}
    >
      {children}
    </form>
  );
}
