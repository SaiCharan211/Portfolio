import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
function NavbarItem() {
  return (
    <div  className="bg-body-dark d-flex flex-row containerNavbar mb-1"   >
        <Link to="/" className='a'>Portfolio</Link>
        <Link to='/' className=' a' > <i className="fa-solid fa-house " ></i>Home</Link>
        <Link to='/about' className=' a'> <i className="fa-solid fa-address-card"  ></i>About</Link>
        <Link to='/project' className=' a'> <i className="fa-solid fa-diagram-project"  ></i> Projects</Link>
        <Link to='/skills' className=' a'><i className="fa-solid fa-pen-ruler"  ></i>Skills</Link>
        <Link to='/resume' className=' a'><i className="fa-solid fa-file"  ></i> Resume</Link>
    </div>
  )
}

export default NavbarItem