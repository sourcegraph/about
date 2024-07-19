import { ContentSection } from '../ContentSection'
import ReadCaseStudyLink from '../ReadCaseStudyLink'

const QualtricsLogo = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" width="172" height="55" viewBox="0 0 172 55" fill="#0F111A">
        <path d="M56.7046 34.8687C55.6522 34.8687 55.4185 34.0474 55.4185 32.7567V19.3812C55.4185 14.8053 52.8464 12.1068 48.5204 12.1068C43.3761 12.1068 41.0377 16.096 41.0377 19.9678V20.0852H44.5452V19.9678C44.5452 18.6772 45.0129 17.3866 45.8313 16.3306C46.5329 15.6267 47.4682 15.2746 48.4034 15.2746C50.508 15.2746 51.6772 16.9173 51.6772 19.6159V20.9064L47.5851 22.901C42.9084 25.1303 39.8685 26.8903 39.8685 31.4661C39.8685 35.4553 42.4408 38.2713 46.182 38.2713C48.5204 38.1539 50.625 37.0979 51.911 35.2207C52.3786 37.0979 54.0154 38.2713 55.8861 38.2713C56.5876 38.2713 57.2892 38.1539 57.9907 37.802H58.1075V34.5167L57.8737 34.6341C57.5229 34.7514 57.1722 34.8687 56.7046 34.8687ZM51.6772 24.1917V32.0528C50.7418 33.8127 48.988 34.8687 47.0005 35.1034C45.2467 35.2207 43.7269 33.8127 43.6099 32.0528C43.6099 31.9355 43.6099 31.7007 43.6099 31.5835C43.6099 28.5329 46.299 26.8903 48.6373 25.717L51.6772 24.1917Z" />
        <path d="M72.2544 4.59787L72.1376 12.5763H68.8638V15.9788H72.1376V32.405C72.1376 36.0421 73.8913 38.1541 77.048 38.1541C78.3341 38.1541 79.6202 37.8021 80.7894 37.0981H80.9062V33.6956L80.6725 33.9303C79.9709 34.5168 79.0356 34.9863 78.1003 34.9863C76.4634 34.9863 76.1127 33.5782 76.1127 32.405V15.9788H81.4908V12.5763H76.1127V4.59787H72.2544Z" />
        <path d="M32.1521 31.8184C30.7491 33.9303 29.1122 34.9863 27.5924 34.9863C25.6047 34.9863 24.7864 32.9917 24.7864 31.1144V12.5763H21.045V31.3491C21.045 35.6902 23.0326 38.2715 26.4232 38.2715C28.7615 38.2715 30.866 37.0981 32.1521 35.2209L32.2689 37.8022H35.8934V12.5763H32.1521V31.8184Z" />
        <path d="M12.8608 14.9227C11.9255 13.1627 10.0548 12.1067 7.95033 12.2241C5.72892 12.2241 3.74134 13.3974 2.45525 15.1574C0.818416 17.3865 0 20.7892 0 25.1303C0 34.7514 3.85824 38.1539 7.48266 38.1539C9.47024 38.1539 11.224 37.3325 12.3932 35.8072V55.7533H16.1345V12.5761H12.8608V14.9227ZM12.5101 18.3252V32.0528C11.4578 33.93 10.1717 34.8686 8.53492 34.8686C5.49508 34.8686 3.85824 31.5835 3.85824 25.1303C3.85824 18.9118 5.612 15.392 8.65182 15.392C10.4056 15.392 11.9255 16.6825 12.5101 18.3252Z" />
        <path d="M64.8888 0.843262H61.1474V37.6847H64.8888V0.843262Z" />
        <path d="M102.77 12.5763H99.0284V37.6848H102.77V12.5763Z" />
        <path d="M102.887 4.59787H99.1452V8.93907H102.887V4.59787Z" />
        <path d="M88.7397 15.5093L88.5058 12.5761H84.9983V37.802H88.7397V19.6159C90.3765 16.2134 92.5979 15.7439 94.7024 15.7439L95.6378 15.8613V12.1068H94.5856C91.8964 12.1068 90.4935 12.9281 88.7397 15.5093Z" />
        <path d="M133.401 22.7838C131.064 21.6104 129.427 20.5545 129.427 18.4425C129.427 16.7999 130.713 15.392 132.349 15.392C132.467 15.392 132.584 15.392 132.7 15.392C133.636 15.392 134.571 15.7439 135.156 16.4479C135.974 17.3866 136.324 18.6772 136.091 19.9678V20.2025H139.598V20.0852C139.833 17.9732 139.131 15.8613 137.727 14.2188C136.442 12.9281 134.571 12.1068 132.817 12.2241C128.842 12.2241 125.919 14.9227 125.919 18.7945C125.919 23.0184 129.31 24.7784 131.648 26.0689C133.987 27.3596 136.324 28.6502 136.324 31.2314C136.442 33.226 134.804 34.986 132.817 34.986C132.7 34.986 132.7 34.986 132.584 34.986C130.245 34.986 128.491 32.9914 128.374 30.0582V29.9409H124.867V30.0582C124.984 35.1033 127.907 38.2713 132.584 38.2713C136.442 38.5059 139.715 35.5727 139.949 31.8181C139.949 31.5835 139.949 31.2314 139.949 30.9968C139.833 26.1863 136.442 24.4264 133.401 22.7838Z" />
        <path d="M118.787 29.8238C118.787 31.3491 118.32 32.757 117.384 33.9303C116.8 34.517 115.981 34.869 115.163 34.869C112.24 34.869 110.72 31.4663 110.72 25.1306C110.72 18.7948 112.24 15.2749 115.163 15.2749C115.981 15.2749 116.683 15.6269 117.267 16.0962C118.086 17.1522 118.553 18.5602 118.553 19.9681H122.061C122.178 17.7388 121.476 15.5095 119.956 13.867C118.67 12.5763 117.034 11.9897 115.28 11.9897C109.902 11.9897 106.979 16.5655 106.979 25.0133C106.979 33.461 109.785 38.0369 115.046 38.0369C119.255 38.0369 121.827 34.9863 122.178 29.7065L118.787 29.8238Z" />
        <path d="M145.093 35.6902C145.21 35.573 145.21 35.3383 145.21 35.2209C145.21 34.9863 145.093 34.7516 144.977 34.6344C144.742 34.517 144.509 34.3997 144.276 34.3997H142.989V37.0983H143.69V36.0423H144.158L144.626 36.9809H145.328L144.742 35.9249C144.86 35.9249 144.977 35.8076 145.093 35.6902ZM144.509 35.4556C144.392 35.4556 144.276 35.573 144.158 35.573H143.69V34.869H144.158C144.276 34.869 144.392 34.869 144.509 34.9863C144.626 35.1037 144.626 35.1037 144.626 35.2209C144.626 35.3383 144.509 35.4556 144.509 35.4556Z" />
        <path d="M146.263 34.7516C146.145 34.517 146.029 34.1649 145.796 34.0477C145.561 33.813 145.328 33.6956 145.093 33.5784C144.509 33.3437 143.808 33.3437 143.222 33.5784C142.989 33.6956 142.638 33.813 142.521 34.0477C142.287 34.2823 142.17 34.517 142.054 34.7516C141.82 35.3382 141.82 36.0423 142.054 36.7462C142.17 36.9809 142.287 37.3328 142.521 37.4502C142.755 37.6848 142.989 37.8021 143.222 37.9195C143.808 38.1541 144.509 38.1541 145.093 37.9195C145.328 37.8021 145.678 37.6848 145.796 37.4502C146.029 37.2155 146.145 36.9809 146.263 36.7462C146.496 36.0423 146.496 35.3382 146.263 34.7516ZM145.796 36.5116C145.678 36.7462 145.561 36.9809 145.444 37.0981C145.328 37.2155 145.093 37.4502 144.86 37.4502C144.392 37.6848 143.808 37.6848 143.34 37.4502C143.106 37.3328 142.872 37.2155 142.755 37.0981C142.638 36.8635 142.405 36.7462 142.405 36.5116C142.17 36.0423 142.17 35.4556 142.405 34.9863C142.521 34.7516 142.638 34.517 142.755 34.3996C142.872 34.2823 143.106 34.0477 143.34 34.0477C143.808 33.813 144.392 33.813 144.86 34.0477C145.093 34.1649 145.328 34.2823 145.444 34.3996C145.561 34.6342 145.796 34.7516 145.796 34.9863C146.029 35.4556 146.029 36.0423 145.796 36.5116Z" />
        <path d="M167.028 4.45105L163.754 15.9494L160.247 4.45105H152.531L149.958 9.14423L147.153 4.45105H143.294L147.854 11.8428L142.827 20.0559H146.451L149.608 14.6587L152.881 20.0559H158.727V9.26153C158.844 9.73085 158.844 10.0828 158.962 10.4348C159.078 10.7868 159.078 11.0215 159.195 11.3734C159.311 11.6081 159.311 11.9601 159.429 12.1948C159.546 12.4294 159.546 12.6641 159.662 13.0161L162.001 20.1731H165.041L167.379 13.0161C167.496 12.4294 167.729 11.8428 167.847 11.3734C167.964 10.7868 168.08 10.2002 168.197 9.61351V20.2905H171.471V4.68565L167.028 4.45105ZM151.712 11.8428L155.804 5.0377V18.4132L151.712 11.8428Z" />
    </svg>
)

