import React from "react";
import MovieNav from "../components/Navbar/MovieNav.Component";

const MovieLayout = (props) => {
    return(
        <div>
            <MovieNav />
            {props.children}
            <h1>Footer</h1>
        </div>
    );
};

export default MovieLayout;