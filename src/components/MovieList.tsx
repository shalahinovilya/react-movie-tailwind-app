import React from 'react';
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";
import MovieItem from "./MovieItem";
import {CommonType} from "../types/CommonType";
import Loader from "./Loader";
import MovieSlider from "./common/MovieSlider";
import {useMovieToast} from "../contexts/MovieToastContext";

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

    const {visible, showToastHandler} = useMovieToast()

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
        <>
            <MovieSlider title={title} cat={cat} type={type} itemsCount={data.results.length}>
                {data &&
                    data.results.map((el: CommonType) => (
                        <MovieItem
                            showToastHandler={showToastHandler}
                            isToastVisible={visible}
                            key={el.id}
                            cat={cat}
                            el={el}
                            addToList={true}
                        />
                    ))
                }
            </MovieSlider>
        </>
    );
};

export default MovieList;