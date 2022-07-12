import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar";
import movies from "./db"
import MovieContainer from './MovieContainer';
import { useState } from 'react';
function App() {
  const [search,setSearch]=useState("")



  return (
    <div className="App">
      <SearchBar setSearch={setSearch}/>
      <MovieContainer search={search} movies={movies}/>
     
    </div>
  );
}

export default App;
