import React from 'react';
import { Link } from 'react-scroll';
import Icon from 'react-icons-kit';
import { circleDown } from 'react-icons-kit/icomoon/index';

import Contact from '../Contact';

const About = () => (
    <section className="w-full h-screen text-center bg-transparent text-lg md:text-xl mb-8 md:mb-2">
        <div className="flex flex-col xl:flex-row h-screen pt-8 xl:pt-0 lg:pt-0 items-center justify-start xl:justify-center lg:justify-center">
            <div className="m-4">
                I'm an experienced and highly motivated
                <span className="text-pink font-bold">
                    {' '}
                    Contract Senior Full Stack Developer{' '}
                </span>
                with over 15 years in the industry.
            </div>
            <div className="m-4">
                I've been lucky enough to work at some of the biggest companies
                in their respective industries including{' '}
                <span className="text-pink font-bold"> Saatchi & Saatchi </span>
                and more recently, the world's leading outdoor advertising
                company,
                <span className="text-pink font-bold"> JCDecaux</span>.
                <Contact />
            </div>
            <div className="hidden md:block mb-0 md:mb-4">
                I'm dedicated to staying ahead of the curve, writing clean,
                readable code and helping implement best practises.
            </div>

            <div className="block md:absolute md:pin-b w-full h-auto mb-2">
                <Link
                    to="projects"
                    className="cursor-pointer no-underline"
                    smooth={true}
                    duration={500}
                >
                    <span className="block text-pink">My Latest Work</span>
                    <span className="block mt-2 text-white bounce">
                        <Icon icon={circleDown} size={32} />
                    </span>
                </Link>
            </div>
        </div>
    </section>
);

export default About;
