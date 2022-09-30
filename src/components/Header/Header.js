import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userImage from '../../images/user.png'
import { FcSearch } from 'react-icons/fc'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

function Header() {
  
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  
  function handleSubmit(e) {
    e.preventDefault()
    if (term === '') alert('Please Enter a Valid Search')
    if(!term || /^\s*$/.test(term)) return
    // console.log(term)
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  
  return (
    <header>
      <div className="logo">
        <Link to='/movie-app' style={{ textDecoration: 'none', color: 'white' }}>
          Movie App
        </Link>
      </div>
      
      <div className="search-bar">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={ term }
            placeholder='Search Movies Or Shows'
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'><FcSearch /></button>
        </form>
      </div>
      
      <div className="user-image">
        <img src={ userImage } alt='user img' />
      </div>
    </header>
  )
}

export default Header