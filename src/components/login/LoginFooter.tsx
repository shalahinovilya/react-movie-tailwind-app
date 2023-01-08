import React from 'react';
import {Link} from "react-router-dom";

const LoginFooter = () => {
    return (
        <>
            <div className="flex justify-between items-center text-gray-500 text-2xl">
                <p>
                    <input className="mr-2 w-5 h-5" type="checkbox" />
                    Remember me
                </p>
                <Link to="#" className="hover:underline">Need help?</Link>
            </div>
            <div className="text-2xl text-gray-500 mt-4">
                <span>New to Netflix?</span>
                <Link className="ml-2 text-white" to={`/signup`}>Sign Up</Link>
            </div>
        </>
    );
};

export default LoginFooter;