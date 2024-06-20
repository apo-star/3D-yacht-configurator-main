/* This example requires Tailwind CSS v2.0+ */
// eslint-disable-next-line no-restricted-imports
import { DarkSVG } from '../svgs/DarkSVG'
// eslint-disable-next-line no-restricted-imports
import { LightSVG } from '../svgs/LightSVG'
import { Switch } from '@headlessui/react'
import { SwitchButtonType } from '@/type/switchButton'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SwitchButton(props: SwitchButtonType) {
  const { value, handleChange } = props

  return (
    <Switch
      checked={value}
      onChange={handleChange}
      className={classNames(
        value ? 'bg-indigo-600' : 'bg-gray-200',
        'absolute right-4 top-4 inline-flex h-10 w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out'
      )}>
      <span
        className={classNames(
          value ? 'translate-x-10' : 'translate-x-0',
          'pointer-events-none relative inline-block h-10 w-10 transform rounded-full bg-white shadow ring-0 transition duration-500 ease-in-out'
        )}>
        <span
          className={classNames(
            value ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-500 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true">
          <LightSVG className="w-6" />
        </span>
        <span
          className={classNames(
            value ? 'opacity-100 duration-500 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true">
          <DarkSVG className="w-6" />
        </span>
      </span>
    </Switch>
  )
}
