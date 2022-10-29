import React,{useState} from 'react'
import './Signup.css'


function Signup() {

  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const [displayname,setdisplayname]= useState('')

  const [thumbnail,setthumbnail]= useState(null)
  const [thumbnailerror,setthumbnailerror]= useState(null)

  const handlesubmit=e=>{

    e.preventDefault()

    console.log(email,password,displayname,thumbnail);
  }

const handlefilechange=e=>{
  setthumbnail(null)
  const file=e.target.files[0]
  if(!file){
    setthumbnailerror('Please select an file')
    return
  }
  if(!file.type.includes('image')){
    setthumbnailerror('Please select an image file')
    return

  }
  if(file.size > 1000000){
    setthumbnailerror('Please select an image file of size less than 100kb')
    console.log('Please select an image file of size less than 100kb')
    return

  }
  setthumbnailerror(null)
  setthumbnail(file)
  console.log('success');
}
  return (
    <form className="auth-form" onSubmit={handlesubmit}>
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
        <input type="file" onChange={handlefilechange} />
        {thumbnailerror && <div className='error'>{thumbnailerror}</div>}
      </label>
      <button className="btn">Signup</button>

      

    </form>
  )
}

export default Signup