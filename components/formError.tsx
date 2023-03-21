import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function FormError({ children }: Props) {
  return <p className="text-sm text-red-500">{children}</p>;
}
