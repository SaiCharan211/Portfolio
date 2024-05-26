import React from 'react'
import './index.css'
import html from '../../assets/Icons/html.png'
import css from '../../assets/Icons/css.png'
import js from '../../assets/Icons/js.png'
import python from '../../assets/Icons/python.png'
import reactjs from '../../assets/Icons/reactjs.png'
import sqlite from '../../assets/Icons/sqlite.png'
import bootstrap from '../../assets/Icons/bootstrap.png'

function Skills() {
  return (
    <div className="container"> 
      <div className="row m-2 ">
      <h1 className='h1'>Skills</h1>
        <div className="card1 m-2 ">
            <div className="icon ">
            <img src={html} alt="1" />
            </div>
            <span>HTML</span>
        </div>
     
      
     
        <div className="card1 m-2">
            <div className="icon">
            <img src={css} alt="2" />
            </div>
            <span>CSS</span>
        </div>
      
      
      
        <div className="card1 m-2">
            <div className="icon">
            <img src={bootstrap} alt="3" />
            </div>
            <span>Bootstrap</span>
        </div>
     

     
        <div className="card1 m-2">
            <div className="icon">
            <img src={js} alt="4" />
            </div>
            <span>JavaScript</span>
        </div>
   
     
    
      <div className="card1 m-2">
          <div className="icon">
          <img src={python} alt="5" />
          </div>
          <span>Python</span>
      </div>
     
       
     
        <div className="card1  m-2 ">
            <div className="icon">
            <img src="https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png" alt="6" />
            </div>
            <span>Node.js</span>
        </div>
  
      
     
        <div className="card1 m-2">
            <div className="icon">
            <img src={reactjs} alt="7" />
            </div>
            <span>React</span>
        </div> 


      
      <div className="card1  m-2 ">
          <div className="icon">
          <img src={sqlite} alt="8" />
          </div>
          <span>SQLite</span>
      </div>

    </div>
    </div>
)
}

export default Skills