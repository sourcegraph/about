interface Author {
    image?: string
    name: string
    title: string
}

export const AuthorBio: React.FunctionComponent<{
    customer: string
    about: string
    authors: Author[]
}> = ({ customer, about, authors }) => (
    <div>
        {authors.length > 1 ? (
            // Multi author design
            <div>
                <div className="tw-mx-auto tw-max-w-screen-sm">
                    <h5 className="mb-4">About {customer}</h5>
                    <p>{about}</p>
                </div>

                <div className="tw-grid tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-3 tw-mt-16 tw-max-w-screen-lg tw-mx-auto">
                    {authors.map(a => (
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
            // Single author design
            <div className="tw-flex tw-flex-col md:tw-flex-row">
                {authors[0].image && (
                    <div className="col-md-3">
                        <img
                            className="p-0 tw-rounded-full max-w-150"
                            width={100}
                            src={authors[0].image}
                            alt={authors[0].name}
                        />
                    </div>
                )}

                <div className="pl-0 col-md-9 pl-md-5">
                    <h6 className="pt-4 pt-md-2">AUTHOR</h6>
                    <h3>{authors[0].name}</h3>
                    <p className="text-muted">{authors[0].title}</p>

                    <h5>About {customer}</h5>
                    <p>{about}</p>
                </div>
            </div>
        )}
    </div>
)
