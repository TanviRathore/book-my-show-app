import React from "react";

const Cast = (props) => {
    return(
        <div>
            <div className="flex flex-col items-center">
                <div className="h-20 w-20 md:h-32 md:w-32">
                    <img 
                    src={`https://image.tmdb.org/t/p/original${props.image}`}
                    alt="cast and crew"
                    className='w-full h-full object-center object-cover rounded-full'
                    />
                </div>
                <h1 className="md:text-xl text-sm text-gray-800">{props.castName}</h1>
                <h5 className="text-sm text-gray-500">as {props.role}</h5>
            </div>
        </div>
    );
};

export default Cast;