import React, { useState } from "react";

const MovieHero = () => {
  const [movie] = useState({
    id: "asfasdf",
    original_title: "Fast and Furious 9",
    overview:
      "2h 23m • Action , Adventure , Crime , Thriller • UA • 2 Sep, 2021",
    backdrop_path:
      "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    poster_path:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
  });

  return (
    <>
      <div>
        <div className="lg:hidden w-full">
          <img
            src={movie.backdrop_path}
            className="m-4 rounded"
            alt="cover poster"
            style={{
              width: "calc(100% - 2rem)",
            }}
          />
        </div>
        <div
          className="hidden lg:block w-full relative"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          ></div>
          <div className="absolute z-30 left-24 top-10 gap-10 flex items-center">
            <div className="w-64 h-96">
              <img
                src={movie.poster_path}
                alt="poster"
                className="w-full h-full rounded-xl"
              />
              {/* <div>
                <MovieInfo movie={movie} />
              </div> */}
            </div>
          </div>
          <img
          src={movie.backdrop_path}
          alt="cover"
          className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
