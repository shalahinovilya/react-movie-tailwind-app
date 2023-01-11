import React from 'react';
import NavBar from "../components/NavBar";
import {category, useGetDetailsQuery, useGetSimilarQuery} from "../store/services/watchTvService";
import {useParams} from "react-router-dom";
import DetailHeader from "../components/detail/DetailHeader";
import Footer from "../components/Footer";
import VideoList from "../components/detail/VideoList";
import MovieList from "../components/MovieList";
import MovieInfo from "../components/detail/MovieInfo";
import Error from "../components/detail/Error";
import LoadingFull from "../components/LoadingFull";


const Detail = () => {

    const {cat = category.movie, movieId = 1} = useParams()

    const {data, isLoading, isError} = useGetDetailsQuery({cat: cat, id: +movieId})

    if (isLoading) return (<LoadingFull/>)

    if (!data || isError) return (<Error/>)

    if (!data.overview && !data.original_title && !data.original_name) return (<></>);

    return (
        <>
            <NavBar/>
            <DetailHeader imgPath={data.backdrop_path || data.poster_path}/>
            <MovieInfo data={data} cat={cat} movieId={+movieId}/>
            <VideoList cat={cat} id={+movieId}/>
            <MovieList id={+movieId} cat={cat} type={'similar'} title={'Similar'} queryHook={useGetSimilarQuery}/>
            <Footer/>
        </>
    );
};

export default Detail;