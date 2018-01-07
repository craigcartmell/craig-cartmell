import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Projects from './components/Projects';
import ButtonPink from './components/Button/Pink';

class App extends Component {
    render() {
        return (
            <div className="w-full h-full bg-blue-darkest text-white">
                <Header />

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
                            I've been lucky enough to work at some of the
                            biggest companies in their respective industries
                            including{' '}
                            <span className="text-pink font-bold">
                                Saatchi & Saatchi
                            </span>{' '}
                            and more recently, the world's leading outdoor
                            advertising company,
                            <span className="text-pink font-bold">
                                {' '}
                                JCDecaux
                            </span>.
                            <section className="flex flex-row w-full justify-center items-center p-8">
                                <a
                                    className="mr-2"
                                    href="https://uk.yunojuno.com/p/craig-cartmell"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ButtonPink>
                                        Check my availability
                                    </ButtonPink>
                                </a>

                                <a
                                    className="mr-2"
                                    href="mailto:craigcartmell1@gmail.com?subject=Are you available%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ButtonPink>Get in touch</ButtonPink>
                                </a>

                                <a
                                    href="https://uk.yunojuno.com/profile/p/craig-cartmell/cv/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ButtonPink>Download my CV</ButtonPink>
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

                <Projects />
            </div>
        );
    }
}

export default App;
