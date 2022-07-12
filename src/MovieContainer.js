import Movie from "./Movie";

function MovieContainer({movies,search}) {
    const moviea =movies.movies

    
  const filterredmovies=moviea.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  const rendermovies = filterredmovies.map((movie) => (
    <Movie key={movie.id} {...movie} />
  ));
  return <ul>{rendermovies}</ul>;
}

export default MovieContainer;