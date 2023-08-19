import React from 'react';

export default function AlertSkeleton() {
  return (
    <div role="status">
      <div className="animate-pulse">
        <div className="w-11/12 h-5 bg-indigo-200 rounded-md mb-2 sm:h-6 sm:mb-0"></div>
        <div className="w-4/5 h-5 bg-indigo-200 rounded-md sm:hidden"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
