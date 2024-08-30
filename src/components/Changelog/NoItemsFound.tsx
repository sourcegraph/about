export const NoItemsFound = (): any => (
  <div className="flex flex-col items-center gap-[16px] p-[64px_0_112px_0]">
    <svg className='w-[24px] h-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h2 className='text-dark-bg-3 text-center font-sans text-2xl font-semibold leading-[130%] tracking-[-0.25px]'>
      There are no items that match your search criteria.
    </h2>
    <p className='text-dark-bg-3 text-center font-sans text-lg font-normal leading-[150%] tracking-[-0.25px]'>
      Please try searching with different terms or adjust your filters.
    </p>
  </div>
)
