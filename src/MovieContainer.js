import Movie from "./Movie";

function MovieContainer({movies, search}) {

  // const filterredmovies=movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const rendermovies = movies.map((movie) => (
    <Movie key={movie.id} movie ={movie} />
  ));
  return <ul>{rendermovies}</ul>;
}

export default MovieContainer;