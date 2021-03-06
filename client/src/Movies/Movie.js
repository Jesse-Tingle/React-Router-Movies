import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
 console.log('Movies', props.match.params.id);
 
 const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
 
 useEffect(() => {
    

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    console.log('saveMovieProps', props);
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
