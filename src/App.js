import './App.css';
import SearchBar from "./SearchBar";
import MovieContainer from './MovieContainer';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Header from './Header';
import Home from './Home';
import MovieReview from './MovieReview';

function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch]=useState("")

  useEffect((() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(movies => setMovies(movies))
  }),[])

  function onReviewMovie(newMovie){
    setMovies(movies => [...movies, newMovie])
  }

  return (
    <div className="App">
      <Header />
      
      <Switch>

        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>

        <Route path='/movies'>
          <SearchBar search={search} setSearch={setSearch}/>
          <MovieContainer search={search} movies={movies}/>
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
