import React from 'react';
import {useGetVideosQuery} from "../../store/services/watchTvService";
import {MovieVideo} from "../../types/MovieVideo";
import VideoItem from "./VideoItem";
import Loader from "../Loader";

interface VideoListProps {
    cat: string;
    id: number;
}

const VideoList = ({cat, id}: VideoListProps) => {

    const {data, isLoading, isError} = useGetVideosQuery({cat: cat, id: id})

    if (isLoading) return (
        <div className="my-20">
            <Loader/>
        </div>
    )

    if (!data || !isError) return (<></>)

    return (
        <div className="flex flex-col w-[1500px] mx-auto gap-y-20 mb-10">
            {
                data.results.slice(0, 5).map((el: MovieVideo) => (
                    <VideoItem key={el.id} el={el}/>
                ))
            }
        </div>
    );
};

export default VideoList;