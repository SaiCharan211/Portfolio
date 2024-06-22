import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/index';
import About from './Components/About/index'

import Project from './Components/Projects/index';
import Skills from './Components/Skills/index';
import NavbarItem from './Components/Navbar/index'
import './App.css'
import ResumeNew from './Components/New/ResumeNew';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='con'>
      <BrowserRouter>
      <NavbarItem/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/project' element={<Project/>}/>
           <Route path='/skills' element={<Skills/>}/>
           <Route path='/resume' element={<ResumeNew/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App