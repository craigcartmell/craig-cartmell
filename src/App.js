import React, { Component } from 'react';
import defaultConfig from 'tailwindcss/defaultConfig'
import './App.css';
import logo from './images/logo-white.png';
import yunojuno from './images/yunojuno.svg';

import Projects from './components/Projects';

import Icon from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/icomoon';
import { github } from 'react-icons-kit/icomoon';
import { twitter } from 'react-icons-kit/icomoon';
import { cloudDownload } from 'react-icons-kit/icomoon';
import { mail4 } from 'react-icons-kit/icomoon';

class App extends Component {
    render() {
        return (
            <div className="w-full h-full bg-blue-darkest text-white">
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
                                  <img alt="YunoJuno" className="w-6" src={yunojuno} />
                                </a>
                            </span>
                            <span className="mr-6">
                                <a
                                    href="https://www.linkedin.com/in/craigcartmell1/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    {/*<span style={{color: "#0077B5"}}>*/}
                                    <span style={{ color: defaultConfig().colors["white"] }}>
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
                                    {/*<span style={{color: "#0077B5"}}>*/}
                                  <span style={{ color: defaultConfig().colors["white"] }}>
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
                                    {/*<span style={{color: "#0077B5"}}>*/}
                                  <span style={{ color: defaultConfig().colors["white"] }}>
                                        <Icon icon={mail4} size={24} />
                                    </span>
                                </a>
                            </span>
                            <span className="mr-6">
                                <a
                                    href="https://github.com/craigcartmell"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Github"
                                >
                                    {/*<span style={{color: "#181717"}}>*/}
                                    <span style={{ color: defaultConfig().colors["white"] }}>
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
                                    {/*<span style={{color: '#1DA1F2'}}>*/}
                                    <span style={{ color: defaultConfig().colors["white"] }}>
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
                <section className="w-full h-screen text-center bg-transparent text-xl">
                  <div className="flex flex-row h-full items-center p-12">
                    <p className="m-4">
                      I'm an experienced and highly motivated
                      <span className="text-pink font-bold">
                            {' '}
                        Freelance Senior Full Stack Developer
                        </span>{' '}
                      with over 15 years in the industry.
                    </p>
                    <p className="m-4">
                      I've been lucky enough to work for some of the biggest
                      companies in their respective industries including{' '}
                      <span className="text-pink font-bold">
                            Saatchi & Saatchi
                        </span>{' '}
                      and more recently, the world's leading outdoor
                      advertising company,
                      <span className="text-pink font-bold"> JCDecaux</span>.

                      <section className="flex flex-row w-full justify-center items-center p-8">
                        <a
                          href="https://uk.yunojuno.com/p/craig-cartmell"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-pink hover:bg-pink-dark text-pink-darker hover:text-pink-light font-bold py-2 px-4 border border-pink-darker rounded mr-1">
                            Check my availability
                          </button>
                        </a>

                        <a
                          href="mailto:craigcartmell1@gmail.com?subject=Are you available%3F"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-pink hover:bg-pink-dark text-pink-darker hover:text-pink-light font-bold py-2 px-4 border border-pink-darker rounded mr-1">
                            Get in touch
                          </button>
                        </a>

                        <a
                          href="https://uk.yunojuno.com/profile/p/craig-cartmell/cv/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-pink hover:bg-pink-dark text-pink-darker hover:text-pink-light font-bold py-2 px-4 border border-pink-darker rounded">
                            Download my CV
                          </button>
                        </a>
                      </section>
                    </p>
                    <p className="m-4">
                      I'm dedicated to staying ahead of the curve, writing
                      clean, readable code and helping implement best
                      practises.
                    </p>
                  </div>
                </section>

                <Projects/>
            </div>
        );
    }
}

export default App;
