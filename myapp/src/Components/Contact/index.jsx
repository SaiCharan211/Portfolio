import React from 'react'
import './index.css'

function newContact() {
  return (
  
       <div className='mt-5'> 
       
            <a className='button2'
                href="mailto:poosalasaicharan7@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <i class="fa-solid fa-envelope" style={{width:"20px",color:"black",scale:"1.5"}}></i>
            </a>

            <a className='button2'
                href="https://github.com/SaiCharan211"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <i class="fa-brands fa-github" style={{width:"20px",color:"black",scale:"1.5"}}></i>
            </a>

            <a  className='button2'
                href="https://www.linkedin.com/in/sai-charan12"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin" style={{width:"20px",color:"black",scale:"1.5"}}></i>
              </a>
       </div>

  )
}

export default newContact