import React from 'react'

import './onlineusers.css'

import {useCollection} from '../hooks/useCollection'
import Avtar from './Avtar'

function OnlineUsers() {
  const {error,documents}=useCollection('users')
  return (
   <div className="user-list">

   <h2>Online users</h2>
   {error && <h2>{error}</h2>}
   {documents && documents.map(user=>(
    <div key={user.id} className='user-list-item'>
    {user.online && <div className='online-user'></div>}
      <span>{user.displayName}</span>
      <div className='avatar'>
      <Avtar  src={user.photoURL}/>

      </div>
    </div>
   ))}

   </div>
  )
}

export default OnlineUsers