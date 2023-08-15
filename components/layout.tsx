import React, { ReactNode } from 'react';
import Footer from './footer';
import PageBody from './pageBody';
import PageTitle from './pageTitle';
import SvgGraphs from './svgGraphs';
import AdUnit from './adUnit';
import { GoogleAdSenseUnitFormat, GoogleAdSenseUnitSlot } from '@/lib/types';

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
          Embassy of Japan in Singapore Visa Appointment Notification Service
          for Visa (Tourism) applications
        </PageTitle>
        <PageBody>{children}</PageBody>
      </main>
      <Footer className="mt-10" />
    </div>
  );
}
