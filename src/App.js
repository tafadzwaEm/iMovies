import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect} from 'react-router-dom';
import './index.css';
// Layouts
import RootLayout from './layouts/RootLayout';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import AboutMovie from './pages/AboutMovie';
import ErrorPage from './pages/ErrorPage';
import { useEffect, useState } from 'react';


function App() {

  // let movieName = 'lost'
  const [name, setName] = useState('Home')

  const onSearch = (movie) =>{  
      setName(movie)
      LoadMovies()
  }
  const LoadMovies = () => {
    const res = fetch(`https://www.omdbapi.com/?t=${name}&apikey=9787f36b`).then(
        res => {
            if (res.ok){
                return res.json()
              
            }else{
                throw Error("Could not load movies")
            }
        }      
    )
    return res
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Root route
      <Route path='/' element={<RootLayout onSearch={onSearch}/>} errorElement={<ErrorPage/>}>
  
          <Route index element={<Home/>} loader={LoadMovies}/>
          <Route path={name} element={<AboutMovie/>} loader={LoadMovies}/>
          
  
          <Route path='about' element={<About />}/>
          
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
