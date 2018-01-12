import React from 'react';

require('./buttonPink.css');

const Pink = ({ children }) => (
    <button className="bg-transparent hover:bg-pink text-white hover:text-white font-bold py-2 px-4 border border-pink rounded Button">
        {children}
    </button>
);

export default Pink;
