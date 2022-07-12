import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar";
import MovieContainer from './MovieContainer';
import { useState, useEffect } from 'react';

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
      <SearchBar search={search} setSearch={setSearch}/>
      <MovieContainer search={search} movies={movies}/>
     
    </div>
  );
}

export default App;
