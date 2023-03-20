import React, { ReactNode } from 'react';
import SvgGraphs from './svgGraphs';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative isolate bg-white py-12 px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <SvgGraphs />
      </div>
      <main className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8">
        {children}
      </main>
    </div>
  );
}
