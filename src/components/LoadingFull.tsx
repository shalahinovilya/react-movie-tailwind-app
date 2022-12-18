import React from 'react';
import Footer from "./Footer";
import Loader from "./Loader";

const LoadingFull = () => {
    return (
        <div className="flex flex-col h-[100vh] w-full">
            <Loader/>
            <div className="mt-auto w-full">
                <Footer/>
            </div>
        </div>
    );
};

export default LoadingFull;