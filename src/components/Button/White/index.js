import React from 'react';

require('./buttonWhite.css');

const White = ({ children }) => (
    <button className="bg-transparent hover:bg-white text-white hover:text-blue-dark font-bold py-2 px-4 border border-white rounded Button">
        {children}
    </button>
);

export default White;
