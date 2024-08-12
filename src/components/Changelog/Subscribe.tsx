const Subscribe = (): any => (
    <div className="mt-8">
        <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-[#111928] mt-8">SUBSCRIBE</h2>
        <form className="mt-6">
            <input
                type="email"
                placeholder="name@example.com"
                className="mb-2 w-full border-gray-300 p-3 rounded-lg border border-[#A6B6D9] bg-[#F9FAFB] font-sans text-sm font-normal leading-[21px] tracking-normal text-[#374151]"
            />
            <label className="inline-flex items-start mt-4">
                <input type="checkbox" className="form-checkbox w-[16px] h-[16px] stroke-[1px] stroke-[#A6B6D9]" />
                <span className="ml-2 text-[#111928] font-sans text-sm font-normal leading-[21px] tracking-normal">
                    I agree to Sourcegraph’s <span className='text-[#820DDE] font-sans text-sm font-normal leading-[150%] tracking-normal' >Terms of Service</span> and <span className='text-[#820DDE] font-sans text-sm font-normal leading-[150%] tracking-normal'>Privacy Policy</span>.<span className='text-[#FF5543] font-sans text-sm font-normal leading-[150%] tracking-normal'>*</span>
                </span>
            </label>
            <button
                type="submit"
                className="flex px-6 py-2 justify-center items-center rounded bg-[#270741] mt-6"
            >
                <span className='text-[#EBEBEB] font-sans text-base font-semibold leading-[150%] tracking-[-0.25px]'>
                    Submit
                </span>
            </button>
        </form>
    </div>
)

export default Subscribe
