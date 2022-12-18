import React, {useEffect, useRef} from 'react';
import {MovieVideo} from "../../types/MovieVideo";

interface VideoItemProps {
    el: MovieVideo;
}

const VideoItem = ({el}: VideoItemProps) => {

    const iframeRef = useRef<HTMLIFrameElement | null>(null)

    useEffect(() => {
        const height = iframeRef.current ? iframeRef.current.offsetWidth * 9 / 16 + 'px' : 0;
        iframeRef.current?.setAttribute('height', height || '800px')
    })

    return (
        <div>
            <p className="text-white text-2xl">
                {el.name}
            </p>
            <iframe
                ref={iframeRef}
                className="w-full"
                src={`https://www.youtube.com/embed/${el.key}`}
                title={el.name}
            >
            </iframe>
        </div>
    );
};

export default VideoItem;