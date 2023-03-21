import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface SliderProps {
    children: React.ReactNode,
    title: string;
    cat: string;
    type: string;
    itemsCount: number
}

const MovieSlider = ({children, title, cat, type, itemsCount} : SliderProps) => {

    const sliderRef = useRef<HTMLDivElement | null>(null)

    const sliderLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft -= 250
    }

    const sliderRight = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft += 250
    }

    return (
        <div className="my-10">
            <div className="m-3 flex items-center justify-between text-white">
                <h2 className="text-2xl capitalize">{title}</h2>
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
                    onClick={sliderLeft}
                    className="hidden bg-white rounded-full p-2 opacity-50 z-10 hover:opacity-100 absolute cursor-pointer group-hover/list:block"/>
                <div
                    id="slider"
                    ref={sliderRef}
                    className={`${itemsCount < 5 && 'flex justify-center'} w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-2 space-x-2`}>
                    {
                        children
                    }
                </div>
                <FaChevronRight
                    size={40}
                    onClick={sliderRight}
                    className="hidden bg-white rounded-full p-2 opacity-50 z-10 hover:opacity-100 absolute right-0 cursor-pointer group-hover/list:block"/>
            </div>
        </div>
    );
};

export default MovieSlider;