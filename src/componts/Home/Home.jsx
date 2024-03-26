import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getApi() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg",
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
      {movies.length === 0 ? (
        <i className="fa fa-spinner fa-spin text-white fa-3x d-flex justify-content-center align-items-center "></i>
      ) : null}
      <div className="container">
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
