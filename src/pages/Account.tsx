import React from 'react';
import AccountHeader from "../components/account/AccountHeader";
import {accountMovieCategory, accountMovieType, useGetAccountQuery} from "../store/services/watchTvService";
import AccountInfo from "../components/account/AccountInfo";
import FavoriteMovieList from "../components/account/FavoriteMovieList";
import WatchlistMovieList from "../components/account/WatchlistMovieList";


const Account = () => {

    const {data = [], isLoading, isError} = useGetAccountQuery({})

    return (
        <div>
            <AccountHeader/>
            <AccountInfo accountInfo={data}/>
            <FavoriteMovieList cat={accountMovieCategory.movies} type={accountMovieType.favorite} title={accountMovieType.favorite}/>
            <WatchlistMovieList cat={accountMovieCategory.movies} type={accountMovieType.watchlist} title={accountMovieType.watchlist}/>
        </div>
    );
};

export default Account;