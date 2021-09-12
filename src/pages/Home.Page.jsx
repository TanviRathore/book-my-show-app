import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]); 
  const [premierMovies,  setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  },[]);

  useEffect(() => {
    const requestPremierMovies = async () => {
      const getPremierMovies = await axios.get("/movie/top_rated");
      setPremierMovies(getPremierMovies.data.results);
    };

    requestPremierMovies();
  },[]);

  useEffect(() => {
    const requestOnlineStreamEvents = async () => {
        const getOnlineStreamEvents = await axios.get("/movie/now_playing");
        console.log(getOnlineStreamEvents);
        setOnlineStreamEvents(getOnlineStreamEvents.data.results);
    };

    requestOnlineStreamEvents();
}, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  },[]);

// useEffect(() => {
//   const requestUpcomingMovies = async () => {
//       const getUpcomingMovies = await axios.get("/movie/upcoming");
//       setOnlineStreamEvents(getUpcomingMovies.data.results);
//   };

//   requestUpcomingMovies();
// }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Upcoming Movies"
          subtitle="List of upcoming Movies"
          posters={upcomingMovies}
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="RuPay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default HomePage;
