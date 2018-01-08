import React from 'react';
import ButtonWhite from '../Button/White';
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
        className={`xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full h-full overflow-hidden shadow-lg bg-${color} text-white mb-8 md:mb-0`}
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
            <p className="text-base">{description}</p>
            <h3 className="h-3 mt-8 mb-6">{jobTitle}</h3>
            <p className="text-base mt-3">{role}</p>
        </div>
        <div className="px-4 py-2 mt-8">
            <span>
                {icons &&
                    icons.map((icon, key) =>
                        React.cloneElement(icon, { className: 'w-8 mr-2', key })
                    )}
            </span>
            {url ? (
                <span className="float-right">
                    <a href={url} rel="noopener noreferrer" target="_blank">
                        <ButtonWhite>View</ButtonWhite>
                    </a>
                </span>
            ) : null}
        </div>
    </div>
);

export default Project;
