import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import App from "./../../images/App.png"
import Google from "./../../images/App.png"
import Logo from "../../images/Netflix.svg.png";

const Footer = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const searchInput = (e) =>{
        setSearch(e.target.value)
    }
    const handleSearch = () =>{
        if (search.trim()){
            navigate(`/search-results/${search}`)
        }
    }

    return (
        <footer className="bg-gray-900 py-12 text-center">
            <div className="container mx-auto px-6 pt-6">

                    <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                        <div className="md:ml-auto md:mb-6">
                            <nav className="text-white">
                                <NavLink to="/" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Home</NavLink>
                                <NavLink to="/popular" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Popular</NavLink>
                                <NavLink to="/toprated" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">TopRated</NavLink>
                                <NavLink to="/upcoming" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">UpComing</NavLink>
                            </nav>
                        </div>

                        <div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/4 xl:basis-1/4">
                            <input type="search" name="search" onChange={searchInput}
                                   className="flex sm:w-96 md:w-64 lg:w-60 xl:w-56 text-black p-2 border-gray-900 rounded-lg"/>
                            <button
                                onClick={handleSearch}
                                className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-md"
                            >search</button>
                        </div>

                    </div>

            </div>

        </footer>
    );
};

export default Footer;