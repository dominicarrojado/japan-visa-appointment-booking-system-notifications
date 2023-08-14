import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Alert({ children }: Props) {
  return (
    <div
      className="mb-4 rounded-lg bg-indigo-50 px-5 py-4 text-base text-indigo-500"
      role="alert"
    >
      {children}
    </div>
  );
}
