import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo.container'>
        <img className='logo' src='./images/logo.svg' alt='logo' />
      </div>
      <div className='navbar-links'>
        <div className='a-tags'>
          <a href="#!" className='nav-link'>Home</a>
          <NavLink to="/about" className='nav-link'>About</NavLink>
          <a href="#!" className='nav-link'>Tags</a>
          <a href="#!" className='nav-link'>Recipes</a>
        </div>
        <div className='btn-div'>
          <button className='nav-btn'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar