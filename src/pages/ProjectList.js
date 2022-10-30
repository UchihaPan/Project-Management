import React from 'react'
import './projectlist.css'
import {Link} from 'react-router-dom'

import Avtar from '../components/Avtar'

function ProjectList({projects}) {
  return (
    <div className='project-list'>
    {projects.length <1 && <p>No projects available...</p>}
    {projects.map(project=>(
      

            <Link to={`projects/${project.id}`} key={project.id}>

            <h4>{project.name}</h4>
           <p>Due By: {project.dueDate.toDate().toDateString()}</p>
           <div className="assigned-to">
            <ul>
            {project.assignuserlist.map(user=>(
                <li key={user.id}><Avtar src={user.photoURL}/></li>
            ))}
            </ul>
           </div>

            
            
            </Link>

        
    ))}
    </div>
  )
}

export default ProjectList