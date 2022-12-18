import React, {useRef} from 'react';
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import MovieItem from "./MovieItem";
import {CommonType} from "../types/CommonType";
import Loader from "./Loader";
import {Link} from "react-router-dom";

interface MovieListProps {
    id: number;
    cat: string;
    type: string;
    title: string;
    queryHook: UseQuery<QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, any, "watchTvApi">>;
}

const MovieList = ({id, cat, type, title, queryHook}: MovieListProps) => {

    const {data = [], isLoading, isError} = type === 'similar' ? queryHook({cat, page: 1, id}) : queryHook({
        cat,
        page: 1,
        type
    })

    const sliderRef = useRef<HTMLDivElement | null>(null)

    if (isLoading) return (
        <div className="my-20">
            <Loader/>
        </div>
    )

    if (isError || !data) return (
        <div className="flex w-full h-[200px] items-center justify-center">
            <p className="text-white text-3xl">Something went wrong with <span
                className="font-bold text-4xl">{title}</span></p>
        </div>
    );

    const sliderLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft += 250
    }

    const sliderRight = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft -= 250
    }

    return (
        <div className="my-10">
            <div className="m-3 flex items-center justify-between text-white">
                <h2 className="text-2xl">{title}</h2>
                <Link
                    to={`/${cat}/`} state={{cat: cat, type: type}}>
                    <button
                        className="text-2xl hover:bg-white hover:text-black transition:color
                         ease-in-out duration-500 border rounded-full px-6 py-1">
                        View more
                    </button>
                </Link>
            </div>
            <div className="relative flex items-center group/list">
                <FaChevronLeft
                    size={40}
                    onClick={sliderRight}
                    className="hidden bg-white rounded-full p-2 opacity-50 z-10 hover:opacity-100 absolute cursor-pointer group-hover/list:block"/>
                <div
                    id="slider"
                    ref={sliderRef}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-2 space-x-2">
                    {data &&
                        data.results.map((el: CommonType) => (
                            <MovieItem key={el.id} cat={cat} el={el}/>
                        ))
                    }
                </div>
                <FaChevronRight
                    size={40}
                    onClick={sliderLeft}
                    className="hidden bg-white rounded-full p-2 opacity-50 z-10 hover:opacity-100 absolute right-0 cursor-pointer group-hover/list:block"/>
            </div>
        </div>
    );
};

export default MovieList;