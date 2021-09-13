import React, { useContext, useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import axios from "axios";
import { MovieContext } from "../context/Movie.Context";
import { useParams } from "react-router";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const MoviePage = () => {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };

    requestCast();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  const settingsCast = {
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };

  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-xl md:text-2xl text-gray-800 font-bold">About the Movie</h3>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold md:text-2xl mb-3 text-xl ">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-2 items-start lg:flex-row">
            <div className="flex border-yellow-400 border-dashed border-2 rounded-md items-start gap-2 bg-yellow-100 p-3">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-lg font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-lg font-bold ">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h3 className="md:text-2xl text-lg font-bold mb-4 text-gray-800">
            Cast and Crew
          </h3>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8 px-3">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={similarMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE !!"
            posters={recommended}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
