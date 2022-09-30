import React from 'react'
import Slider from 'react-slick'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'

function MovieListing() {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  const movies = useSelector(state => state.movies.movies)
  const shows = useSelector(state => state.movies.shows)
  
  let renderMovies = '', renderShows = '' 

  renderMovies =
    movies.Response === 'True' ?
    (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={ movie } />
      ))
    ) :
    (
      <div
        className="movies-error">
        {movies.error}
      </div >
      )
  
  renderShows =
    shows.Response === 'True' ?
    (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} data={ movie } />
      ))
    ) :
    (
      <div
        className="movies-error">
        {shows.error}
      </div >
    )

  
  return (
    <div className="mvoie-wrapper">
      <div className="movie-list">
        <h2 style={{ marginBlock: '50px', textAlign: 'center' }}>Movies</h2>
        <div className="movies-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2 style={{ marginBlock: '50px', textAlign: 'center' }}>Shows</h2>
        <div className="shows-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing