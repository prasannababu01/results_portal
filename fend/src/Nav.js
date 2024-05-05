import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Gc from './Gc'
import './Nav.css'
const Nav = () => {
    let obj=useContext(Gc)
  return (

    
    <nav>
        <NavLink to="/admin/disp">Display Results</NavLink>
        <NavLink to="/admin/add">Add Results</NavLink>
        <NavLink to="/admin/logout">Logout</NavLink>
        
        <div>Admin: <h2>{obj.data.name}</h2></div>


    </nav>
  )
}

export default Nav