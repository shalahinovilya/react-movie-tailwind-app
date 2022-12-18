import React from 'react';
import {useGetCreditsQuery} from "../../store/services/watchTvService";
import {Cast} from "../../types/Cast";

interface CastListProps {
    cat: string;
    movieId: number;
}

const CastList = ({cat, movieId}: CastListProps) => {

    const {data, isLoading, isError} = useGetCreditsQuery({cat: cat, id: movieId})

    if (isLoading) return (<div>Loading...</div>)

    if (!data || isError) return (<></>);

    return (
        <div className="grid grid-cols-casts gap-x-8 gap-y-7">
            {
                data.crew.slice(0, 5).map((el: Cast, index: number) => (
                    <div key={index} className="w-max-[130px]">
                        <div className="w-full h-[200px]">
                            <img
                                className="h-full w-full object-cover"
                                src={el.profile_path ? `https://image.tmdb.org/t/p/original${el.profile_path}` : '/images/profile.png'}
                                alt={el.character}/>
                        </div>
                        <p className="text-white text-1xl">{el.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CastList;