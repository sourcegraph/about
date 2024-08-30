
const HeroSection = (): any => (
  <div className="flex xl:h-[330px] lg:h-[400px] h-[598px] w-[85%] 2xl:justify-between items-center 2xl:content-center mt-8 md:mt-2 lg:mt-0 self-stretch lg:flex-nowrap flex-wrap bg-violet-700 rounded-lg">
    <div className="flex flex-col 2xl:items-start flex-grow space-y-6 mx-10 2xl:mx-20 w-[400px] mt-8 lg:mt-0">
      <h1 className="font-sans text-6xl font-semibold leading-extra-tight tracking-extra-tight text-white pt-8 2xl:pt-0 pb-0">
        Changelog
      </h1>
      <p className="font-sans text-base font-normal leading-custom-150 tracking-custom-tight text-white">
        Latest updates to the Sourcegraph Code Search and Cody platform!
      </p>
    </div>
    <div className="relative w-[400px] mx-20 lg:h-full flex mt-8 lg:mt-0">
      <div className="absolute left-[-20px] top-0 h-full flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="310"
          viewBox="0 0 2 310"
          fill="none"
        >
          <path
            d="M1 421V0"
            stroke="url(#paint0_linear_708_2613)"
            strokeDasharray="13 13"
          />
          <defs>
            <linearGradient
              id="paint0_linear_708_2613"
              x1="-8"
              y1="-6.5"
              x2="-8.5"
              y2="403.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.265632" stopColor="white" />
              <stop
                offset="0.577601"
                stopColor="white"
                stopOpacity="0.15598"
              />
              <stop offset="0.918695" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col md:space-y-[18px] space-y-[5px] overflow-y-auto lg:h-full pl-4">
        <svg className='md:w-[339px] w-[250px] h-[63px]' viewBox="0 0 339 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M0 8C0 3.58172 3.58172 0 8 0H331C335.418 0 339 3.58172 339 8V55C339 59.4183 335.418 63 331 63H7.99999C3.58171 63 0 59.4183 0 55V8Z" fill="url(#paint0_linear_2001_2881)" fill-opacity="0.17" />
            <path d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H331C335.142 0.5 338.5 3.85787 338.5 8V55C338.5 59.1421 335.142 62.5 331 62.5H7.99999C3.85786 62.5 0.5 59.1421 0.5 55V8Z" stroke="url(#paint1_linear_2001_2881)" stroke-opacity="0.67" />
          </g>
          <rect opacity="0.2" x="67" y="16" width="253" height="10" rx="5" fill="url(#paint2_linear_2001_2881)" />
          <g opacity="0.1">
            <rect x="67" y="35" width="163" height="6" rx="3" fill="white" />
            <rect x="67.5" y="35.5" width="162" height="5" rx="2.5" stroke="url(#paint3_linear_2001_2881)" stroke-opacity="0.67" />
          </g>
          <g opacity="0.6">
            <path d="M21 26C22.6569 26 24 24.6569 24 23C24 21.3431 22.6569 20 21 20C19.3431 20 18 21.3431 18 23C18 24.6569 19.3431 26 21 26ZM21 26V38M35 32C33.3431 32 32 33.3431 32 35C32 36.6569 33.3431 38 35 38C36.6569 38 38 36.6569 38 35C38 33.3431 36.6569 32 35 32ZM35 32V25C35 24.4696 34.7893 23.9609 34.4142 23.5858C34.0391 23.2107 33.5304 23 33 23H28M31 26L28 23M28 23L31 20" stroke="url(#paint4_linear_2001_2881)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_2001_2881" x1="170" y1="63" x2="170" y2="9" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="paint1_linear_2001_2881" x1="210" y1="63" x2="210" y2="8" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_2001_2881" x1="179.5" y1="44" x2="179" y2="17.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint3_linear_2001_2881" x1="148.74" y1="35.0476" x2="148.74" y2="41.8571" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="paint4_linear_2001_2881" x1="33" y1="47" x2="34.5" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E4E9F4" />
              <stop offset="1" stop-color="#85888E" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <svg className='md:w-[372px] w-[280px] h-[96px] -ml-[15px] mt-[10px] -mb-[10px]' viewBox="0 0 372 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" filter="url(#filter0_f_2001_2888)">
            <path d="M12 82.4316L14.5099 12.1552L360 13.2215L357.49 83.4976L12 82.4316Z" fill="white" />
            <path d="M12 82.4316L14.5099 12.1552L360 13.2215L357.49 83.4976L12 82.4316Z" fill="url(#paint0_linear_2001_2888)" fill-opacity="0.7" />
            <path d="M357.008 82.9961L12.5181 81.9332L14.9923 12.6567L359.482 13.7199L357.008 82.9961Z" stroke="#E4E9F4" />
          </g>
          <g opacity="0.7">
            <path d="M16 23.4999C16 19.0816 19.5817 15.4999 24 15.4999H347C351.418 15.4999 355 19.0816 355 23.4999V70.4999C355 74.9182 351.418 78.4999 347 78.4999H24C19.5817 78.4999 16 74.9182 16 70.4999V23.4999Z" fill="#270741" />
            <path d="M16.5 23.4999C16.5 19.3577 19.8579 15.9999 24 15.9999H347C351.142 15.9999 354.5 19.3577 354.5 23.4999V70.4999C354.5 74.642 351.142 77.9999 347 77.9999H24C19.8579 77.9999 16.5 74.642 16.5 70.4999V23.4999Z" stroke="#E4E9F4" stroke-opacity="0.7" />
          </g>
          <rect opacity="0.4" x="83" y="31.4999" width="253" height="10" rx="5" fill="white" />
          <rect opacity="0.2" x="83" y="50.4999" width="163" height="6" rx="3" fill="white" />
          <path d="M37 41.4999C38.6569 41.4999 40 40.1567 40 38.4999C40 36.843 38.6569 35.4999 37 35.4999C35.3431 35.4999 34 36.843 34 38.4999C34 40.1567 35.3431 41.4999 37 41.4999ZM37 41.4999V53.4999M51 47.4999C49.3431 47.4999 48 48.843 48 50.4999C48 52.1567 49.3431 53.4999 51 53.4999C52.6569 53.4999 54 52.1567 54 50.4999C54 48.843 52.6569 47.4999 51 47.4999ZM51 47.4999V40.4999C51 39.9694 50.7893 39.4607 50.4142 39.0857C50.0391 38.7106 49.5304 38.4999 49 38.4999H44M47 41.4999L44 38.4999M44 38.4999L47 35.4999" stroke="#E4E9F4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <filter id="filter0_f_2001_2888" x="0" y="0.155212" width="372" height="95.3424" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2001_2888" />
            </filter>
            <linearGradient id="paint0_linear_2001_2888" x1="3.11967" y1="78.6625" x2="278.045" y2="-77.3615" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4AC1E8" />
              <stop offset="0.660288" stop-color="#A112FF" />
              <stop offset="1" stop-color="#FF5543" />
            </linearGradient>
          </defs>
        </svg>
        <svg className='md:w-[339px] w-[250px] h-[63px]' viewBox="0 0 339 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H331C335.418 0.5 339 4.08172 339 8.5V55.5C339 59.9183 335.418 63.5 331 63.5H7.99999C3.58171 63.5 0 59.9183 0 55.5V8.5Z" fill="white" fill-opacity="0.17" />
            <path d="M0.5 8.5C0.5 4.35786 3.85786 1 8 1H331C335.142 1 338.5 4.35787 338.5 8.5V55.5C338.5 59.6421 335.142 63 331 63H7.99999C3.85786 63 0.5 59.6421 0.5 55.5V8.5Z" stroke="#E4E9F4" stroke-opacity="0.4" />
          </g>
          <g opacity="0.25">
            <rect x="67" y="16.5" width="253" height="10" rx="5" fill="white" />
            <rect x="67.5" y="17" width="252" height="9" rx="4.5" stroke="#E4E9F4" stroke-opacity="0.4" />
          </g>
          <g opacity="0.1">
            <rect x="67" y="35.5" width="163" height="6" rx="3" fill="white" />
            <rect x="67.5" y="36" width="162" height="5" rx="2.5" stroke="#E4E9F4" stroke-opacity="0.4" />
          </g>
          <g opacity="0.4">
            <path d="M21 26.5C22.6569 26.5 24 25.1569 24 23.5C24 21.8431 22.6569 20.5 21 20.5C19.3431 20.5 18 21.8431 18 23.5C18 25.1569 19.3431 26.5 21 26.5ZM21 26.5V38.5M35 32.5C33.3431 32.5 32 33.8431 32 35.5C32 37.1569 33.3431 38.5 35 38.5C36.6569 38.5 38 37.1569 38 35.5C38 33.8431 36.6569 32.5 35 32.5ZM35 32.5V25.5C35 24.9696 34.7893 24.4609 34.4142 24.0858C34.0391 23.7107 33.5304 23.5 33 23.5H28M31 26.5L28 23.5M28 23.5L31 20.5" stroke="#E4E9F4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>
        <svg className='md:w-[339px] w-[250px] h-[63px]' viewBox="0 0 339 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H331C335.418 0.5 339 4.08172 339 8.5V55.5C339 59.9183 335.418 63.5 331 63.5H7.99999C3.58171 63.5 0 59.9183 0 55.5V8.5Z" fill="url(#paint0_linear_2001_2887)" fill-opacity="0.17" />
            <path d="M0.5 8.5C0.5 4.35786 3.85786 1 8 1H331C335.142 1 338.5 4.35787 338.5 8.5V55.5C338.5 59.6421 335.142 63 331 63H7.99999C3.85786 63 0.5 59.6421 0.5 55.5V8.5Z" stroke="url(#paint1_linear_2001_2887)" stroke-opacity="0.67" />
          </g>
          <g opacity="0.1 ">
            <rect x="67" y="16.5" width="253" height="10" rx="5" fill="white" />
            <rect x="67.5" y="17" width="252" height="9" rx="4.5" stroke="url(#paint2_linear_2001_2887)" stroke-opacity="0.67" />
          </g>
          <g opacity="0.1">
            <rect x="67" y="35.5" width="163" height="6" rx="3" fill="white" />
            <rect x="67.5" y="36" width="162" height="5" rx="2.5" stroke="url(#paint3_linear_2001_2887)" stroke-opacity="0.67" />
          </g>
          <g opacity="0.4">
            <path d="M21 26.5C22.6569 26.5 24 25.1569 24 23.5C24 21.8431 22.6569 20.5 21 20.5C19.3431 20.5 18 21.8431 18 23.5C18 25.1569 19.3431 26.5 21 26.5ZM21 26.5V38.5M35 32.5C33.3431 32.5 32 33.8431 32 35.5C32 37.1569 33.3431 38.5 35 38.5C36.6569 38.5 38 37.1569 38 35.5C38 33.8431 36.6569 32.5 35 32.5ZM35 32.5V25.5C35 24.9696 34.7893 24.4609 34.4142 24.0858C34.0391 23.7107 33.5304 23.5 33 23.5H28M31 26.5L28 23.5M28 23.5L31 20.5" stroke="url(#paint4_linear_2001_2887)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_2001_2887" x1="170" y1="1" x2="170" y2="64" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_2001_2887" x1="170" y1="1" x2="170" y2="50" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_2001_2887" x1="193.873" y1="16.5794" x2="193.873" y2="27.9286" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="paint3_linear_2001_2887" x1="148.74" y1="35.5476" x2="148.74" y2="42.3571" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="paint4_linear_2001_2887" x1="28" y1="20.5" x2="28" y2="38.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E4E9F4" />
              <stop offset="1" stop-color="#85888E" stop-opacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
)

export default HeroSection
