
import { NavLink } from "react-router-dom";

function Movie({movie ,clickHandler}) {
    
  return (
    <div className="card">
      <button onClick={clickHandler} >add to Watch List</button>
      <p>{movie.name}</p>
      <NavLink exact to={`/movies/${movie.id}`} >
        <img className="pic"
          src={movie.image}
          alt={movie.title}
                
        />
      </NavLink>
      </div>
  )
  }
  
  export default Movie;