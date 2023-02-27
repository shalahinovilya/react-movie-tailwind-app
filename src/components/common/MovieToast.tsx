import React from 'react';

interface MovieToastProps {
    show: boolean;
    content: string;
    visible: boolean;
    visibleHandler: () => void;
}

const MovieToast = ({show, content, visible, visibleHandler} : MovieToastProps) => {

    const handleTransition = (e: React.TransitionEvent) => {
        const target = e.target as HTMLDivElement
        const opacity = window.getComputedStyle(target).getPropertyValue('opacity')
        if (opacity === '0') {
            visibleHandler()
        }
    }

    return (
        <div onTransitionEnd={handleTransition} className={`${show ? 'opacity-100' : 'opacity-0'} ${visible ? 'flex text-fuchsia-300' : 'hidden'} 
        fixed left-[50%] top-1/2 bg-black/75 shadow-black shadow-2xl rounded-2xl -translate-x-[50%] text-center font-bold z-[999] transition-all duration-500 ease-in-out animate-slideIn
         justify-center items-center p-2 text-white text-3xl`}>
            {content}
        </div>
    );
};

export default MovieToast;