import React, { Component } from 'react';
import defaultConfig from 'tailwindcss/defaultConfig'
import './App.css';
import logo from './images/logo-white.png';
import yunojuno from './images/yunojuno.svg';

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
import theDoor from './images/projects/saatchi-the-door.png';
import dashboard from './images/projects/jcdecaux-smart-content-dashboard.png';

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
                           <span className="mr-3">
                                <a
                                  href="https://uk.yunojuno.com/p/craig-cartmell"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  title="YunoJuno"
                                >
                                  <img className="w-6" src={yunojuno} />
                                </a>
                            </span>
                            <span className="mr-3">
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
                            <span className="mr-3">
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
                            <span className="mr-3">
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
                <section className="flex flex-row w-full h-auto p-8 text-center bg-transparent text-xl">
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
                    </p>
                    <p className="m-4">
                        I'm dedicated to staying ahead of the curve, writing
                        clean, readable code and helping implement best
                        practises.
                    </p>
                </section>
                <section className="flex flex-row w-full justify-center items-center p-8">
                  <a
                    href="mailto:craigcartmell1@gmail.com?subject=Are you available%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-pink hover:bg-pink-dark text-pink-darker hover:text-pink-light font-bold py-2 px-4 border border-pink-darker rounded">
                      Get in touch
                    </button>
                  </a>
                </section>
                <section className="flex w-full flex-wrap">
                  <Project
                      color="pink"
                      description="SmartContent is a single page content management platform for managing digital
                      out of home ads."
                      role="Initially hired as a freelancer to support the recently created MVP, I moved into a
                      permanent role to help rebuild the content management system from the ground up. I was responsible
                      for the initial front-end platform build including liaising with the UX designer, choosing the
                      tech stack and creating the initial boilerplate."
                      heroSrc={sc}
                      icons={[html5, css3]}
                      title="SmartContent for Dynamic, JCDecaux"
                  />

                  <Project
                    color="indigo"
                    description="A single page, real-time dashboard showing job failures and campaign analytics."
                    heroSrc={dashboard}
                    icons={[html5, css3]}
                    jobTitle="Senior Full Stack Developer"
                    role="A pet project to display critical information about campaigns and system performance.
                     I built it using Apollo 2 (GraphQL) server for the backend and Apollo 2 client with
                     React for the front-end."
                    title="SmartContent Dashboard for Dynamic, JCDecaux"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 76%, 0 86%)'
                    }}
                    url="https://github.com/craigcartmell/dashboard"
                  />

                  <Project
                      color="teal"
                      description="The tool helps employees measure their own performance as well as allowing managers
                       and directors to view the statistical data using charts and graphs."
                      heroSrc={hero}
                      icons={[html5, css3]}
                      jobTitle="Freelance Front-End Developer"
                      title="ExxonMobil Sales Supervisor Excellence for KHWS"
                      role="As the sole frontend developer, my role was to create a new Self Assessment Platform for
                      ExxonMobil Sales Employees."
                      style={{
                          clipPath: 'polygon(0 0, 100% 0, 100% 52%, 0 66%)'
                      }}
                  />

                  <Project
                    color="orange"
                    description="A single page app which allowed Saatchi & Saatchi to find the brightest new grads.
                     The winners were offered 1 year paid work placement."
                    heroSrc={theDoor}
                    icons={[html5, css3]}
                    jobTitle="Backend Developer"
                    role="Responsible for the full backend development, my role was to create a RESTful API to validate
                     and store submitted user data. Submissions could be viewed via an admin interface which allowed
                     searching and exporting of data."
                    title="The Door for Saatchi & Saatchi"
                    url="http://thedoor.saatchi.co.uk/"
                  />

                  <Project
                      color="blue"
                      description="A single page app that allows users to create their own cartoon avatar with a
                      custom slogan, and upload it to social media."
                      heroSrc={crav}
                      icons={[html5, css3]}
                      jobTitle="Backend Developer"
                      role="Responsible for the full backend development, my role was to create an API to store
                      submitted user data and generate an avatar using Imagick."
                      title="Cravendale Milk Poster for Saatchi & Saatchi"
                      url="http://www.cravendale.co.uk/milkposter/"
                  />

                  <Project
                      color="green"
                      description="Teachers As Tutors provide experienced educators as tutors in London.
                      A specialist tutoring service offering tuition and exam preparation for 7+, 8+, 11+ and CE."
                      heroSrc={tat}
                      icons={[html5, css3]}
                      jobTitle="Freelance Full Stack Developer"
                      role="The site was built in return for charity sponsorship for the Great North Run 2015.
                      As well as providing information for parents, it also gave the tutors with the ability to setup
                      lessons using a calendar system and issue invoices."
                      title="Teachers As Tutors"
                      style={{
                          clipPath: 'polygon(0 0, 100% 0, 100% 76%, 0 86%)'
                      }}
                      url="https://www.teachersastutors.org/"
                  />

                </section>
            </div>
        );
    }
}

export default App;
