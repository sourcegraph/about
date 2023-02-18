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
                <div className="mx-auto max-w-screen-sm">
                    <h5 className="mb-6">About {customer}</h5>
                    <p>{about}</p>
                </div>

                <div
                    className={`grid gap-6 grid-cols-1 md:grid-cols-${staff.length} mt-16 max-w-screen-lg mx-auto`}
                >
                    {staff.map(a => (
                        <div key={a.name} className="md:text-center">
                            <img
                                className="rounded-full max-w-[150px] inline mb-sm"
                                width={150}
                                height={150}
                                src={a.image}
                                alt={a.name}
                            />
                            <h3>{a.name}</h3>
                            <p className="text-gray-400 md:max-w-[250px] mx-auto">{a.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            // Single staff design
            <div className="flex flex-col md:flex-row">
                {staff[0].image && (
                    <div className="mb-sm md:mb-0">
                        <img
                            className="rounded-full w-full max-w-[150px]"
                            width={150}
                            src={staff[0].image}
                            alt={staff[0].name}
                        />
                    </div>
                )}

                <div className="pl-0 md:pl-md">
                    <h3>{staff[0].name}</h3>
                    <p className="text-gray-400">{staff[0].title}</p>

                    <h5>About {customer}</h5>
                    <p>{about}</p>
                </div>
            </div>
        )}
    </div>
)
