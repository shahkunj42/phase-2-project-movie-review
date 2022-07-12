
import { NavLink } from "react-router-dom";

function Movie({movie}) {
    
  return (
    <div className="card">
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