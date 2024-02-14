import { Fragment, MouseEventHandler } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'

interface Option {
    title: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}
interface DropdownProps {
    title?: string
    options: Option[]
    parentClassName?: string
}
export const Dropdown = ({ title = 'Options', options, parentClassName }: DropdownProps): JSX.Element => (
    <Menu as="div" className={classNames('relative inline-block text-left', parentClassName)}>
        <div>
            <Menu.Button className="inline-flex w-full justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium">
                {title}
                <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                />
            </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {options.map(option => (
                    <div key={option.title} className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="button"
                                    className={`${
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } w-full rounded-md px-2 py-2 text-left text-sm`}
                                    onClick={option.onClick}
                                >
                                    {option.title}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                ))}
            </Menu.Items>
        </Transition>
    </Menu>
)
