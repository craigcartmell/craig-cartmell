import React from 'react';
import Project from "../Project"

import hero from '../../images/projects/exxon-mobil-sales-supervisor-excellence.png';
import sc from '../../images/projects/jcdecaux-smart-content-new.png';
import crav from '../../images/projects/cravendale-milkposter.png';
import tat from '../../images/projects/teachers-as-tutors.png';
import theDoor from '../../images/projects/saatchi-the-door.png';
import dashboard from '../../images/projects/jcdecaux-smart-content-dashboard.png';

const projs = [
    {
        color: "pink",
        description: "SmartContent is a single page content management platform for managing digital out of home ads.",
        jobTitle: "Senior Full Stack Developer",
        role: "Initially hired as a freelancer to support the recently created MVP, I moved into a permanent role to " +
        "help rebuild the content management system from the ground up. I was responsible " +
        "for the initial front-end platform build including liaising with the UX designer, choosing the " +
        "tech stack and creating the initial boilerplate.",
        heroSrc: sc,
        style: {clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 90%)"},
        title: "SmartContent for Dynamic, JCDecaux",
    },
    {
        color: "indigo",
        description: "A single page, real-time dashboard showing job failures and campaign analytics.",
        heroSrc: dashboard,
        jobTitle: "Senior Full Stack Developer",
        role: "A pet project to display critical information about campaigns and system performance. I built it using Apollo 2 " +
        "(GraphQL) server for the backend and Apollo 2 client with React for the front-end.",
        title: "SmartContent Dashboard for Dynamic, JCDecaux",
        style: {
            clipPath: 'polygon(0 0, 100% 0, 100% 76%, 0 86%)'
        },
        url: "https://github.com/craigcartmell/dashboard"
    },
    {
        color: "teal",
        description: "The tool helps employees measure their own performance as well as allowing managers and" +
        " directors to view the statistical data using charts and graphs.",
        heroSrc: hero,
        jobTitle: "Freelance Front-End Developer",
        title: "ExxonMobil Sales Supervisor Excellence for KHWS",
        role: "As the sole frontend developer, my role was to create a new Self Assessment Platform for ExxonMobil" +
        " Sales Employees.",
        style: {
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 94%)'
        }
    },
    {
        color: "orange",
        description: "A single page app which allowed Saatchi & Saatchi to find the brightest new grads. " +
        "The winners were offered 1 year paid work placement.",
        heroSrc: theDoor,
        jobTitle: "Backend Developer",
        role: "Responsible for the full backend development, my role was to create a RESTful API to validate and " +
        "store submitted user data. Submissions could be viewed via an admin interface which allowed searching " +
        "and exporting of data.",
        style: {clipPath: 'polygon(0px 0px, 100% 0px, 100% 84%, 0px 96%)'},
        title: "The Door for Saatchi & Saatchi",
        url: "http://thedoor.saatchi.co.uk/",
    },
    {
        color: "blue",
        description: "A single page app that allows users to create their own cartoon avatar with a " +
        "custom slogan, and upload it to social media.",
        heroSrc: crav,
        jobTitle: "Backend Developer",
        role: "Responsible for the full backend development, my role was to create an API to store " +
        "submitted user data and generate an avatar using Imagick.",
        title: "Cravendale Milk Poster for Saatchi & Saatchi",
        style: {clipPath: 'polygon(0px 0px, 100% 0px, 100% 99%, 0px 90%)'},
        url: "http://www.cravendale.co.uk/milkposter/"
    },
    {
        color: "green",
        description: "Teachers As Tutors provide experienced educators as tutors in London. A specialist" +
        " tutoring service offering tuition and exam preparation for 7+, 8+, 11+ and CE.",
        heroSrc: tat,
        jobTitle: "Freelance Full Stack Developer",
        role: "The site was built in return for charity sponsorship for the Great North Run 2015. As well as providing" +
        " information for parents, it also gave the tutors with the ability to setup lessons using a calendar system" +
        " and issue invoices.",
        title: "Teachers As Tutors",
        style: {
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 86%, 0px 100%)'
        },
        url: "https://www.teachersastutors.org/"
    }
]

const Projects = () => (
    <section className="flex w-full flex-wrap">
        {projs.map(p => <Project {...p}/>)}
    </section>
);

export default Projects;
