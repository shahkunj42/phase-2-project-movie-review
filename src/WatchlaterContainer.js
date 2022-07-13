import React from "react";
import MovieForList from "./MovieForList";
import Movie from "./Movie"

function WatchlaterContainer({ watchlist, clickHandler}) {
  const renderList = watchlist.map((movie) => (
    <Movie clickHandler={clickHandler} movie={movie} />
  ));
  return (
    <div>
      <h2>Watch Later List:</h2>
      {renderList}
    </div>
  );
}

export default WatchlaterContainer;
