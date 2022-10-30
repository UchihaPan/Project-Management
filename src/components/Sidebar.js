import React from 'react'
import './Sidebar.css'
import add_icon from '../assets/add_icon.svg'
import dashboard_icon from '../assets/dashboard_icon.svg'
import { NavLink} from "react-router-dom"
import {useAuthContext} from '../hooks/useAuthContext'
import Avtar from './Avtar'



function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
        { user && user.photoURL && <Avtar src={user.photoURL}/>}
          <p>Hey,{user ? user.displayName : 'user'}</p>
        </div>
        <nav className="links">
        <ul>
        <li>        <NavLink exact to='/'>
            <img src={dashboard_icon} alt="dashboard" />
            <span>Dashboard</span>
          </NavLink></li>

          <li>
          <NavLink to='/create'>
            <img src={add_icon} alt="create" />
            <span>New Project</span>
          </NavLink>
          </li>


        </ul>

        </nav>
      </div>
    </div>
  )
}

export default Sidebar