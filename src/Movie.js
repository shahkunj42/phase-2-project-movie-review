
function Movie({movie}) {
    
    return (
    
    <div className="card">
      <img className="pic"
        src={movie.image}
        alt={movie.title}         
      />
      <div >
        <div >{movie.title}</div>
        <p >{movie.summary}</p>
        <div >          
          <p>{movie.stars}</p>
        </div>
      </div>
    </div>)
  }
  
  export default Movie;