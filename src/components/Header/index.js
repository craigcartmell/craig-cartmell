import React from 'react';
import Icon from 'react-icons-kit';
import {
    cloudDownload,
    github,
    linkedin,
    mail4,
    twitter
} from 'react-icons-kit/icomoon/index';
import defaultConfig from 'tailwindcss/defaultConfig';

import logo from '../../images/logo-white.png';
import yunojuno from '../../images/yunojuno.svg';

const Header = () => (
    <header className="flex w-full h-auto p-4 y-4">
        <div className="flex-1">
            <img
                alt="Craig Cartmell - Full Stack Developer"
                className="flex-1 w-1/3 min-w-0"
                src={logo}
            />
        </div>
        <div className="flex-1">
            <div className="flex h-full float-right items-center">
                <span className="mr-6">
                    <a
                        href="https://uk.yunojuno.com/p/craig-cartmell"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="YunoJuno"
                    >
                        <img
                            alt="YunoJuno"
                            style={{ minWidth: '20px' }}
                            className="w-6 xl:w-6 lg:w-6 md:w-6 sm:w-6"
                            src={yunojuno}
                        />
                    </a>
                </span>
                <span className="mr-6">
                    <a
                        href="https://www.linkedin.com/in/craigcartmell1/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="LinkedIn"
                    >
                        <span
                            style={{ color: defaultConfig().colors['white'] }}
                        >
                            <Icon icon={linkedin} size={24} />
                        </span>
                    </a>
                </span>
                <span className="mr-6">
                    <a
                        href="https://uk.yunojuno.com/profile/p/craig-cartmell/cv"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="CV"
                    >
                        <span
                            style={{ color: defaultConfig().colors['white'] }}
                        >
                            <Icon icon={cloudDownload} size={24} />
                        </span>
                    </a>
                </span>
                <span className="mr-6">
                    <a
                        href="mailto:craigcartmell1@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Email"
                    >
                        <span
                            style={{ color: defaultConfig().colors['white'] }}
                        >
                            <Icon icon={mail4} size={24} />
                        </span>
                    </a>
                </span>
                <span className="mr-6">
                    <a
                        href="https://github.com/craigcartmell"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="GitHub"
                    >
                        <span
                            style={{ color: defaultConfig().colors['white'] }}
                        >
                            <Icon icon={github} size={24} />
                        </span>
                    </a>
                </span>
                <span>
                    <a
                        href="https://twitter.com/craigcartmell1"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Twitter"
                    >
                        <span
                            style={{ color: defaultConfig().colors['white'] }}
                        >
                            <Icon icon={twitter} size={24} />
                        </span>
                    </a>
                </span>
            </div>
        </div>
    </header>
);

export default Header;
