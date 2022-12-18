import React from 'react';
import CastList from "./CastList";
import {MovieDetail} from "../../types/MovieDetail";

interface FilmInfoProps {
    data: MovieDetail;
    cat: string;
    movieId: number;
}

const MovieInfo = ({data, cat, movieId}: FilmInfoProps) => {
    return (
        <div className="relative flex flex-col xl:flex-row max-w-[1260px] mb-20 mx-auto mt-[-200px]">
            <div className="h-min-[550px] basis-1/3">
                <img
                    className="hidden xl:block xl:h-full xl:w-ful object-cover rounded-lg"
                    src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`}
                    alt={data.release_date}/>
            </div>
            <div className="flex flex-col ml-5 basis-2/3 gap-y-12">
                <p className="text-white text-7xl font-bold self-start">{data.original_title}</p>
                <p className="text-white text-2xl w-[60%] md:w-[70%] xl:w-full">
                    {data.overview}
                </p>
                <ul className="flex flex-wrap text-white">
                    {data.genres.map((el: { id: number, name: string }) => (
                        <li key={el.id}
                            className="border mr-3 my-1 rounded-full py-1 px-7 transition-colors
                             ease-in-out duration-500 hover:bg-white hover:text-black cursor-pointer">
                            {el.name}
                        </li>
                    ))}
                </ul>
                <CastList cat={cat} movieId={+movieId}/>
            </div>
        </div>
    );
};

export default MovieInfo;