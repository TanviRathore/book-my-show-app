import React from "react";

const MovieInfo = ({movie}) => {

    const genres = movie.genres?.map(({name})=>name).join(", ");

    return (
        <>
            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">
                    {movie.original_title}
                </h1>
                <div className="flex flex-col text-white gap-5">
                    <h4>4K ratings</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                    <h4>
                        {movie.runtime} min • {genres}{" "}
                    </h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button className="bg-red-500 w-full py-3 rounded-lg text-white">
                        Rent ₹149
                    </button>
                    <button className="bg-red-500 w-full py-3 rounded-lg text-white">
                        Buy ₹599
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;