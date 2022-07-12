import { Link, NavLink } from "react-router-dom"

function Header(){
return(
 <nav>
    <Link to = '/movies'>
        <h1>Movie Reviews!</h1>
    </Link>
    <div className="navigation">
        <span className="links">
          <NavLink className="button" exact to="/movies">
            All Movies
          </NavLink>
      
          <NavLink className="button" exact to="/review">
            Review Movie
          </NavLink>

        </span>
        </div>
 </nav>
)
}

export default Header