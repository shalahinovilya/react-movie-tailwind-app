import React from 'react';
import AccountHeader from "../components/account/AccountHeader";
import {accountMovieCategory, accountMovieType, useGetAccountQuery} from "../store/services/watchTvService";
import AccountInfo from "../components/account/AccountInfo";
import FavoriteMovieList from "../components/account/FavoriteMovieList";
import WatchlistMovieList from "../components/account/WatchlistMovieList";
import Layout from "../components/common/Layout";
import Cookies from "universal-cookie";


const Account = () => {

    const cookies = new Cookies()
    const sessionId = cookies.get('sessionId')

    const {data = [], isLoading, isError} = useGetAccountQuery(sessionId)

    return (
        <Layout>
            <AccountHeader/>
            <AccountInfo accountInfo={data}/>
            <FavoriteMovieList cat={accountMovieCategory.movies} type={accountMovieType.favorite} title={accountMovieType.favorite}/>
            <WatchlistMovieList cat={accountMovieCategory.movies} type={accountMovieType.watchlist} title={accountMovieType.watchlist}/>
        </Layout>
    );
};

export default Account;