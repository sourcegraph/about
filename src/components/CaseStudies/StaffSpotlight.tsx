import { FunctionComponent, ReactNode } from 'react'

interface Staff {
    image?: string
    name: string
    title: string
}

export const StaffSpotlight: FunctionComponent<{
    customer: string
    about: ReactNode
    staff: Staff[]
}> = ({ customer, about, staff }) => (
    <div>
        {staff.length > 1 ? (
            // Multi staff design
            <div>
                <div className="tw-mx-auto tw-max-w-screen-sm">
                    <h5 className="mb-4">About {customer}</h5>
                    <p>{about}</p>
                </div>

                <div
                    className={`tw-grid tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-${staff.length} tw-mt-16 tw-max-w-screen-lg tw-mx-auto`}
                >
                    {staff.map(a => (
                        <div key={a.name} className="md:tw-text-center">
                            <img
                                className="tw-rounded-full max-w-150 tw-inline tw-mb-sm"
                                width={150}
                                height={150}
                                src={a.image}
                                alt={a.name}
                            />
                            <h3>{a.name}</h3>
                            <p className="tw-text-gray-400 md:tw-max-w-[250px] tw-mx-auto">{a.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            // Single staff design
            <div className="tw-flex tw-flex-col md:tw-flex-row">
                {staff[0].image && (
                    <div className="tw-mb-sm md:tw-mb-0">
                        <img
                            className="tw-rounded-full tw-w-full max-w-150"
                            width={150}
                            src={staff[0].image}
                            alt={staff[0].name}
                        />
                    </div>
                )}

                <div className="tw-pl-0 col-md-9 md:tw-pl-md">
                    <h3>{staff[0].name}</h3>
                    <p className="tw-text-gray-400">{staff[0].title}</p>

                    <h5>About {customer}</h5>
                    <p>{about}</p>
                </div>
            </div>
        )}
    </div>
)
