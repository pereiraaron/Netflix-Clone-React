import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import BannerLoader from "../Loader/BannerLoader";

const Banner = ({ url }) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setMovie(data.results[Math.floor(Math.random() * 20 - 1)]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return loading ? (
    <BannerLoader />
  ) : (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") `,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
          <h1 className="banner-description">{movie.overview}</h1>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
