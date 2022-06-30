import { FunctionComponent } from 'react'

interface AuthorBioProps {
    customer: string
    image?: string
    author: string
    title: string
    about: string
}

export const AuthorBio: FunctionComponent<AuthorBioProps> = ({ customer, image, author, title, about }) => (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start container-xl py-6 py-md-8">
        {image && (
            <div className="col-md-3 col-xl-2 text-center text-md-right">
                <img
                    className="p-1 rounded-circle border border-3 border-pacific-blue max-w-150"
                    src={image}
                    alt={author}
                />
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
