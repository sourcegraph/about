const Subscribe = (): any => (
    <div className="mt-8">
        <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-gray-700 mt-8">SUBSCRIBE</h2>
        <form className="mt-6">
            <input
                type="email"
                placeholder="name@example.com"
                className="mb-2 w-full border-gray-300 p-3 rounded-lg border border-gray-300 bg-gray-50 font-sans text-sm font-normal leading-[21px] tracking-normal text-gray-500"
            />
            <label className="inline-flex items-start mt-4">
                <input type="checkbox" className="form-checkbox w-[16px] h-[16px] stroke-[1px] stroke-gray-300" />
                <span className="ml-2 text-gray-700 font-sans text-sm font-normal leading-[21px] tracking-normal">
                    I agree to Sourcegraph’s <span className='text-violet-500 font-sans text-sm font-normal leading-[150%] tracking-normal' >Terms of Service</span> and <span className='text-violet-500 font-sans text-sm font-normal leading-[150%] tracking-normal'>Privacy Policy</span>.<span className='text-vermillion-300 font-sans text-sm font-normal leading-[150%] tracking-normal'>*</span>
                </span>
            </label>
            <button
                type="submit"
                className="flex px-6 py-2 justify-center items-center rounded bg-violet-700 mt-6"
            >
                <span className='text-gray-75 font-sans text-base font-semibold leading-[150%] tracking-[-0.25px]'>
                    Submit
                </span>
            </button>
        </form>
    </div>
)

export default Subscribe
