import { useState } from "react"
import { useHistory } from "react-router-dom";


function MovieReview({onReviewMovie}){
 const[formData, setFormData] = useState({
    title: '',
    stars: '', 
    image: '',
    summary: ''
 })

 const history = useHistory()

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3001/movies", configObj)
      .then((resp) => resp.json())
      .then((movies) => {
        onReviewMovie(movies);
        history.push(`movies/${movies.id}`)
      });
  };


    return(
    
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Review New Movie!</h3>

        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="tile"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          onChange={handleChange}
          value={formData.about}
        />

        <label htmlFor="stars">Rating</label>
        <select
          name="stars"
          id="stars"
          onChange={handleChange}
          value={formData.stars}
        >
          <option value="">Rating!</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label htmlFor="image">Movie Poster</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Add Review</button>
      </form>
    )
}

export default MovieReview