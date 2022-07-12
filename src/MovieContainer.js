import Movie from "./Movie";

function MovieContainer({movies, search}) {

  const filteredMovies=movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const rendermovies = filteredMovies.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));
  return <ul>{rendermovies}</ul>;
}

export default MovieContainer;