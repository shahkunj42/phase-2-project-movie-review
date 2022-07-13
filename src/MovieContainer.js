import Movie from "./Movie";

function MovieContainer({movies, search, clickHandler}) {

  const filteredMovies=movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const rendermovies = filteredMovies.map((movie) => (
    <Movie key={movie.id} movie={movie} clickHandler={clickHandler}/>
  ));
  return <ul>{rendermovies}</ul>;
}

export default MovieContainer;