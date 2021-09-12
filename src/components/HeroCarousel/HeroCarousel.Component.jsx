import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";
import axios from "axios";

const HeroCarousel = () => {

    const [images, setImages] = useState([

    ]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };

        requestNowPlayingMovies();
    }, []);

    const settings = {
        className: "center",
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settingsLG = {
        className: "center",
        dots: true,
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className=" lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3" >
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Carousel Banner"
                                className="w-full h-full rounded-md object-center "
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="w-full mx-auto hidden lg:block" >
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Carousel Banner"
                                className="w-full h-full rounded-md object-center"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );

}

export default HeroCarousel;