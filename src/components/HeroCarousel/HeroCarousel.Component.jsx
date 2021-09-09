import React, {useState} from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {

    const [images, setImages] = useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630608713679_matrixfightnight6_webshowcase_1240x300.jpg",
    ]);

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
                                src={image}
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
                                src={image}
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