import React from 'react';
import Icon from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon';
import ReactIcon from '../DevIcons/React';

const Footer = () => (
    <footer className="h-auto m-8 text-center text-white text-sm">
        Made using
        <ReactIcon className="w-12" />. Copyright &copy;{' '}
        {new Date().getFullYear()}.
    </footer>
);

export default Footer;
