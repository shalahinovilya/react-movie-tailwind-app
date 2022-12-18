import React, {memo} from 'react';
import {Link} from "react-router-dom";

const NavBar = memo(() => {
    return (
        <div className="flex justify-between items-center p-4 absolute w-full z-[999]">
            <Link to={'/'}>
                <h1 className="text-5xl font-bold text-red-600 cursor-pointer">Watch TV</h1>
            </Link>
            <div className="flex text-2xl">
                <button className="text-white mr-5">Sign In</button>
                <button className="text-white py-3 px-6 bg-red-600 rounded-2xl">Sign Up</button>
            </div>
        </div>
    );
});

export default NavBar;