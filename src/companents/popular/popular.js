import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import MovieCard from "../Card/MovieCard";
import Netflix from "./../../images/Netflix.jpg"

const Popular = () => {

    const [popular, setPopular] = useState([])

    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    const showPage = (newPage) => {
        try {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=${newPage || 1}`)

                .then(({data}) => {
                    setPages(data.total_pages)
                    console.log(data)
                    setPopular(data.results)
                })

            window.scrollTo(0, 0)
            setCurrentPage(newPage);
        } catch (e) {
            console.log(e)
        }
    }

    const [postPerPage] = useState(20);

    useEffect(() => {
        showPage()

    }, []);

    const totalPosts = pages;
    console.log(totalPosts)


    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

    return (
        <div className="" style={{
            background: `url(${Netflix})no-repeat center/cover fixed`,
            width: "100%",
        }}>
            <div className=" container mx-auto p-10 flex-col md:flex-row items-center mx-auto ">
                <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-white py-5 font-bold">Top rated movies</h1>

                <div className="flex flex-row flex-wrap ">
                    {
                        popular.map(el => (
                            <MovieCard el={el} key={el.id}/>
                        ))
                    }
                </div>


                <div className="pagination flex flex-wrap list-none">
                    {pageNumbers.slice(0,20).map((page) => (

                        <li key={page}>
                            <button
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                style={{
                                    backgroundColor: page === currentPage ? "red" : "gray",
                                    color: "white",
                                    margin: "5px",
                                }}
                                onClick={() => showPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        </div>


    );

};

export default Popular;