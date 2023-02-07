import React, {useEffect, useState} from 'react';
import {category, useGetMovieListQuery} from "../store/services/watchTvService";
import Loader from "./Loader";
import VideoModal from "./common/VideoModal";
import {CommonType} from "../types/CommonType";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)

const Main = () => {

    const [showModal, setShowModal] = useState(false)
    const [currentItem, setCurrentItem] = useState<CommonType>()
    const handleShowModal = () => setShowModal(!showModal)

    const {data = {results: []}, isLoading, isError} = useGetMovieListQuery({
        cat: category.movie,
        page: 1,
        type: 'popular'
    }, )

    useEffect(() => {
        if (!data) return;
        setCurrentItem(data.results[random(0, data.results?.length || 20)]);
    }, [data]);


    let item

    if (isLoading) return (
        <Loader/>
    )

    if (!data || isError || !currentItem) {
        return <div className="h-40"></div>
    }

    return (
        <>
            <VideoModal isVideoOpen={showModal} videoUrl={''} toggleVideoModal={handleShowModal}/>
            <div className="h-[700px] w-full relative bg-amber-50">
                <div className="h-full w-full absolute bg-gradient-to-b from-black"></div>
                <img
                    className="h-full w-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${currentItem.backdrop_path}`}
                    alt={currentItem.backdrop_path}/>
                <div className="absolute top-[25%] p-4">
                    <h1 className="text-white text-5xl font-bold">
                        {currentItem.original_title}
                    </h1>
                    <div className="mt-7">
                        <button
                            onClick={handleShowModal}
                            className="border text-black text-3xl px-5 py-2 mr-4 mb-4 bg-gray-300">
                            Play
                        </button>
                        <button className="border text-white text-3xl px-5 py-2 border-white hover:bg-gray-300
                            hover:text-black transition-colors duration-500 ease-in-out">
                            Watch Later
                        </button>
                    </div>
                    <time className="text-gray-300 text-1xl">
                        {currentItem.release_date}
                    </time>
                    <p className="w-full text-white text-2xl md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]">
                        {currentItem.overview}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Main;