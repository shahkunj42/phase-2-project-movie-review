import Movie from "./Movie";

function MovieContainer({movies, search, clickHandler,watchButton, setWatchButton}) {

  const filteredMovies=movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const rendermovies = filteredMovies.map((movie) => (
    <Movie key={movie.id} movie={movie} clickHandler={clickHandler} watchButton={watchButton} setWatchButton={setWatchButton}/>
  ));
  return <ul className="movieContainer">{rendermovies}</ul>;
}

export default MovieContainer;