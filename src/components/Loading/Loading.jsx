import React from 'react'
import './Loading.scss'

function Loading() {
  return (
    <div className="spinner">
      <span>Loading</span>
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  )
}

export default Loading