export const QualtricsCard = (): JSX.Element => (
    <ContentSection
        className="align-end sg-bg-gradient-aurora-spectrum flex flex-wrap justify-end gap-10 rounded-2xl border border-[#DBE2F0] py-8 px-8 md:flex-nowrap md:py-16 md:px-20"
        parentClassName="!py-0 -mb-4"
    >
        <div className="flex flex-col gap-10 md:gap-[70px]">
            <QualtricsLogo />
            <div className="flex flex-col gap-6 font-sans">
                <p className="mb-0 text-2xl font-normal leading-tight tracking-[-0.25px] md:text-[35px]">
                    “Something that would've taken me multiple dev days was done in an hour with Cody. Cody can generate
                    a template for a test, and then I can prompt it to make adjustments to get the test to cover exactly
                    what I'm looking for.”
                </p>
                <div>
                    <p className="mb-0 text-base leading-normal tracking-[-0.25px] text-[#343A4D]">Brendan Doyle</p>
                    <p className="mb-0 text-sm font-normal leading-[142%] text-[#0F111A]">Sr. Software Engineer</p>
                </div>
            </div>
        </div>
        <ReadCaseStudyLink
            parentClassName="flex max-h-[24px] whitespace-nowrap md:self-end md:px-0 lg:px-10"
            linkClassName="btn btn-link btn-link-icon p-0"
            href="https://sourcegraph.com/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody"
        />
    </ContentSection>
)
