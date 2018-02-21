import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import {
    cloudDownload,
    github,
    linkedin,
    mail4,
    twitter
} from 'react-icons-kit/icomoon/index';

import logo from '../../images/logo-white.png';
import yunojuno from '../../images/yunojuno.svg';

require('./header.css');

export class Header extends Component {
    renderIcons = () => {
        const icons = [
            {
                url: 'https://www.linkedin.com/in/craigcartmell1/',
                icon: linkedin,
                title: 'LinkedIn'
            },
            {
                url:
                    '/Craig Cartmell - Contract Senior Full Stack Developer - CV.pdf',
                icon: cloudDownload,
                title: 'CV'
            },
            {
                url:
                    'mailto:craigcartmell1@gmail.com?subject=Are you available',
                icon: mail4,
                title: 'CV'
            },
            {
                url: 'https://github.com/craigcartmell',
                icon: github,
                title: 'GitHub'
            },
            {
                url: 'https://twitter.com/craigcartmell1',
                icon: twitter,
                title: 'Twitter'
            }
        ];

        return icons.map((i, k) => {
            return (
                <span className="Header__iconContainer" key={k}>
                    <a
                        href={i.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={i.title}
                    >
                        <span className="Header__icon">
                            <Icon icon={i.icon} size={24} />
                        </span>
                    </a>
                </span>
            );
        });
    };

    render() {
        return (
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
                        {this.renderIcons()}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
