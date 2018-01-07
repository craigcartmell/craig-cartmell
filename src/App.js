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
            <div className="w-full h-full bg-blue-darker">
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

                <section className="flex w-full flex-wrap">
                    <div className="w-1/4 h-1 bg-pink" />
                    <div className="w-1/4 h-1 bg-teal-light" />
                    <div className="w-1/4 h-1 bg-blue-light" />
                    <div className="w-1/4 h-1 bg-green" />
                </section>
                <section className="flex flex-col w-full justify-center items-center h-auto p-8 text-center bg-transparent text-white text-sm">
                    <p className="mb-8">
                        I'm an experienced and highly motivated
                        <span className="text-blue font-bold">
                            {' '}
                            Freelance Senior Full Stack Developer
                        </span>{' '}
                        with over 15 years in the industry.
                    </p>
                    <p className="mb-8">
                        I've been lucky enough to work for some of the biggest
                        companies in their respective industries including{' '}
                        <span className="text-blue font-bold">
                            Saatchi & Saatchi
                        </span>{' '}
                        and more recently, the world's leading outdoor
                        advertising company,
                        <span className="text-blue font-bold"> JCDecaux</span>.
                    </p>
                    <p className="mb-8">
                        I'm dedicated to staying ahead of the curve, writing
                        clean, readable code and helping implement best
                        practises.
                    </p>
                    <p>
                        <a
                            href="mailto:craigcartmell1@gmail.com?subject=Are you available%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-green-light hover:bg-green-lighter text-white hover:text-green font-bold py-2 px-4 border border-green-lighter rounded">
                                Get in touch
                            </button>
                        </a>
                    </p>
                </section>

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
