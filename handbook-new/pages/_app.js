import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Image from 'next/image'
import Link from 'next/link'

import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  BellIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  OfficeBuildingIcon,
  CogIcon,
  CodeIcon,
  MenuIcon,
  SupportIcon,
  TerminalIcon,
  SparklesIcon,
  UserGroupIcon,
  ExternalLinkIcon,
  XIcon,
  CurrencyDollarIcon,
  SpeakerphoneIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const user = {
  name: 'Chelsea Hagon',
  handle: 'chelseahagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  imageId: '1550525811-e5869dd03032',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Handbook', href: '/handbook/index', icon: BookOpenIcon, current: true },
  { name: 'Company', href: '/company/index', icon: OfficeBuildingIcon, current: false },
  { name: 'People Ops', href: '/people-ops/index', icon: UserGroupIcon, current: false },
  { name: 'Product', href: '/product/index', icon: PresentationChartLineIcon, current: false },
  { name: 'Engineering', href: '/engineering/index', icon: CodeIcon, current: false },
  { name: 'Customer Support', href: '/support/index', icon: SupportIcon, current: false },
  { name: 'Customer Engineering', href: '/ce/index', icon: TerminalIcon, current: false },
  { name: 'Marketing', href: '/marketing/index', icon: SpeakerphoneIcon, current: false },
  { name: 'Sales', href: '/sales/index', icon: CurrencyDollarIcon, current: false },
  { name: 'Talent', href: '/talent/index', icon: SparklesIcon, current: false },
  { name: 'Operations', href: '/ops/index', icon: CogIcon, current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AppShell({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-4">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center relative top-1">
                    <a href="/">
                      <Image src="/images/sourcegraph-logo.svg" width={200} height={71} alt="Sourcegraph logo" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center w-full px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full ml-12">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Start searching by hitting ⌘+K"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex xl:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="https://about.sourcegraph.com"
                    className="inline-flex items-center px-2 py-2 border border-indigo-600 text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    target="_blank"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                    About Sourcegraph
                  </a>

                  <a
                    href="https://sourcegraph.com/search"
                    className="ml-6 inline-flex items-center px-2 py-2 border border-indigo-600 text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    target="_blank"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                    Sourcegraph.com
                  </a>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="py-6">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
              <div className="space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-blue-100 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-500 group-hover:text-gray-900',
                        'mr-2 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <main className="lg:col-span-10 xl:col-span-7 prose bg-white p-4 rounded-md shadow lg:max-w-7xl">
            <Component {...pageProps} />
          </main>
          <aside className="hidden xl:block xl:col-span-3">
            <div className="sticky top-6 space-y-4">
              <h2>On this page</h2>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
