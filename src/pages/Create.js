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
  const {documents}=useCollection('users')
  const {addDocument,  response}=useFirestore('projects')


//This is to create array of all users
  const [users, setusers] = useState([])
  const {user}=useAuthContext()

  const history=useHistory()


  const handlesubmit=async e=>{
    e.preventDefault()

    if(!category){
      setFormError('Select 1 Category')
      return
    }
    if(assignedUsers.length < 1){
      setFormError('Select atleast 1 user')
      return
    }

    const createdBy={
      id:user.uid,
      displayName:user.displayName,
      photoURL:user.photoURL
    }

    const assignuserlist=assignedUsers.map((user)=>{
      return {
        id:user.value.id,
        displayName:user.value.displayName,
        photoURL:user.value.photoURL
        
      }
    })

    const project={
      name,details,comments:[],category:category.value,createdBy:createdBy,dueDate:timestamp.fromDate(new Date()),assignuserlist
    }
   await addDocument(project);
   if(   response.error===null ||  response.success===false  ){
    history.push('/')
   }else{
    console.log('error',response.error);
    setFormError('SSomething wrong happened.Please try again')
   }
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
      {!response.isPending &&<button className="btn">Add Project</button>}
      {response.isPending &&<button className="btn" disabled>Wait</button>}

      {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default Create