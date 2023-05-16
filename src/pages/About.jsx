import React from 'react'

const About = () => {
  return (
    <div>
        <h2>About iMovies4u</h2>
        <p>A web application built with React.js that allows users to search for movies and view detailed information about them. The application fetches movie data from the Open Movie Database (OMDB) API and presents it in a user-friendly interface.</p>
        <small className='links'>
          Created by:  Emmanuel Tafadzwa Mukombero <br />
          <span style={{color: "white"}}>Check my Github </span>
          <a href="https://github.com/tafadzwaEm" target='_blank'>Here</a>
        </small>
    </div>
  )
}

export default About
