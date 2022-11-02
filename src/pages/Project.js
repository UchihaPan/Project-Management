import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'
import './project.css'
import ProjectComments from './ProjectComments'
import Projectsummary from './Projectsummary'




function Project() {
  const {id}=useParams()
  const {document,error}=useDocument('projects',id)



  if(error){
    console.log('error',error)
    return <h2 className='error'>{error}</h2>
  }

  if(!document){
    return <h2 className='loading'>Loading...</h2>
  }

  return (
    <div className='project-details'>
    <Projectsummary project={document} />
    <ProjectComments project={document} />

    
    </div>
  )
}

export default Project