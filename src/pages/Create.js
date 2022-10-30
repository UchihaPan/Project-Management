import React ,{useState,useEffect}from 'react'
import './Create.css'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
import { timestamp } from '../firebase/config'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router'
import Select from 'react-select'



const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]




function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)
  const {documents,error}=useCollection('users')
  const [users, setusers] = useState([])


  const handlesubmit=e=>{
    e.preventDefault()
    console.log(name,details,dueDate,assignedUsers);
  }

  useEffect(() => {
    if(documents){
      const options=documents.map(user=>{
        return {
          value:user,
          label:user.displayName
        }
      
      })
      setusers(options)
    }

  }, [documents])
  
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
        <Select
        onChange={option=>setCategory(option)}
        options={categories}
        />
      </label>
      <label >
        <span>Assign TO:</span>
        <Select
        onChange={option=>setAssignedUsers(option)}
        options={users}
        isMulti
        />
       
      </label>
      <button className="btn">Add Project</button>
      </form>
    </div>
  )
}

export default Create