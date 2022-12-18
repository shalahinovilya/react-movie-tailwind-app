import React, {useEffect, useMemo, useState} from 'react';
import {useGetMovieListQuery} from "../../store/services/watchTvService";

interface useGetDataProps {
    catalog: string;
    type: string;
}

const useGetPagesData = ({catalog, type}: useGetDataProps) => {

    let pageUpdating = false

    const [page, setPage] = useState(1)

    const {data: lastResult = {results: [], offset: 0}} = useGetMovieListQuery({
        cat: catalog,
        page: page - 1,
        type: type || 'popular'
    }, {skip: page === 1})
    const {
        data: currentResult = {results: [], offset: 0},
        isLoading: isLoadingCurrent,
        isError: isErrorCurrent
    } = useGetMovieListQuery({cat: catalog, page: page, type: type || 'popular'})
    const {data: nextResult = {results: [], offset: 0}} = useGetMovieListQuery({
        cat: catalog,
        page: page + 1,
        type: type || 'popular'
    })

    const combined = useMemo(() => {
        const arr = new Array(20 * (page + 1))
        for (const data of [lastResult, currentResult, nextResult]) {
            if (data?.results.length) {
                arr.splice(data.offset || 0, data.results.length, ...data.results)
            }
        }
        pageUpdating = false
        return arr
    }, [page, lastResult, currentResult, nextResult])

    const loadDataHandler = () => {
        setPage(prevState => prevState + 1)
        document.documentElement.scrollTop -= 1000
    }

    useEffect(() => {

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop
            if (scrollTop <= 250 && page > 1) {
                if (pageUpdating) return;
                pageUpdating = true
                document.documentElement.scrollTop += 1200
                setPage(prevState => prevState - 1)
            }
        }

        document.addEventListener("scroll", handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [page])

    return {
        data: combined,
        loadDataHandler,
        isLoadingCurrent,
        isErrorCurrent
    }
};

export default useGetPagesData;