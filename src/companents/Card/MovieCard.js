import React from 'react';
import {Link} from "react-router-dom";



const MovieCard = ({el}) => {
    return (

        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-5 text-center flex justify-center" key={el.id}>
            <div
                className="sm:px-2 py-2  md:px-2 py-3 lg:px-3 py-4 xl:px-4 py-5 text-gray-100 bg-gray-900 px-4 py-4 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100 hover:scale-105 mx-3">

                <Link to={`/movie-details/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""
                         className="object-cover rounded-md"/>
                </Link>

                <span className="flex flex-col mt-3">
                        <h4 className="font-head font-medium pb-5 w-60 text-left">{el.title}</h4>
                    <div className="flex justify-between">
                        <p>{el.release_date}</p>
                        <div className="bg-gray-500 px-1.5 py-1.5 w-12  rounded-3xl">
                            <p className=" px-1.5 bg-gray-900 py-1 rounded-3xl">{el.vote_average}</p>
                        </div>
                    </div>

                    </span>
            </div>

        </div>

    );
};

export default MovieCard;