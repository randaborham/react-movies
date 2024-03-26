import React, { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [movies, setMovies] = useState([]);

  async function getApi() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjI2ZjljOTQ2YjM0ZmRkMWI1MDE2Zjc4YzhhYWMxYiIsInN1YiI6IjY1YmViZTQyOTAyMDEyMDE2MmNhYjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TzToPBNjWaaq4W1t0nc3AXAD8lJs8i8VWE6E4SZ6oP0",
        },
      }
    );
    setMovies(data.results);
    // console.log(data);
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="p-lg-5" style={{ backgroundColor: "black" }}>
      <div className="container">
        {movies.length === 0 ? (
          <i className="fa fa-spinner fa-spin text-white fa-3x d-flex justify-content-center align-items-center "></i>
        ) : null}
        <div className="row g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col-lg-3">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="w-100"
                alt=""
                srcset=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
