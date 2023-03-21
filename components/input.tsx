import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement>;

export default function Input({ id, disabled, ...props }: Props) {
  return (
    <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label
          htmlFor={id}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {props.label}
        </label>
        <div className="mt-2.5">
          <input
            {...props}
            id={id}
            disabled={disabled}
            className={cn(
              'block w-full rounded-md py-2 px-3.5 text-gray-900 shadow-sm border border-inset border-gray-300 outline-none placeholder:text-gray-400',
              'focus:border-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600',
              'sm:text-sm sm:leading-6',
              !disabled ? 'bg-white' : 'bg-gray-100'
            )}
          />
        </div>
      </div>
    </div>
  );
}
