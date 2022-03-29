
import './App.css';
import Header from "./companents/header/header";
import './companents/header/header.css'
import {Routes, Route, } from "react-router-dom";
import Home from "./companents/home/home";
import Popular from "./companents/popular/popular";
import TopRated from "./companents/topRated/topRated";
import UpComing from "./companents/upComing/upComing";
import MovieDetails from "./companents/MovieDateils/movieDetails";
import PersonDetails from "./companents/PersonDetails/personDetails";
import SearchResult from "./companents/SearchResult/SearchResult";
import Footer from "./companents/footer/footer";





function App() {


  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/popular" element={ <Popular/>} />
            <Route path="/toprated" element={ <TopRated/>} />
            <Route path="/upcoming" element={ <UpComing/>} />
            <Route path="/movie-details/:id" element={ <MovieDetails/>} />
            <Route path="/movie-details/person-details/:personId" element={ <PersonDetails/>} />
            <Route path="/search-results/:search" element={ <SearchResult/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
