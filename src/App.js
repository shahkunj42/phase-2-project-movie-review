import './App.css';
import SearchBar from "./SearchBar";
import MovieContainer from './MovieContainer';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Header from './Header';
import Home from './Home';
import MovieReview from './MovieReview';
import WatchlaterContainer from "./WatchlaterContainer"

function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch]=useState("")
  const [watchlist,setWatchList]=useState([])
  

  useEffect((() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(movies => setMovies(movies))
  }),[])

  function onReviewMovie(newMovie){
    setMovies(movies => [...movies, newMovie])
  }

  function addmovie(movie) {
    console.log(movie.title);
    // console.log(watchlist)
    setWatchList((prevState) => {
      const inList = prevState.includes(movie);
      if (inList) {
        return prevState;
      } else {
        return [...prevState, movie];
      }
    });
  }

  return (
    <div className="App">
      <Header />
      
      <Switch>

        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>

        <Route path='/movies'>
          <br></br>
          <SearchBar search={search} setSearch={setSearch}/>
          <WatchlaterContainer watchlist={watchlist} clickHandler={addmovie} />
          <MovieContainer search={search} movies={movies} clickHandler={addmovie}/>
          
        </Route>

        <Route path='/review'>
          <MovieReview onReviewMovie={onReviewMovie}/>
        </Route>

        <Route path='/'>
          <Home />
        </Route>
        
     </Switch>

    </div>
  );
}

export default App;
