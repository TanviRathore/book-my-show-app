import React from "react";
import axios from "axios";

import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.Page";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Plays.Page.Component";

// importing CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlayPage} />
    </>
  );
}

export default App;
