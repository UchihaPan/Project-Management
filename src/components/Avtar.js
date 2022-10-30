import React from 'react'
import './Avtar.css'

function Avtar({src}) {
  return (
    <div className="avatar">
        <img  src={src} alt="profile img" />
    </div>

  )
}

export default Avtar