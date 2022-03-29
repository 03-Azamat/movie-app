import React, {useEffect, useState} from 'react';
import MovieCardHome from "../Card/MovieCardHome";
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";




const Home = () => {
    const [home, setHome] = useState([])

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)

            .then(({data}) => setHome(data.results))
    })



    return (
        <div className="">
                {
                    home.slice(0,1).map(el => (
                        <MovieCardHome el={el} key={el.id}/>
                    ))
                }
        </div>


    );

};

export default Home;