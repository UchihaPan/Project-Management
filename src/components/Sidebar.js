import React from 'react'
import './Sidebar.css'
import add_icon from '../assets/add_icon.svg'
import dashboard_icon from '../assets/dashboard_icon.svg'
import { NavLink} from "react-router-dom"




function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <p>Hey,user</p>
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