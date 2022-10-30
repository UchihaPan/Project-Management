import React ,{useState,useEffect}from 'react'
import {useLogin} from '../hooks/useLogin'
import {useAuthContext} from '../hooks/useAuthContext'



function Login() {
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const {login, isPending, error}=useLogin()
  const {user}= useAuthContext()


  const handlesubmit=e=>{
    e.preventDefault()
    login(email,password)

  }

  useEffect(() => {
    if(user){
      setemail('')
      setpassword('')
   
    }

  

  }, [user])
  
  return (
    <form className="auth-form" onSubmit={handlesubmit}>
    <h2>Login</h2>
    <label >
      <span>Email:</span>
      <input type="email" value={email} onChange={e=>setemail(e.target.value)} />
    </label>
    <label >
      <span>Password:</span>
      <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
    </label>

   { !user && !isPending &&( <button className="btn">Login</button>)}
   { isPending &&( <button className="btn" disabled>Loading...</button>)}
   { user &&( <button className="btn" disabled>You've successfully logged in...</button>)}


    {error && <div className='error'>{error}</div>}


    

  </form>
  )
}

export default Login