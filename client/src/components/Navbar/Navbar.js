import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"> <img  src='./images/logo.png' /></Link> 
        <ul className= "nav-menu">  
      <li className="nav-item">
         <Link to="/login"><i class="fa-solid fa-user">
        </i>  </Link>
         </li>
      <li className="nav-item"> 
      <Link to=""> <i class="fa-solid fa-cart-shopping">
        </i></Link>
        </li> 
    </ul>
    </div>
  )
}

export default Navbar
 