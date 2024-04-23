import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo.container'>
        <NavLink to='/'> <img className='logo' src='./images/logo.svg' alt='logo' /></NavLink>
      </div>
      <div className='navbar-links'>
        <div className='a-tags'>
          <NavLink to="/" className='nav-link'>Home</NavLink>
          <NavLink to="/about" className='nav-link'>About</NavLink>
          <NavLink to="tags" className='nav-link'>Tags</NavLink>
          <NavLink to="recipes" className='nav-link'>Recipes</NavLink>
        </div>
        <div className='btn-div'>
          <button className='nav-btn'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar