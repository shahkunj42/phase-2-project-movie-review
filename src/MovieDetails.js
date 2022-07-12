import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((r) => r.json())
      .then((movie) => {
        setMovie(movie);
      });
  }, [id]);

  if(!movie) return <h1>Loading</h1>

  return (
    <section>
      <div className="card">
          <img className="pic"
            src={movie.image}
            alt={movie.title}         
          />
          <div >
            <div >{movie.title}</div>
            <p >{movie.summary}</p>
            <div >          
              <p>{movie.stars}</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default MovieDetails;