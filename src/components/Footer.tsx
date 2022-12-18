import React, {memo} from 'react';
import {Link} from "react-router-dom";

const Footer = memo(() => {
    return (
        <div className="relative align-bottom w-full">
            <img className="w-full h-[400px] object-cover" src={`/images/footer.png`} alt={'footer'}/>
            <div
                className="absolute top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center bg-black bg-opacity-70">
                <h2 className="text-5xl font-bold">Watch TV</h2>
                <div className="grid grid-cols-3 text-3xl gap-10">
                    <div className="flex flex-col mt-2">
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Home</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Contact us</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>About us</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Term of services</Link>
                    </div>
                    <div className="flex flex-col mt-2">
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Live</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Faq</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Premium</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col mt-2">
                        <Link className="mt-3 hover:text-red-600" to={'/'}>You must watch</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Recent releases</Link>
                        <Link className="mt-3 hover:text-red-600" to={'/'}>Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Footer;