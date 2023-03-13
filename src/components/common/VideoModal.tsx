import React, {useEffect, useState} from 'react';
import {IoMdClose} from "react-icons/io";
import ReactPlayer from "react-player";

interface VideoModalProps {
    isVideoOpen: boolean;
    videoUrl: string;
    toggleVideoModal: () => void;
}

const VideoModal = ({isVideoOpen, videoUrl, toggleVideoModal} : VideoModalProps) => {

    const [shouldPauseVideo, setShouldPauseVideo] = useState(true);

    useEffect(() => {
        setShouldPauseVideo(!isVideoOpen)
    }, [isVideoOpen])

    return (
        <div
            className={`${isVideoOpen ? 'flex' : 'hidden'} 
                        ${isVideoOpen ? 'opacity-100 z-[1000]' : 'opacity-0 z-[-20]'} 
                        flex justify-center fixed h-screen w-screen top-0 bg-black/90`}
            onClick={() => {
                toggleVideoModal()
                setShouldPauseVideo(true)
            }}
        >
            <button
                onClick={toggleVideoModal}
                className="absolute right-0 mt-25 mr-25 scale-110 z-[1500] opacity-80 hover:opacity-100 hover:cursor-pointer"
            >
                <IoMdClose/>
            </button>
            <div className="ml-2 mr-2 flex items-center justify-center h-[100%]">
                <div className="rounded-2xl border-2 flex flex-col overflow-hidden">
                    <div onClick={e => {
                        e.stopPropagation()
                        setShouldPauseVideo(true)
                    }}
                         className="mt-5 h-0 min-w-[70vw] pb-[56.25%] relative">
                        <div className="absolute top-0 left-0 overflow-hidden w-[100%] h-[100%]">
                            <ReactPlayer
                                width='100%'
                                height='100%'
                                playing={!shouldPauseVideo}
                                onPlay={() => setShouldPauseVideo(false)}
                                onInterrupt={() => setShouldPauseVideo(true)}
                                url={`https://www.youtube.com/watch?v=6JnN1DmbqoU`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;