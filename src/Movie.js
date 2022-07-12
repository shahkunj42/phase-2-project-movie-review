function Movie({title,image,summary,stars}) {
    
    
    return (
    
    <div className="card">
      <img className="pic"
        src={image}
        alt={title}         
      />
      <div >
        <div >{title}</div>
        <p >{summary}</p>
        <div >          
          <p>{stars}</p>
        </div>
      </div>
    </div>)
  }
  
  export default Movie;