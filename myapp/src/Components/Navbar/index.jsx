import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
const NavbarItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

      <div className="navbarItem " >
      <div className="container">
      
        <a href="#home" className="navbar-brandItem">Portfolio</a>
        <button className=" a navbar-toggler hambuger-menuBar"  onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`navbar-collapseItem ${isOpen ? 'show' : ''} `}>
          
              <ul className="navbar-navItem navNew ">
                <Link to='/' className='nav-itemBar  a'> <i className="fa-solid fa-house p-1"></i>Home</Link>
                <Link to='/about' className='nav-itemBar  a' > <i className="fa-solid fa-address-card p-1"></i>About</Link>
                <Link to='/project' className='nav-itemBar  a'><i className="fa-solid fa-diagram-project p-1"></i>Projects</Link>
                <Link to='/skills' className='nav-itemBar  a'><i className="fa-solid fa-pen-ruler p-1"></i>Skills</Link>
                <Link to='/resume' className='nav-itemBar  a'><i className="fa-solid fa-file p-1"></i>Resume</Link>
              </ul>
          
        </div>
      </div>
    </div>

   
  );
}

export default NavbarItem;
