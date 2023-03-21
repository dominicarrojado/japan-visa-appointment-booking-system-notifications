import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function PageSubtitle({ children }: Props) {
  return (
    <h2 className="text-lg leading-8 text-gray-900 font-semibold">
      {children}
    </h2>
  );
}
