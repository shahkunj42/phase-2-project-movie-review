
import { NavLink } from "react-router-dom";

function Movie({movie}) {
    
  return (
    <div className="card">
      <NavLink exact to={`/${movie.id}`} >
        <img className="pic"
          src={movie.image}
          alt={movie.title}         
        />
      </NavLink>
      <div >
        <div >{movie.title}</div>
        <p >{movie.summary}</p>
        <div >          
          <p>{movie.stars}</p>
        </div>
      </div>
    </div>
  )
  }
  
  export default Movie;