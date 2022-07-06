export const AuthorBio: React.FunctionComponent<{
    customer: string
    image?: string
    author: string
    title: string
    about: string
}> = ({ customer, image, author, title, about }) => (
    <div className="d-flex flex-column flex-md-row align-items-start">
        {image && (
            <div className="col-md-3">
                <img
                    className="rounded-circle max-w-150"
                    src={image}
                    alt={author}
                />
            </div>
        )}
        <div className="col-md-9 pl-md-5 pl-0">
            <h6 className="pt-md-2 pt-4 font-weight-bold">AUTHOR</h6>
            <h3 className="font-weight-normal">{author}</h3>
            <p className="text-muted">{title}</p>

            <h5 className="font-weight-bold">About {customer}</h5>
            <p>{about}</p>
        </div>
    </div>
)
