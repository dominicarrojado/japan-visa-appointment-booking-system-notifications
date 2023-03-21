import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function FormBody({ children }: Props) {
  return <div className="flex flex-col gap-4 text-gray-700">{children}</div>;
}
