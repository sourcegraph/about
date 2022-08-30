interface Staff {
    image?: string
    name: string
    title: string
}

export const StaffSpotlight: React.FunctionComponent<{
    customer: string
    about: string
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

                <div className="tw-grid tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-3 tw-mt-16 tw-max-w-screen-lg tw-mx-auto">
                    {staff.map(a => (
                        <div key={a.name} className="md:tw-text-center">
                            <img
                                className="tw-rounded-full max-w-150 tw-inline"
                                width={150}
                                height={150}
                                src={a.image}
                                alt={a.name}
                            />
                            <h3 className="mt-4">{a.name}</h3>
                            <p className="text-muted">{a.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            // Single staff design
            <div className="tw-flex tw-flex-col md:tw-flex-row">
                {staff[0].image && (
                    <div className="col-md-3">
                        <img
                            className="tw-p-0 tw-rounded-full max-w-150"
                            width={100}
                            src={staff[0].image}
                            alt={staff[0].name}
                        />
                    </div>
                )}

                <div className="tw-pl-0 col-md-9 md:tw-pl-md">
                    <h3>{staff[0].name}</h3>
                    <p className="text-muted">{staff[0].title}</p>

                    <h5>About {customer}</h5>
                    <p>{about}</p>
                </div>
            </div>
        )}
    </div>
)
