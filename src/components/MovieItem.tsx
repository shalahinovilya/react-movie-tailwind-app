import React from 'react';
import {VscTriangleRight} from 'react-icons/vsc'
import {Link} from "react-router-dom";
import {CommonType} from "../types/CommonType";

interface MovieItemProps {
    cat: string;
    el: CommonType;
}

const MovieItem = ({cat, el}: MovieItemProps) => {
    return (
        <Link className="mx-auto" to={`/${cat}/${el.id}/`}>
            <div className="inline-block w-[250px] cursor-pointer align-top group">
                <div className="relative h-[350px] w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path || el.poster_path}`}
                        alt={el.title}
                        className="h-full w-full object-cover rounded-lg"/>
                    <div className="w-full h-full top-0 left-0 flex items-center
                justify-center absolute bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                        <button className="rounded-full scale-0 translate-[-50%_-50%] transition-transform duration-500 ease-in-out
                     group-hover:scale-100 bg-red-700 py-3 px-7">
                            <VscTriangleRight size={25} className="text-white"/>
                        </button>
                    </div>
                </div>
                <p className="text-white whitespace-normal font-bold transition-colors duration-500 ease-in-out group-hover:text-red-600">
                    {el.title || el.name}
                </p>
            </div>
        </Link>
    );
};

export default MovieItem;