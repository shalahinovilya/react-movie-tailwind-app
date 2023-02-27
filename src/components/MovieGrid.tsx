import React from 'react';
import MovieItem from "./MovieItem";
import {CommonType} from "../types/CommonType";
import {useMovieToast} from "../contexts/MovieToastContext";

interface MovieGridProps {
    cat: string;
    data: CommonType[] | [];
}

export function createUUID() {
    return `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`
}

const MovieGrid = ({data, cat}: MovieGridProps) => {

    const {visible, showToastHandler} = useMovieToast()

    return (
        <div className="relative flex justify-center my-10 w-full">
            <hr className="absolute top-0 left-0 w-full opacity-0 z-50"/>
            <div className="w-[95%] grid grid-cols-movies gap-x-1 gap-y-2">
                {data.map((el: CommonType) => (
                    <MovieItem
                        key={createUUID()}
                        cat={cat}
                        el={el}
                        addToList={true}
                        showToastHandler={showToastHandler}
                        isToastVisible={visible}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieGrid;