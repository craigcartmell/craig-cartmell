import React from 'react';
import Icon from 'react-icons-kit';

const Project = ({
    color,
    heroSrc,
    title,
    description,
    icons,
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
                alt="ExxonMobil - Sales Supervisor Excellence"
                style={style}
            />
        </div>
        <div className="px-4 py-3">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-sm">{description}</p>
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
