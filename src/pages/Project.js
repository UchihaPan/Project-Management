import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'
import './project.css'


function Project() {
  const {id}=useParams()

  const {document,error}=useDocument('projects',id)

  if(error){
    return <h2 className='error'>{error}</h2>
  }

  if(!document){
    return <h2 className='loading'>Loading...</h2>
  }

  return (
    <div className='project-details'>
    
    </div>
  )
}

export default Project