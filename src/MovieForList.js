import React from "react";

function MovieForList({ movie, clickHandler }) {
  return (
    <div >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.stars}</p>
          <img src={movie.image}></img>
        </div>
      </div>
    </div>
  );
}
export default MovieForList;
