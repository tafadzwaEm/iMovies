import React from 'react'
import { useLoaderData } from 'react-router-dom'

const AboutMovie = () => {
  const movie = useLoaderData()
  console.log(movie)
  return (
    <div className='movie-details'>
        <div className="movie-short-details">
          <h2>{movie.Title}</h2>
          <p className="plot">{movie.Plot}</p>
          <small className='details-small'>
            <p className="main-actors">Main Actors: {movie.Actors}</p>
            <p className="genre">Genre: {movie.Genre}</p>
            <p className="language">Language: {movie.Language}</p>
          </small>
          
          <div className="ratings">
            {movie.Ratings.map(rating=>(
              <div className="rating">
                <h3>{rating.Source}</h3>
                <p>Rating: {rating.Value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="poster">
          <img src={movie.Poster} alt='Could not load image' />
        </div>
    </div>
  )
}

export default AboutMovie
