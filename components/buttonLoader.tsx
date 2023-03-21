import React from 'react';
import cn from 'classnames';
import SvgLoader from './svgLoader';

export default function ButtonLoader() {
  return (
    <SvgLoader
      className={cn('animate-spin -ml-1 mr-3 h-5 w-5 text-white')}
      aria-label="Loading"
    />
  );
}
