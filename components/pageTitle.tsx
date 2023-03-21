import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = { children: ReactNode };

export default function PageTitle({ children }: Props) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold tracking-tight text-gray-900',
        'sm:text-4xl'
      )}
    >
      {children}
    </h1>
  );
}
