export const AuthorBio: React.FunctionComponent<{
    customer: string
    image?: string
    author: string
    title: string
    about: string
}> = ({ customer, image, author, title, about }) => (
    <div className="d-flex flex-md-row flex-column align-items-center align-items-md-start container-xl py-6 py-md-8">
        {image && (
            <div className="col-md-3 col-xl-2 text-center text-md-right">
                {/* TODO: On Tailwind migration, trade out auotor-bio_img custom style for utility class: "border border-3 border-sky-400" */}
                <img className="p-1 rounded-circle author-bio__img" src={image} alt={author} />
            </div>
        )}
        <div className="col-md-4 col-xl-3 text-center text-md-left">
            <h5 className="font-weight-bold pt-5">{author}</h5>
            <p>{title}</p>
        </div>
        <div className="col-md-5 col-xl-6 mr-xl-0 mx-md-auto text-center text-md-left">
            <h5 className="font-weight-bold pt-5">About {customer}</h5>
            <p>{about}</p>
        </div>
    </div>
)
