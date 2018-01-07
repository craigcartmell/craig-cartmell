import React from 'react';
import ReactIcon from '../DevIcons/React'
import PHPIcon from '../DevIcons/PHP'
import MySQL from "../DevIcons/MySql"
import Sass from "../DevIcons/Sass"
import Babel from "../DevIcons/Babel"
import Laravel from "../DevIcons/Laravel"
import JavaScript from "../JavaScript"
import Node from "../DevIcons/Node"
import Webpack from "../DevIcons/Webpack"
import Gulp from "../DevIcons/Gulp"
import HTML5 from "../DevIcons/HTML5"
import Sequelize from "../DevIcons/Sequelize"
import CodeIgniter from "../DevIcons/CodeIgniter"
import CSS3 from "../DevIcons/CSS3"

const Project = ({
    color,
    heroSrc,
    jobTitle = "Senior Full Stack Developer",
    title,
    description,
    icons,
    role = "",
    style = { clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 60%)' },
    url,
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
        <div className="px-4 py-2 ">
            <span>
                <ReactIcon className="w-10"/>
                <PHPIcon className="w-10"/>
                <MySQL className="w-10"/>
                <Sass className="w-10"/>
                <Babel className="w-10"/>
                <Laravel className="w-10"/>
                <JavaScript className="w-10"/>
                <Node className="w-10"/>
                <Webpack className="w-10"/>
                <Gulp className="w-10"/>
                <HTML5 className="w-10"/>
                <Sequelize className="w-10"/>
                <CodeIgniter className="w-10"/>
                <CSS3 className="w-10"/>
                {/*{icons.map(icon => (*/}
                    {/*<Icon icon={icon} size={32} className="mr-1" />*/}
                {/*))}*/}
            </span>
          {url ? <span className="float-right">
              <a href={url} rel="noopener noreferrer" target="_blank">
                <button
                  className="bg-transparent hover:bg-pink-dark text-white hover:text-pink-light font-bold py-2 px-4 border border-white rounded">
                  View
                </button>
              </a>
            </span> : null}
        </div>
    </div>
);

export default Project;
