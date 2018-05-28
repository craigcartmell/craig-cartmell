import React from 'react';
import ReactIcon from '../DevIcons/React';

const Footer = () => (
    <footer className="h-auto m-8 text-center text-white text-sm">
        Made using
        <ReactIcon className="w-12" />. Copyright &copy;{' '}
        {new Date().getFullYear()}.
    </footer>
);

export default Footer;
