import React from 'react'
import './index.css'
import about from '../../assets/about.png'
function About() {
  return (
    <div className='About'>
       <div className="container">
        <div className="row">
          <h1 className='h1'>About</h1>
        <div className='col-lg-6 col-md-12 pt-4' >
      <p>Hello, my name is Sai Charan. I am eager to discuss how my skills and experience align with the goals. I am confident that my skills can contribute significantly to your team. I believe in continuous learning and staying updated with industry trends to ensure I bring the most value to my work.
I have good knowledge about HTML, CSS, JavaScript, Python, Node.js, SQLite, React.js. I have done some projects using this skills like Wikipedia Search application and Prime Vide clone etc. I am Looking to start the career as Full Stack developer.</p>
      </div >
      <div className='col-lg-6 col-md-12'>
        <img src={about} alt="aboutImg" className='aboutImg' />
      </div>
        </div>
       </div>
    </div>
  )
}

export default About