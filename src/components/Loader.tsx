import React from 'react';

const Loader = () => {
    return (
        <div className="flex w-full items-center justify-center my-auto">
            <div className="w-36 h-36 border-l-4 border-y-amber-400 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;