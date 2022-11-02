import React,{useState} from 'react'
import './Dashboard.css'
import { useAuthContext } from '../hooks/useAuthContext'
import {useCollection} from '../hooks/useCollection'
import ProjectList from './ProjectList'
import ProjectFilter from './ProjectFilter'



function Dashboard() {
  const {documents, error}=useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const {user}=useAuthContext()



  const changeFilter=(newfilter)=>{
    setCurrentFilter(newfilter)
  }


  const projects=documents && documents.filter((document)=>{
    switch(currentFilter){
      case 'all':
        return true
        // eslint-disable-next-line
        case 'mine':
          let assignedToMe = false
          document.assignuserlist.forEach(u => {
            if(u.id === user.uid) {
              assignedToMe = true
            }
          })
          return assignedToMe
// eslint-disable-next-line
        case 'development':
          // eslint-disable-next-line
          case 'design':
                      // eslint-disable-next-line
            case 'marketing':
// eslint-disable-next-line
              case 'sales':

            return  document.category===currentFilter
            // eslint-disable-next-line

              default:
                return true





    
  }})


  return (
    <div>
    <h2 className="page-title">
      Dashboard
    </h2>
    {error && <p className='error'>{error}</p>}


    {documents && <ProjectFilter changeFilter={changeFilter} currentFilter={currentFilter} />}


    {documents && <ProjectList projects={projects}/>}
    
    </div>
  )
}

export default Dashboard