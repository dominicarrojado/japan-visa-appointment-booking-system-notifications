import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = { children: ReactNode };

export default function PageBody({ children }: Props) {
  return (
    <div
      className={cn(
        'mt-8 flex flex-col gap-8 text-base leading-7 text-gray-700'
      )}
    >
      {children}
    </div>
  );
}
