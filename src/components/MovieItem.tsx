import React from 'react';
import {VscTriangleRight} from 'react-icons/vsc'
import {Link} from "react-router-dom";
import {CommonType} from "../types/CommonType";
import {BsBookmarkPlus, BsBookmarkDash, BsPlus, BsDash} from 'react-icons/bs'
import {useMarkAsFavoriteMutation, useAddToWatchlistMutation, category} from "../store/services/watchTvService";
import Cookies from "universal-cookie";


interface MovieItemProps {
    cat: string;
    el: CommonType;
    addToList: boolean;
    showToastHandler: (content: string) => void;
    isToastVisible?: boolean
}


const MovieItem = ({cat, el, addToList, showToastHandler, isToastVisible = false}: MovieItemProps) => {

    const cookies = new Cookies()
    const sessionId = cookies.get('sessionId')

    const [markMovie, {}] = useMarkAsFavoriteMutation(sessionId)
    const [addToWatchlist, {}] = useAddToWatchlistMutation(sessionId)

    const favouriteContent = 'You have successfully marked this movie as your favorite ✅'
    const watchlistContent = 'You have successfully added this movie to your Watchlist ✅'

    const markAsFavoriteMovieHandler = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await markMovie({
            body: {
                media_type: category[cat],
                media_id: el.id,
                favorite: addToList
            },
            sessionId
        })
        if (isToastVisible) return;
        showToastHandler(favouriteContent)
    }

    const addToWatchlistHandler = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await addToWatchlist({
            body: {
            media_type: category[cat],
            media_id: el.id,
            watchlist: addToList
            },
            sessionId,
        })
        if (isToastVisible) return;
        showToastHandler(watchlistContent)
    }

    return (
        <Link className="" to={`/${cat}/${el.id}/`}>
            <div className="inline-block w-[250px] cursor-pointer align-top group">
                <div className="relative h-[350px] w-full">
                    <button onClick={markAsFavoriteMovieHandler} className={`absolute z-50 left-0 top-0 text-white text-4xl mt-1 ml-1
                    transition-colors duration-500 ease-in-out ${addToList ? 'hover:text-amber-600' : 'hover:text-red-600'} hover:scale-100`}>
                        {addToList ? <BsBookmarkPlus/> : <BsBookmarkDash/>}
                    </button>
                    <button onClick={addToWatchlistHandler} className={`absolute z-50 right-0 top-0 text-white text-5xl mr-1
                    transition-colors duration-500 ease-in-out ${addToList ? 'hover:text-amber-600' : 'hover:text-red-600'} hover:scale-100`}>
                        {addToList ? <BsPlus/> : <BsDash/>}
                    </button>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path || el.poster_path}`}
                        alt={el.title || el.name}
                        className="h-full w-full object-cover rounded-lg"/>
                    <div className="w-full h-full top-0 left-0 flex items-center
                justify-center absolute bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                        <button className="rounded-full scale-0 translate-[-50%_-50%] transition-transform duration-500 ease-in-out
                     group-hover:scale-100 bg-red-700 py-3 px-7">
                            <VscTriangleRight size={25} className="text-white"/>
                        </button>
                    </div>
                </div>
                <p className="text-white whitespace-normal font-bold transition-colors duration-500 ease-in-out group-hover:text-red-600">
                    {el.title || el.name}
                </p>
            </div>
        </Link>
    );
};

export default MovieItem;