import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {ApiKey} from "../ApiKey/ApiKey";
import Slider from "react-slick";


const PersonDetails = () => {

    const params = useParams()
    const [person,setPerson] = useState([])
    const [knowFilms,setKnowFilms] = useState([])


    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/person/${params.personId}?api_key=${ApiKey}&language=en-US`)
            .then(({data})=>setPerson(data))
        axios(`https://api.themoviedb.org/3/person/${params.personId}/movie_credits?api_key=${ApiKey}&language=en-US`)
            .then(({data})=>setKnowFilms(data.cast))
    },[])
    console.log(person)
    console.log(params,"person")
    console.log(knowFilms)

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-row mt-9 pb-20">
                <div className="basis-1/4">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt="" className="rounded-md"/>
                </div>
                <div className="basis-1/2 text-left">
                    <h1 className="text-4xl font-bold pb-5 ">{person.name}</h1>
                    <p className="text-xl pb-5">{person.birthday}</p>
                    <p className="text-xl pb-10">Biography</p>
                    <p className="text-base">{person.biography}</p>
                </div>
            </div>

            <p className="text-xl font-medium w-36 text-black text-2xl pb-7">Fame for</p>

            <Slider {...settings}>
                {
                    knowFilms.map(el => (
                        <div className="border-gray-900 pb-20">
                            <div
                                className="mx-3.5 w-36 rounded-md pt-0.5">

                                <Link to={`/movie-details/${el.id}`} className="">
                                    <img src={el.poster_path ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`:
                                    "https://www.themoviedb.org/t/p/w150_and_h225_bestv2/qIUFg6tzKeK5bUDguonWCAFceNB.jpg"} alt="" className="rounded-md"/>
                                </Link>

                                <p className="text-black ">{el.original_title}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default PersonDetails;