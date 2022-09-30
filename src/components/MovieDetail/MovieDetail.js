import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowBasedOnId,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import { VscStarEmpty } from "react-icons/vsc";
import { FaThumbsUp } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Loading from "../../components/Loading/Loading";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const dataBasedOnURL = useSelector(
    (state) => state.movies.selectMovieOrShow
  );

  // console.log(dataBasedOnURL)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowBasedOnId(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <>
      {
        !Object.keys(dataBasedOnURL).length ?
          (
            <Loading />
          )
          :
          (
          <div className="movie-section">
            <div className="section-left">
              <div className="movie-title">{dataBasedOnURL.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDV Rating <VscStarEmpty color="#ff9e00" /> :{" "}
                  {dataBasedOnURL.imdbRating}
                </span>
              </div>
              <div className="movie-rating">
                <span>
                  IMDV Votes <FaThumbsUp color="#fafafa" /> :{" "}
                  {dataBasedOnURL.imdbVotes}
                </span>
              </div>
              <div className="movie-rating">
                <span>
                  IMDV Runtime <FaFilm color="rgb(191 213 214)" /> :{" "}
                  {dataBasedOnURL.Runtime}
                </span>
              </div>
              <div className="movie-rating">
                <span>
                  IMDV Year <BsFillCalendarCheckFill color="peachpuff" /> :{" "}
                  {dataBasedOnURL.Year}
                </span>
              </div>
              <div className="movie-plot">{dataBasedOnURL.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{dataBasedOnURL.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{dataBasedOnURL.Actors}</span>
                </div>
                <div>
                  <span>Genres</span>
                  <span>{dataBasedOnURL.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{dataBasedOnURL.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{dataBasedOnURL.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={dataBasedOnURL.Poster} alt={dataBasedOnURL.title} />
            </div>
          </div>
          )
      }
    </>
  );
}

export default MovieDetail;
