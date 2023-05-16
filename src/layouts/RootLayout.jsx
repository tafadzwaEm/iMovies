import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const RootLayout = ({onSearch}) => {

  const [movie, setMovie] = useState('')

  const SearchMovie = (e) => {
    if (e.key === 'Enter'){
      onSearch(movie)
      setMovie('')
    }
    
  }

  return (
    <div className='root-layout'>
      <header>
        <nav>
            <h2>iMovies4u</h2>

            <input type="text" 
                placeholder='Search movie...' 
                value={movie} 
                onChange={(e)=> setMovie(e.target.value)} 
                onKeyDown={SearchMovie}
            />

            <div className="nav-links">
                <NavLink to='iMovies'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>
        </nav>
      </header>

      <Outlet />    
    </div>
  )
}

export default RootLayout
