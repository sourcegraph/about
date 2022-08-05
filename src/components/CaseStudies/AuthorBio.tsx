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
    <section>
        {authors.length > 1 ? (
            // Multi author design
            <div>
                <section className="col-lg-6 mx-auto p-0 max-w-650">
                    <h5 className="mb-4 text-xl font-weight-bold">About {customer}</h5>
                    <p>{about}</p>
                </section>

                <section className="d-md-flex d-block justify-content-between col-lg-9 mx-auto mt-6 p-0">
                    {authors.map(a => (
                        <div key={a.name}>
                            <img className="rounded-circle max-w-150" width={150} height={150} src={a.image} alt={a.name} />
                            <h3 className="font-weight-normal">{a.name}</h3>
                            <p className="text-muted">{a.title}</p>
                        </div>
                    ))}
                </section>
            </div>
        ) : (
            // Single author design
            <div className="d-flex flex-column flex-md-row align-items-start">
                {authors[0].image && (
                    <div className="col-md-3">
                        <img className="rounded-circle p-0 max-w-150" width={100} src={authors[0].image} alt={authors[0].name} />
                    </div>
                )}

                <div className="col-md-9 pl-md-5 pl-0">
                    <h6 className="pt-md-2 pt-4 font-weight-bold">AUTHOR</h6>
                    <h3 className="font-weight-normal">{authors[0].name}</h3>
                    <p className="text-muted">{authors[0].title}</p>

                    <h5 className="font-weight-bold">About {customer}</h5>
                    <p>{about}</p>
                </div>
            </div>
        )}
    </section>
)
