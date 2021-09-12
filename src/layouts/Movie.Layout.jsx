import React, {useEffect, useContext} from "react";
import axios from "axios";
import { useParams } from "react-router";
import MovieNav from "../components/Navbar/MovieNav.Component";
import {MovieContext} from "../context/Movie.Context"

const MovieLayout = (props) => {
    const {id} = useParams();
    const { movie, setMovie} = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovie = await axios.get(`/movie/${id}`);
            setMovie(getMovie.data);
        };
        requestMovie();
    },[id]);

    return(
        <div>
            <MovieNav />
            {props.children}
            <h1>Footer</h1>
        </div>
    );
};

export default MovieLayout;