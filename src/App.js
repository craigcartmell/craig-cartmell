import React, { Component } from 'react';
import './App.css';
import logo from './images/logo-white.png';

import Project from './components/Project';

import Icon from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/icomoon';
import { github } from 'react-icons-kit/icomoon';
import { twitter } from 'react-icons-kit/icomoon';
import { html5 } from 'react-icons-kit/fa';
import { css3 } from 'react-icons-kit/fa';

import hero from './images/projects/exxon-mobil-sales-supervisor-excellence.png';
import sc from './images/projects/jcdecaux-smart-content.png';
import crav from './images/projects/cravendale-milkposter.png';
import tat from './images/projects/teachers-as-tutors.png';

class App extends Component {
    render() {
        return (
            <div className="w-full h-screen font-sans bg-blue-darker">
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
                            <span className="mr-3">
                                <a
                                    href="https://www.linkedin.com/in/craigcartmell1/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {/*<span style={{color: "#0077B5"}}>*/}
                                    <span style={{ color: '#fff' }}>
                                        <Icon icon={linkedin} size={24} />
                                    </span>
                                </a>
                            </span>
                            <span className="mr-3">
                                <a
                                    href="https://github.com/craigcartmell"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {/*<span style={{color: "#181717"}}>*/}
                                    <span style={{ color: '#fff' }}>
                                        <Icon icon={github} size={24} />
                                    </span>
                                </a>
                            </span>
                            <span className="mr-3">
                                <a
                                    href="https://twitter.com/craigcartmell1"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {/*<span style={{color: '#1DA1F2'}}>*/}
                                    <span style={{ color: '#fff' }}>
                                        <Icon icon={twitter} size={24} />
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </header>

                <section />

                <section className="flex w-full flex-wrap">
                    <Project
                        color="pink"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
                        heroSrc={sc}
                        icons={[html5, css3]}
                        title="JCDecaux - SmartContent"
                    />

                    <Project
                        color="teal"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
                        heroSrc={hero}
                        icons={[html5, css3]}
                        title="ExxonMobil - Sales Supervisor Excellence"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 52%, 0 66%)'
                        }}
                    />

                    <Project
                        color="blue"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
                        heroSrc={crav}
                        icons={[html5, css3]}
                        title="Cravendale Milk Poster"
                    />

                    <Project
                        color="green"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
                        heroSrc={tat}
                        icons={[html5, css3]}
                        title="Teachers as Tutors"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 76%, 0 86%)'
                        }}
                    />
                </section>
            </div>
        );
    }
}

export default App;
