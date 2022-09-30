import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'


function Home() {
  
  const dispatch = useDispatch()
  
  const movieText = 'Harry'
  const showText = 'Friends'
  
  useEffect(() => { 
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  )
}

export default Home