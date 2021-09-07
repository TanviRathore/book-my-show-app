import React from "react";
import MovieLayout from "../layouts/Movie.Layout";
import { Route } from "react-router";

const MovieHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route {...rest} component={(props)=>(
                    <MovieLayout {...props}>   
                        <Component {...props}/>
                    </MovieLayout>
                )}
            />
        </>
    );
};

export default MovieHOC;