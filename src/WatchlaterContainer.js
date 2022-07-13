import React from "react";
import MovieForList from "./MovieForList";
import Movie from "./Movie"

function WatchlaterContainer({ watchlist, clickHandler , watchButton, setWatchButton}) {
  const renderlist = watchlist.map(movie => <Movie key={movie.id} movie={movie} clickHandler={clickHandler} setWatchButton={setWatchButton} watchButton={watchButton}/>)
  return (
    <div className="movieContainer">
      <h2 className="header">Watch Later List:</h2>
      <br></br>
      {renderlist}
    </div>
  );
}

export default WatchlaterContainer;
