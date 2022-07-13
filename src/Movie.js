
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Movie({movie ,clickHandler}) {
    function handelclick() {clickHandler(movie)
    setWatchButton(true)}
    const [watchButton,setWatchButton]=useState(false)
    console.log(watchButton)
    
  return (
    <div className="card">
      
      
      <NavLink exact to={`/movies/${movie.id}`} >
        <img className="pic"
          src={movie.image}
          alt={movie.title}
                
        />
      </NavLink>
      <br></br>
      {watchButton?<div className="button">"Added to Watch List"</div>:<button className="button" onClick={handelclick} value={movie.image} >Watch Later</button>}
      </div>
  )
  }
  
  export default Movie;