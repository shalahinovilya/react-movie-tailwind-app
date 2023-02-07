import React from 'react';
import {useGetWatchlistMoviesQuery} from "../../store/services/watchTvService";
import MovieSlider from "../common/MovieSlider";
import {CommonType} from "../../types/CommonType";
import MovieItem from "../MovieItem";
import Loader from "../Loader";

interface WatchlistMovieListProps {
    cat: string;
    type: string;
    title: string;
}

const WatchlistMovieList = ({cat, type, title} : WatchlistMovieListProps) => {

    const {data, isLoading, isError} = useGetWatchlistMoviesQuery({cat, type})

    if (isLoading) return (
        <div className="my-20">
            <Loader/>
        </div>
    )

    if (isError) return (
        <div className="flex w-full h-[200px] items-center justify-center">
            <p className="text-white text-3xl">Something went wrong with <span
                className="font-bold text-4xl">{title}</span></p>
        </div>
    );

    if (!data.results.length) return (<></>)

    return (
        <MovieSlider title={title} cat={cat} type={cat} itemsCount={data.results.length}>
            {data &&
                data.results.map((el: CommonType) => (
                    <MovieItem key={el.id} cat={cat} el={el} addToList={false}/>
                ))
            }
        </MovieSlider>
    );
};

export default WatchlistMovieList;