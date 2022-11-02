import React from 'react'
import Avtar from "../components/Avtar"
import { useFirestore } from "../hooks/useFirestore"
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

function Projectsummary({project}) {
    console.log(project);
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    const history = useHistory()
    const handleClick = () => {
        deleteDocument(project.id)
        history.push('/')
      }
    return (
        <div>
          <div className="project-summary">
            <h2 className="page-title">{project.name}</h2>
            <p className="due-date">
              Project due by {project.dueDate.toDate().toDateString()}
            </p>

            <p className="details">
              {project.details}
            </p>
            <h4>Project assigned to:</h4>
            <div className="assigned-users">
              {project.assignuserlist.map(user => (
                <div key={user.id}>
                  <Avtar src={user.photoURL} />
                </div>
              ))}
            </div>
          </div>
          {user.uid === project.createdBy.id && (
            <button className="btn" onClick={handleClick}>Mark as Complete</button>
          )}
        </div>
      )
}

export default Projectsummary