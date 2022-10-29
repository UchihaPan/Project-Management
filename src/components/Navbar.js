import React from 'react'
import './Navbar.css'
import Temple from '../assets/temple.svg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <ul>
   
    <li className="logo">
    <Link exact to='/' >
            <img src={Temple} alt="logo" />
            <span>The dojo</span>
            </Link>

        </li>


        <li>
            <Link to='/login' >Login</Link>
            <Link to='/signup' >Signup</Link>

        </li>

        <li>
            <button className="btn">Logout</button>
        </li>
    </ul>
    </div>
  )
}

export default Navbar