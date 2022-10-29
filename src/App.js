import { BrowserRouter as Router, Route,  Switch,Redirect} from "react-router-dom"
import Create from './pages/Create'
import Login from './pages/Login'

import Project from './pages/Project'

import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


import './App.css'
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <div className="App">

    <Router>
    <Sidebar/>
    <div className="container">
    <Navbar/>

      <Route exact path='/'>
        <Dashboard/>
      </Route>
      <Route  path='/create'>
        <Create/>
      </Route>
      <Route  path='/project/:id'>
        <Project/>
      </Route>
      <Route  path='/login'>
        <Login/>
      </Route>
      <Route  path='/signup'>
        <Signup/>
      </Route>
      </div>
    </Router>



    </div>
  );
}

export default App
