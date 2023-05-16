import React from 'react'
import { useLoaderData, NavLink } from 'react-router-dom'

const Home = () => {
  const movies = useLoaderData()
  return (
    <div className="display-movies">

          <div className="movie-card">
              <img src={movies.Poster} alt=""/>
              <div className="short-details">
                <h3>{movies.Title}</h3>
                <p>{movies.Plot}</p>
                <small>Year: {movies.Year}</small>
                <NavLink to={movies.Title}>More Details...</NavLink>
              </div>
          </div>

    </div>
  )
}

export default Home
