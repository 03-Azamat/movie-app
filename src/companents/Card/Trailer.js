import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";


const Trailer = ({id}) => {

    const [trailer,setTrailer] = useState([])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {

        },
    };


    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=ru-RU`)
            .then(({data})=>setTrailer(data.results))
    },[])
    console.log(trailer)

    return (
        <div className="container bg-gray-800 mx-auto flex flex-wrap justify-center p-10 flex-col md:flex-row items-center mx-auto">
            {
                trailer.slice(0,4).map(el=>(
                    <div className="basis-1/4 sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 m-5 text-center flex justify-center">
                        <YouTube videoId={el.key} opts={opts} className=" w-full sm:w-56 sm:h-full md: w-72 md:h-full lg:w-80 lg:h-full"/>
                    </div>
                ))
            }
        </div>
    );
};

export default Trailer;