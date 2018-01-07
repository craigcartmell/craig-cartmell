import React from 'react';

const White = ({ children }) => (
    <button className="bg-transparent hover:bg-white text-white hover:text-blue-dark font-bold py-2 px-4 border border-white rounded">
        {children}
    </button>
);

export default White;
