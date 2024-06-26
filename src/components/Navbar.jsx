import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [openMenuList, setOpenMenuList] = useState(false)

  return (
    <div>
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
            <NavLink to="/contact"> <button className='nav-btn'>Contact</button></NavLink>
          </div>
        </div>
        <img onClick={() => setOpenMenuList(!openMenuList)} className='menu' src='./images/hamburger.png' alt='menu icon' />
      </div>
      {openMenuList &&
        <div className='navbar-links small'>
          <div className='a-tags'>
            <NavLink to="/" className='nav-link' onClick={() => setOpenMenuList(false)}>Home</NavLink>
            <NavLink to="/about" className='nav-link' onClick={() => setOpenMenuList(false)}>About</NavLink>
            <NavLink to="tags" className='nav-link' onClick={() => setOpenMenuList(false)}>Tags</NavLink>
            <NavLink to="recipes" className='nav-link' onClick={() => setOpenMenuList(false)}>Recipes</NavLink>
          </div>
          <div className='btn-div'>
            <NavLink to="/contact" onClick={() => setOpenMenuList(false)}> <button className='nav-btn'>Contact</button></NavLink>
          </div>
          {/* <div className='btn-div'>
            <NavLink to="/contact"> <button className='nav-btn' onClick={() => setOpenMenuList(false)}>Contact</button></NavLink>
          </div> */}
        </div>
        
      }
    </div>
  )
}

export default Navbar