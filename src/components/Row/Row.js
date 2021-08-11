import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return loading ? (
    <Loader isLargeRow={isLargeRow} />
  ) : (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-cardwrapper">
        {movies.map((movie) => {
          return (
            <img
              className={`card ${isLargeRow && "card-large"}`}
              key={movie.id}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
