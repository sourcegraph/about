import { FunctionComponent } from 'react'

import { Layout } from '../components'
import ServicesHero from '../components/Services/ServicesHero'

const ServicesPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Professional Services',
            description:
                'We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind.',
        }}
        heroAndHeaderClassName="bg-white"
        childrenClassName="bg-gray-50"
        className="bg-gray-50"
    >
        <div className="relative flex items-center justify-center">
            <ServicesHero />
        </div>

        <div className="mt-28 text-center">
            <h2 className="text-balance mt-2 text-center text-2xl font-medium sm:text-4xl">
                Enable developers to code more and toil less
            </h2>

            <div className="mt-12 text-center">
                <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M16.0013 8.00033V16.0003L21.3346 13.3337M29.3346 16.0003C29.3346 23.3641 23.3651 29.3337 16.0013 29.3337C8.63751 29.3337 2.66797 23.3641 2.66797 16.0003C2.66797 8.63653 8.63751 2.66699 16.0013 2.66699C23.3651 2.66699 29.3346 8.63653 29.3346 16.0003Z"
                                    stroke="black"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <h4 className="mt-5">Enhanced time to value</h4>
                        <p className="mt-3">
                            Get Sourcegraph into the hands of your developers quickly and effectively
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M20.636 17.1868L22.6667 29.3335L16 25.3335L9.33333 29.3335L11.364 17.1868M24 10.667C24 15.0853 20.4183 18.667 16 18.667C11.5817 18.667 8 15.0853 8 10.667C8 6.24871 11.5817 2.66699 16 2.66699C20.4183 2.66699 24 6.24871 24 10.667Z"
                                    stroke="black"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <h4 className="mt-5">Increased adoption</h4>
                        <p className="mt-3">Make sure your teams are getting the most out of Sourcegraph</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M5.33203 26.0003V6.00033C5.33203 5.11627 5.68322 4.26842 6.30834 3.6433C6.93346 3.01818 7.78131 2.66699 8.66536 2.66699H26.6654V29.3337H8.66536C7.78131 29.3337 6.93346 28.9825 6.30834 28.3573C5.68322 27.7322 5.33203 26.8844 5.33203 26.0003ZM5.33203 26.0003C5.33203 25.1163 5.68322 24.2684 6.30834 23.6433C6.93346 23.0182 7.78131 22.667 8.66536 22.667H26.6654M11.9987 12.667L14.6654 15.3337L19.9987 10.0003"
                                    stroke="black"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <h4 className="mt-5">Improved operations</h4>
                        <p className="mt-3">Ensure you're following best practices and supporting your admins</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-28">
            <h2 className="text-balance mt-2 text-center text-2xl font-medium sm:text-4xl">Our Service Offerings</h2>

            <div className="mt-12">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 md:px-10">
                        <svg
                            className="mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                        >
                            <path
                                d="M11.668 18.3337L20.3346 9.66699M1.66797 28.3337V21.667L8.33464 15.0003L15.0013 21.667L8.33464 28.3337H1.66797ZM21.668 1.66699L28.3346 8.33366L27.668 9.00033C27.2307 9.43895 26.7112 9.78696 26.1392 10.0244C25.5672 10.2619 24.954 10.3841 24.3346 10.3841C23.7153 10.3841 23.1021 10.2619 22.5301 10.0244C21.958 9.78696 21.4385 9.43895 21.0013 9.00033C20.5627 8.56308 20.2147 8.04357 19.9772 7.47157C19.7397 6.89956 19.6175 6.28632 19.6175 5.66699C19.6175 5.04766 19.7397 4.43442 19.9772 3.86242C20.2147 3.29042 20.5627 2.7709 21.0013 2.33366L21.668 1.66699Z"
                                stroke="black"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="mb-4 text-xl font-semibold">Implementation</h3>
                        <p className="mb-4 text-gray-600">
                            Receive dedicated Implementation Engineering support to plan, design, and execute a seamless
                            production implementation of Sourcegraph. We work closely with your team to ensure the setup
                            fits your unique environment and business needs.
                        </p>
                        <a
                            href="https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/Implementation%20Services.pdf"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Learn more →
                        </a>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 md:px-10">
                        <svg
                            className="mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M20.636 17.1868L22.6667 29.3335L16 25.3335L9.33333 29.3335L11.364 17.1868M24 10.667C24 15.0853 20.4183 18.667 16 18.667C11.5817 18.667 8 15.0853 8 10.667C8 6.24871 11.5817 2.66699 16 2.66699C20.4183 2.66699 24 6.24871 24 10.667Z"
                                stroke="black"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="mb-4 text-xl font-semibold">Premium Support</h3>
                        <p className="mb-4 text-gray-600">
                            Provides customers with an enhanced support experience leading to faster time to resolution,
                            more personalized support services, and priority support.
                        </p>
                        <a
                            href="https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/Premium%20Support%20Services.pdf"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Learn more →
                        </a>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 md:px-10">
                        <svg
                            className="mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M4 28L14.6933 8.98665M17.32 8.98665L19.8933 13.5733M25.3333 16C20.1733 21.3333 11.8267 21.3333 6.66667 16M28.0001 27.9999L25.1201 22.8799M18.6667 6.66667C18.6667 8.13943 17.4728 9.33333 16 9.33333C14.5272 9.33333 13.3333 8.13943 13.3333 6.66667C13.3333 5.19391 14.5272 4 16 4C17.4728 4 18.6667 5.19391 18.6667 6.66667Z"
                                stroke="black"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="mb-4 text-xl font-semibold">Resident Architect</h3>
                        <p className="mb-4 text-gray-600">
                            Unlock the full potential of Sourcegraph with tailored projects and white-glove enablement.
                            Our dedicated experts will help drive adoption, advanced feature utilization, and long-term
                            success with our platform.
                        </p>
                        <a
                            href="https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/Resident%20Architect%20Services.pdf"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Learn more →
                        </a>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 md:px-10">
                        <svg
                            className="mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M21.332 5.33366H23.9987C24.7059 5.33366 25.3842 5.61461 25.8843 6.11471C26.3844 6.6148 26.6654 7.29308 26.6654 8.00033V26.667C26.6654 27.3742 26.3844 28.0525 25.8843 28.5526C25.3842 29.0527 24.7059 29.3337 23.9987 29.3337H7.9987C7.29145 29.3337 6.61318 29.0527 6.11308 28.5526C5.61298 28.0525 5.33203 27.3742 5.33203 26.667V8.00033C5.33203 7.29308 5.61298 6.6148 6.11308 6.11471C6.61318 5.61461 7.29145 5.33366 7.9987 5.33366H10.6654M11.9987 18.667L14.6654 21.3337L19.9987 16.0003M11.9987 2.66699H19.9987C20.7351 2.66699 21.332 3.26395 21.332 4.00033V6.66699C21.332 7.40337 20.7351 8.00033 19.9987 8.00033H11.9987C11.2623 8.00033 10.6654 7.40337 10.6654 6.66699V4.00033C10.6654 3.26395 11.2623 2.66699 11.9987 2.66699Z"
                                stroke="black"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="mb-4 text-xl font-semibold">Managed Services</h3>
                        <p className="mb-4 text-gray-600">
                            Our experts provide hands-on management of your Sourcegraph implementation, ensuring
                            consistent performance reliability in production, freeing up your team to focus on what
                            matters most.
                        </p>
                        <a
                            href="https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/Managed%20Services.pdf"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Learn more →
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-28 mb-28">
            <h2 className="text-balance mt-2 text-center text-2xl font-medium sm:text-4xl">
                Interested in learning more?
            </h2>
            <p className="text-balance mt-4 text-center text-sm text-gray-500 sm:text-base md:text-xl lg:mt-8">
                Contact your Sourcegraph account executive.
            </p>
        </div>
    </Layout>
)

export default ServicesPage
