import React from 'react'
import './index.css'
import Type from '../../Type'
import Contact from '../Contact/index'

function Home() {
  return (
    <>
    <div className='bg-container pt-5'>
    <div className='container'>
      <div  className='row'>
        
        <div className='col-lg-5 col-md-12'>
          <h1>Hi There!</h1>
          <h1>IAM SAI CHARAN</h1>
          <div className='d-flex flex-column' ><Type/>
          <Contact/></div>
          
        </div>
        <div className='col-lg-5 col-md-12 imgCont d-flex justify-content-end'>
          <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-1004x1024-wcqgbag3.png"  alt="" />
        </div>
      </div>
     </div>
    </div>
    
    </>
  )
}

export default Home