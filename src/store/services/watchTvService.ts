import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CommonType} from "../../types/CommonType";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const category: { [key: string]: string, movie: string, tv: string } = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType: { [key: string]: string, top_rated: string, popular: string, upcoming: string } = {
    top_rated: 'top_rated',
    popular: 'popular',
    upcoming: 'upcoming'
}

interface MovieListResponse {
    page: number;
    results: CommonType[];
    offset?: number;
}

interface MovieListProps {
    cat: string;
    type: string;
    page: number;
    id?: number;
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
} = watchTvApi