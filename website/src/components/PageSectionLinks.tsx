import React from 'react'

export const PageSectionLinks: React.FunctionComponent<{ sections: { text: string; url: string }[] }> = ({
    sections,
}) => (
    <div className="container-fluid bg-white py-5 d-flex justify-content-center align-items-center flex-wrap">
        <div className="text-muted mb-2 mr-2 flex-0">Jump to:</div>
        <ul className="nav nav-pills justify-content-center flex-0">
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
