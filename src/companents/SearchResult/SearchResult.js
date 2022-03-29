import React, {useEffect,useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {ApiKey} from "../ApiKey/ApiKey";
import MovieCard from "../Card/MovieCard";

const SearchResult = () => {
    const {search} = useParams()
    const [result , setResult] = useState([])


    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}`)
            .then(({data})=> setResult(data.results))
    },[search])
    console.log(result)

    return (
            <div className="bg-gray-800">
                <div className=" container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center mx-auto ">
                    <h1 className="text-3xl w-full text-white py-5">Results...</h1>

                    <div className="flex flex-row flex-wrap ">
                        {
                            result.map(el => (
                                <MovieCard el={el} key={el.id}/>
                            ))
                        }
                    </div>

                </div>
            </div>




    );
};

export default SearchResult;