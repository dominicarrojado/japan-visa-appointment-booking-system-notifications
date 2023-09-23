import React, { ReactNode } from 'react';
import Footer from './footer';
import PageBody from './pageBody';
import PageTitle from './pageTitle';
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
      <main className="mx-auto max-w-xl">
        <PageTitle>
          <span className="block mb-1 text-base tracking-wide sm:text-xl sm:tracking-widest font-medium">
            Embassy of Japan in Singapore 🇯🇵
          </span>
          Appointment Notification Service
          <span className="block mt-2 text-base sm:text-lg tracking-normal font-normal italic">
            for Visa (Tourism) applications
          </span>
        </PageTitle>
        <PageBody>{children}</PageBody>
      </main>
      <Footer className="mt-10" />
    </div>
  );
}
