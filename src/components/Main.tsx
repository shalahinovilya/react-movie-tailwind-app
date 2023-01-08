import React from 'react';
import {category, useGetMovieListQuery} from "../store/services/watchTvService";
import Loader from "./Loader";
import {Link} from "react-router-dom";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)

const Main = () => {

    let item
    const {data = {results: []}, isLoading, isError} = useGetMovieListQuery({
        cat: category.movie,
        page: 1,
        type: 'popular'
    })

    if (isLoading) return (
        <Loader/>
    )

    if (!data || isError) {
        return <div className="h-40"></div>
    }

    item = data.results[random(0, data.results?.length || 20)]

    return (
        <div className="h-[700px] w-full relative bg-amber-50">
            <div className="h-full w-full absolute bg-gradient-to-b from-black"></div>
            <img
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.backdrop_path}/>
            <div className="absolute top-[25%] p-4">
                <h1 className="text-white text-5xl font-bold">
                    {item.original_title}
                </h1>
                <div className="mt-7">
                    <Link to={`/${category.movie}/${item.id}`}>
                        <button className="border text-black text-3xl px-5 py-2 mr-4 mb-4 bg-gray-300">
                            Play
                        </button>
                    </Link>
                    <button className="border text-white text-3xl px-5 py-2 border-white hover:bg-gray-300
                        hover:text-black transition-colors duration-500 ease-in-out">
                        Watch Later
                    </button>
                </div>
                <time className="text-gray-300 text-1xl">
                    {item.release_date}
                </time>
                <p className="w-full text-white text-2xl md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]">
                    {item.overview}
                </p>
            </div>
        </div>
    );
};

export default Main;