import React ,{useState,useEffect}from 'react'
import './Create.css'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
import { timestamp } from '../firebase/config'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router'
import Select from 'react-select'



function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)
  const handlesubmit=e=>{
    e.preventDefault()
  }
  return (
    <div className="create-form">

      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handlesubmit}>
      <label >
        <span>Project title :</span>
        <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} />
      </label>

      <label >
        <span>Project Details :</span>
        <textarea type="text" value={details} onChange={(e)=>{setDetails(e.target.value)}} />
      </label>
      <label >
        <span>Project Date :</span>
        <input type="date" value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}} />
      </label>
      <label >
        <span>Project Category :</span>
      </label>
      <label >
        <span>Assign TO:</span>
       
      </label>
      <button className="btn">Add Project</button>
      </form>
    </div>
  )
}

export default Create