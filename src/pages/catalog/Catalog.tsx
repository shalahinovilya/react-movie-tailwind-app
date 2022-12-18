import React from 'react';
import CatalogHeader from "../../components/CatalogHeader";
import NavBar from "../../components/NavBar";
import {useLocation, useParams} from "react-router-dom";
import {category} from "../../store/services/watchTvService";
import MovieGrid from "../../components/MovieGrid";
import LoadingFull from "../../components/LoadingFull";
import Error from "../../components/detail/Error";
import Footer from "../../components/Footer";
import useGetPagesData from "./useGetPagesData";

const Catalog = () => {

    const {catalog = ''} = useParams()
    const location = useLocation()

    const {
        data,
        loadDataHandler,
        isLoadingCurrent,
        isErrorCurrent
    } = useGetPagesData({catalog, type: location?.state?.type || ''})

    if (isLoadingCurrent) return (<LoadingFull/>)

    if (isErrorCurrent) return (<Error/>)

    return (
        <div>
            <NavBar/>
            <CatalogHeader title={catalog === category.movie ? 'Movies' : 'TV Series'}/>
            <MovieGrid cat={catalog || 'Movies'} data={data}/>
            <div className="text-center">
                <button
                    onClick={loadDataHandler}
                    className="text-white text-2xl hover:bg-white hover:text-black transition:color ease-in-out duration-500
                    mt-5 mb-10 ml-auto py-1 px-8 border rounded-full">
                    Load more
                </button>
            </div>
            <Footer/>
        </div>
    );
};

export default Catalog;