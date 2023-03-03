import { FunctionComponent } from 'react'

export const Dropdown: FunctionComponent<{
    options: string[]
    defaultOption: string
    onChange: (value: string) => void
  }> = ({ options, defaultOption, onChange }) => (
    <div className="relative inline-block text-left">
    <div>
      <span className="rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {defaultOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            />
            <path
              fillRule="evenodd"
              d="M10 3a2 2 0 100 4 2 2 0 000-4zM10 16a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </button>
      </span>
    </div>
  </div>
)
