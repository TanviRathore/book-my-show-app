import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.Context";
import MovieInfo from "./MovieInfo.Component";
import PaymentModal from "../PaymentModal/Payment.Component";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", "); //null collision operation

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div>
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="m-4 rounded"
            alt="cover poster"
            style={{
              width: "calc(100% - 2rem)",
            }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="text-black flex flex-col gap-2 md:px-4 px-4">
            <h4>4k ratings</h4>
            <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
            <h4>
              {movie.runtime} min • {genres}{" "}
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button onClick={rentMovie} className="bg-red-500 w-full py-2 md:py-3 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button onClick={buyMovie} className="bg-red-500 w-full py-2 md:py-3 text-white font-semibold rounded-lg">
              Buy ₹599
            </button>
          </div>
        </div>

        {/* laptop screen */}
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
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo movie={movie} />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="backdrop poster"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
