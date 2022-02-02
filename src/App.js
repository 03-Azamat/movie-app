
import './App.css';
import Header from "./companents/header/header";
import './companents/header/header.css'
import {Routes,Route} from "react-router-dom";
import Home from "./companents/home/home";
import Popular from "./companents/popular/popular";
import TopRated from "./companents/topRated/topRated";
import UpComing from "./companents/upComing/upComing";
import Latest from "./companents/Latest/latest";
import MovieDetails from "./companents/MovieDateils/movieDetails";


function App() {
  return (
    <div className="App">

      <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/popular" element={<Popular/>} />
            <Route path="/toprated" element={<TopRated/>} />
            <Route path="/upcoming" element={<UpComing/>} />
            <Route path="/latest" element={<Latest/>} />
            <Route path="/:id" element={<MovieDetails/>} />
        </Routes>

    </div>
  );
}

export default App;
