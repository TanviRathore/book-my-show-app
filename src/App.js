import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.Page";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./pages/Movie.Page";

// importing CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
