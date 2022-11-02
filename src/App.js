import { BrowserRouter as Router, Route,Redirect} from "react-router-dom"
import Create from './pages/Create'
import Login from './pages/Login'

import Project from './pages/Project'

import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


import './App.css'
import Sidebar from "./components/Sidebar"
import OnlineUsers from "./components/OnlineUsers"


import {useAuthContext} from './hooks/useAuthContext'



function App() {
  const { authIsReady ,user}= useAuthContext()
  
  return (
    <div className="App">

{ authIsReady &&
<Router>
{user &&  <Sidebar/>}
   
    <div className="container">
    <Navbar/>

    <Route exact path='/'>
    {!user && <Redirect to='login' />}

       {user && <Dashboard/>}
      </Route>
      <Route path='/create'>
      {!user && <Redirect to='login' />}

        <Create/>
      </Route>
      <Route path='/projects/:id'>
      {!user && <Redirect to='login' />}

        <Project/>
      </Route>
      <Route path='/login'>
      {user && <Redirect to='/' />}
        <Login/>
  
      </Route>
      <Route path='/signup'>
      {user && <Redirect to='/' />}
        <Signup/>
      </Route>

      </div>
      {user  &&  <OnlineUsers/>}

    </Router>  }



    </div>
  );
}

export default App
