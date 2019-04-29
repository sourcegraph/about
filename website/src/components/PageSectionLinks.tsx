import React from 'react'

export const PageSectionLinks: React.FunctionComponent<{ sections: { text: string; url: string }[] }> = ({
    sections,
}) => (
    <div className="container-fluid bg-white py-5">
        <ul className="nav nav-pills justify-content-center">
            {sections.map(({ text, url }, i) => (
                <li key={i} className="nav-item mr-2 mb-2">
                    <a className={`nav-link btn btn-outline-primary rounded-lg ${i === 0 ? 'active' : ''}`} href={url}>
                        {text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)
