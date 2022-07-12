import './App.css';
import SearchBar from "./SearchBar";
import MovieContainer from './MovieContainer';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch]=useState("")

  useEffect((() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(movies => setMovies(movies))
  }),[])


  return (
    <div className="App">

      <Switch>

        <Route path='/:id'>
          <MovieDetails />
        </Route>

        <Route path='/'>
          <SearchBar search={search} setSearch={setSearch}/>
          <MovieContainer search={search} movies={movies}/>
        </Route>

     </Switch>
    </div>
  );
}

export default App;
