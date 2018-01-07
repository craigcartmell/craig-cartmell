import React from 'react';
import Icon from 'react-icons-kit';

const Project = ({
    color,
    heroSrc,
    jobTitle = "Senior Full Stack Developer",
    title,
    description,
    icons,
    role = "",
    style = { clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 60%)' }
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
        <div className="px-4 py-2 opacity-50">
            <span style={{ color: '#fff' }}>
                {icons.map(icon => (
                    <Icon icon={icon} size={32} className="mr-1" />
                ))}
            </span>
        </div>
    </div>
);

export default Project;
