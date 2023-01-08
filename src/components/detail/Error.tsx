import React from 'react';
import NavBar from "../NavBar";

const Error = () => {
    return (
        <>
            <NavBar/>
            <div className="relative w-full h-[100vh]">
                <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-80">
                    <p className="text-white text-9xl font-bold">Page was not found</p>
                </div>
                <img src={`/images/errorBackground.jpg`} alt={'error'} className="w-full h-[100vh] object-cover"/>
            </div>
        </>
    );
};

export default Error;