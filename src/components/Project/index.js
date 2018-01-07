import React from 'react';

const Project = ({
    color,
    heroSrc,
    jobTitle = 'Senior Full Stack Developer',
    title,
    description,
    icons,
    role = '',
    style = { clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 60%)' },
    url
}) => (
    <div
        className={`w-1/4 h-full overflow-hidden shadow-lg bg-${color} text-white`}
    >
        <div className="h-1" />
        <div className="w-full">
            <img
                className="w-full"
                src={heroSrc}
                alt={description}
                style={style}
            />
        </div>
        <div className="px-4 py-3 leading-normal">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
            <h3 className="h-3 mt-6 mb-6">{jobTitle}</h3>
            <p className="text-sm mt-3">{role}</p>
        </div>
        <div className="px-4 py-2">
            <span>
                {icons &&
                    icons.map(icon =>
                        React.cloneElement(icon, { className: 'w-8 mr-2' })
                    )}
            </span>
            {url ? (
                <span className="float-right">
                    <a href={url} rel="noopener noreferrer" target="_blank">
                        <button className="bg-transparent hover:bg-white text-white hover:text-blue-dark font-bold py-2 px-4 border border-white rounded">
                            View
                        </button>
                    </a>
                </span>
            ) : null}
        </div>
    </div>
);

export default Project;
