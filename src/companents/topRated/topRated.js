import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import MovieCard from "../Card/MovieCard";
import Netflix from "../../images/Netflix.jpg";


const TopRated = () => {

    const [topRated, setTopRated] = useState([])

    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];


    const showPage = (newPage) => {
        try {
            axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=${newPage || 1}`)

                .then(({data}) => {
                    setPages(data.total_pages)
                    console.log(data)
                    setTopRated(data.results)
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
        <div className="bg-gray-800">
            <div className="" style={{
                background: `url(${Netflix})no-repeat center/cover fixed`,
                width: "100%",
            }}>
                <h1 className="text-3xl w-full text-white py-5 font-bold">Top rated movies</h1>

                <div className="flex flex-row flex-wrap ">
                    {
                        topRated.map(el => (
                            <MovieCard el={el} key={el.id}/>
                        ))
                    }
                </div>


                <div className="pagination flex flex-wrap list-none">
                    {pageNumbers.map((page) => (

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

export default TopRated;