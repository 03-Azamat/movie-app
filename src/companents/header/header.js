import React, {useState} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import Logo from './../../images/Netflix.svg.png'




const Header = () => {
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
        <header className=" text-gray-100 bg-gray-900 body-font shadow w-full">

            <div
                className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center lg:items-center lg:justify-center mb-4 md: mb-0">

                <img src={Logo} alt="logo" className="w-5 "/>

                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <NavLink to="/" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Home</NavLink>
                    <NavLink to="/popular" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Popular</NavLink>
                    <NavLink to="/toprated" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">TopRated</NavLink>
                    <NavLink to="/upcoming" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">UpComing</NavLink>
                    {/*<NavLink to="/genres" className="nav-link mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600">Genres</NavLink>*/}

                </nav>

                <div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/4 xl:basis-1/4 ">
                    <input type="search" name="search" onChange={searchInput}
                           className="flex sm:w-96 md:w-64 lg:w-60 xl:w-56 text-black p-2 border-gray-900 rounded-lg"/>
                    <button
                        onClick={handleSearch}
                        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-md"
                    >search</button>
                </div>

            </div>



        </header>
    );
};

export default Header;