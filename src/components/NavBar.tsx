import React, {memo} from 'react';
import {Link} from "react-router-dom";

const NavBar = memo(() => {
    return (
        <div className="flex justify-between items-center p-4 absolute w-full z-[999]">
            <Link to={'/'}>
                <h1 className="text-5xl font-bold text-red-600 cursor-pointer transition duration-500 ease-in-out hover:scale-110 ">Watch TV</h1>
            </Link>
            <div className="flex items-center text-2xl">
                <Link to="/login" className="text-white mr-5 transition duration-500 ease-in-out hover:scale-110">Sign In</Link>
                <Link to="/signup" className="text-white py-3 px-6 bg-red-600 rounded-2xl transition duration-500 ease-in-out hover:scale-110 ">Sign Up</Link>
            </div>
        </div>
    );
});

export default NavBar;