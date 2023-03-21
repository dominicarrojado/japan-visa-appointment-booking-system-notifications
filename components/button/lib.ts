import cn from 'classnames';
import { ButtonVariant } from './types';

export function getButtonClassNames(
  variant: ButtonVariant,
  disabled?: boolean
) {
  return cn(
    'inline-flex justify-center w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm select-none',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    {
      ['bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600']:
        variant === ButtonVariant.PRIMARY,
      ['border border-gray-300  bg-white text-gray-900 hover:bg-gray-200 focus-visible:outline-black']:
        variant === ButtonVariant.SECONDARY,
      ['opacity-60 pointer-events-none']: disabled,
    }
  );
}
