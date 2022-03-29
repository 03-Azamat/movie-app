import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Netflix from "../../images/Netflix.jpg";

const MovieCardHome = ({el}) => {
    const [cardHome, setCardHome] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
            .then(({data}) => setCardHome(data.results))
    }, [])
    console.log(cardHome)


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        timeout: 500

    };

    return (

        <div className=""
             style={{
                 background: `url(${Netflix})no-repeat center/cover`,
                 width: "100%",
             }}>
            <div className="container mx-auto text-center">
                <h1 className="text-3xl w-full text-white py-1 font-bold">Home movies</h1>

                <Slider {...settings}>
                    {
                        cardHome.map(el => (
                            <div className="container mx-auto">
                                <div className="my-5 text-center flex justify-center" key={el.id}>
                                    <div
                                        className="bg-gray-900  w-8/12  shadow-black bg-black-500 shadow-lg shadow-black-500/100">

                                        <Link to={`/movie-details/${el.id}`}>
                                            <div className="object-cover bg-gray-900 w-9/12"
                                                 style={{
                                                     background: `url("https://image.tmdb.org/t/p/original${el.backdrop_path}")no-repeat center/cover`,
                                                     width: "100%",
                                                     minHeight: "60vh"
                                                 }}/>
                                        </Link>
                                        <span className="flex flex-col mt-3 text-white pb-5 px-5 ">
                                                <h4 className="font-head font-medium pb-5 text-2xl text-left ">{el.title}</h4>

                                                    <div className="flex justify-between">
                                                                <p>{el.release_date}</p>
                                                                        <div
                                                                            className="bg-gray-500 px-1.5 py-1.5 w-12  rounded-3xl">
                                                                                        <p className=" px-1.5 bg-gray-900 py-1 rounded-3xl">{el.vote_average}</p>
                                                                        </div>
                                                    </div>

                                        </span>

                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>

        </div>


    );
};

export default MovieCardHome;