import React from 'react';
import {Link} from "react-router-dom";
import {category} from "../store/services/watchTvService";

const CategorySelect = () => {
    return (
        <div className="flex justify-center items-center text-white font-bold text-3xl my-10">
            <Link className="border-black border-2 hover:border-b-white mr-16" to={`/`}>
                <button>Home</button>
            </Link>
            <Link state={{type: 'popular'}} className="border-black border-2 hover:border-b-white mr-16"
                  to={`/${category.movie}`}>
                <button>Movie</button>
            </Link>
            <Link state={{type: 'popular'}} className="border-black border-2 hover:border-b-white mr-16"
                  to={`/${category.tv}`}>
                <button>TV</button>
            </Link>
        </div>
    );
};

export default CategorySelect;