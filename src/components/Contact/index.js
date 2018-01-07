import React from 'react';
import ButtonPink from '../Button/Pink';

const Contact = () => (
    <div className="flex flex-row w-full justify-center items-center p-8">
        <a
            className="mr-2"
            href="https://uk.yunojuno.com/p/craig-cartmell"
            target="_blank"
            rel="noopener noreferrer"
        >
            <ButtonPink>Check my availability</ButtonPink>
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
    </div>
);

export default Contact;
