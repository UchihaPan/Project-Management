import React,{useState} from 'react'
import './Signup.css'


function Signup() {

  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const [displayname,setdisplayname]= useState('')

  const [thumbnail,setthumbnail]= useState(null)

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <label >
        <span>Email:</span>
        <input type="email" value={email} onChange={e=>setemail(e.target.value)} />
      </label>
      <label >
        <span>Password:</span>
        <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
      </label>
      <label >
        <span>DisplayName:</span>
        <input type="text" value={displayname} onChange={e=>setdisplayname(e.target.value)} />
      </label>
      <label >
        <span>Profile Thumbnail :</span>
        <input type="file"  />
      </label>
      <button className="btn">Signup</button>
    </div>
  )
}

export default Signup