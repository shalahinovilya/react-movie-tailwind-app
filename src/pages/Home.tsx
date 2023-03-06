import React from 'react';
import MovieList from "../components/MovieList";
import {category, useGetMovieListQuery} from "../store/services/watchTvService";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import CategorySelect from "../components/CategorySelect";
import Layout from "../components/common/Layout";


const Home = () => {
    return (
        <Layout>
            <Main/>
            <CategorySelect/>
            <MovieList
                id={1}
                cat={category.movie}
                type={'popular'}
                title={'Popular'}
                queryHook={useGetMovieListQuery}/>
            <MovieList
                id={1}
                cat={category.movie}
                type={'top_rated'}
                title={'Top Rated'}
                queryHook={useGetMovieListQuery}/>
            <MovieList
                id={1}
                cat={category.movie}
                type={'upcoming'} title={'Upcoming'}
                queryHook={useGetMovieListQuery}/>
        </Layout>
    );
};

export default Home;