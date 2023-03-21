import React from 'react';
import cn from 'classnames';
import { MAIN_AUTHOR, MAIN_ORIGIN } from '@/lib/constants';

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={cn(className, 'text-center text-gray-400')}>
      Made with ❤️ by{' '}
      <a href={MAIN_ORIGIN} className="hover:underline font-bold">
        {MAIN_AUTHOR}
      </a>
    </footer>
  );
}
