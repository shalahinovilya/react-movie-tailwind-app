import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CommonType} from "../../types/CommonType";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY
const ACCOUNT_ID = process.env.REACT_APP_ACCOUNT_ID

export const category: { [key: string]: string, movie: string, tv: string } = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType: { [key: string]: string, top_rated: string, popular: string, upcoming: string } = {
    top_rated: 'top_rated',
    popular: 'popular',
    upcoming: 'upcoming'
}

export const accountMovieCategory: { [key: string]: string, movies: string, tv: string } = {
    movies: 'movies',
    tv: 'tv'
}

export const  accountMovieType: { [key: string]: string, watchlist: string, favorite: string} = {
    favorite: 'favorite',
    watchlist: 'watchlist',
}

export interface MovieListResponse {
    page: number;
    results: CommonType[];
    offset?: number;
}

export interface MovieListProps {
    cat: string;
    type: string;
    page: number;
    id?: number;
}

export interface AccountMovieListProps {
    cat: string;
    type: string;
    sessionId: string;
}

export interface MarkFavoriteProps {
    body : {
        media_type: string;
        media_id: number;
        favorite: boolean;
    },
    sessionId: string;
}

export interface addToWatchlistProps {
    body : {
        media_type: string;
        media_id: number;
        watchlist: boolean;
    }
    sessionId: string;
}

interface MovieInfoProps {
    cat: string;
    id: number;
}

export const watchTvApi = createApi({
    reducerPath: 'watchTvApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        getMovieList: build.query({
            query: ({cat, type, page}: MovieListProps) => `${cat}/${movieType[type]}?page=${page}&api_key=${API_KEY}`,
            transformResponse: (response: MovieListResponse) => {
                response.offset = (response.page - 1) * response.results.length
                return response
            }
        }),
        getRecommendations: build.query({
            query: ({cat, id}: MovieInfoProps) => `${category[cat]}/${id}/recommendations?api_key=${API_KEY}`
        }),
        getSimilar: build.query({
            query: ({cat, id, page}: MovieListProps) => `${category[cat]}/${id}/similar?page=${page}&api_key=${API_KEY}`
        }),
        getDetails: build.query({
            query: ({cat, id}: MovieInfoProps) => `${category[cat]}/${id}?api_key=${API_KEY}`
        }),
        getCredits: build.query({
            query: ({cat, id}: MovieInfoProps) => `${category[cat]}/${id}/credits?api_key=${API_KEY}`
        }),
        getKeywordsMovie: build.query({
            query: ({cat, id}: MovieInfoProps) => `${category[cat]}/${id}/keywords?api_key=${API_KEY}`
        }),
        getVideos: build.query({
            query: ({cat, id}: MovieInfoProps) => `${category[cat]}/${id}/videos?api_key=${API_KEY}`
        }),
        getAccount: build.query({
            query: (sessionId) => `account/videos?api_key=${API_KEY}&session_id=${sessionId}`
        }),
        markAsFavorite: build.mutation({
            query: ({body, sessionId}: MarkFavoriteProps) => ({
                url: `account/${ACCOUNT_ID}/favorite`,
                method: 'POST',
                params: {api_key: API_KEY, session_id: sessionId},
                body: body
            })
        }),
        addToWatchlist: build.mutation({
            query: ({body, sessionId} : addToWatchlistProps) => ({
                url: `account/${ACCOUNT_ID}/watchlist`,
                method: 'POST',
                params: {api_key: API_KEY, session_id: sessionId},
                body: body
            })
        }),
        getWatchlistMovies:  build.query({
            query: ({cat, type, sessionId}: AccountMovieListProps) =>
                `account/${ACCOUNT_ID}/${accountMovieType[type]}/${accountMovieCategory[cat]}?api_key=${API_KEY}&session_id=${sessionId}`
        }),
        getFavoriteMovies:  build.query({
            query: ({cat, type, sessionId}: AccountMovieListProps) =>
                `account/${ACCOUNT_ID}/${accountMovieType[type]}/${accountMovieCategory[cat]}?api_key=${API_KEY}&session_id=${sessionId}`
        }),
    })
})

export const {
    useGetMovieListQuery,
    useGetRecommendationsQuery,
    useGetSimilarQuery,
    useGetDetailsQuery,
    useGetCreditsQuery,
    useGetKeywordsMovieQuery,
    useGetVideosQuery,
    useGetAccountQuery,
    useMarkAsFavoriteMutation,
    useAddToWatchlistMutation,
    useGetFavoriteMoviesQuery,
    useGetWatchlistMoviesQuery
} = watchTvApi