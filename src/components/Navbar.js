import React from 'react'
import './Navbar.css'
import Temple from '../assets/temple.svg'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'


function Navbar() {
  const {logout, error, isPending}=useLogout()
  const { user } = useAuthContext()

  return (
    <div className='navbar'>
    <ul>
   
    <li className="logo">
    <Link to='/' >
            <img src={Temple} alt="logo" />
            <span>The dojo</span>
            </Link>

        </li>

        


       { !user &&( <li>
            <Link to='/login' >Login</Link>
            <Link to='/signup' >Signup</Link>

        </li>)}

        <li>
        { user && !isPending && <button className="btn" onClick={()=>logout()}>Logout</button>}
           {isPending && <button className="btn" disabled>Logging out...</button>}
           {error && <div className='error'>{error}</div>}

        </li>
    </ul>
    </div>
  )
}

export default Navbar