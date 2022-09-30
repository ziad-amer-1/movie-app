import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import './PageNotFound.scss'

const PageNotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/movie-app")
    }, 100)
  }, [])
  return <div className="pageNotFound">PageNotFound</div>;
};

export default PageNotFound;
