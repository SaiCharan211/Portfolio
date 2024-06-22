import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pic1 from '../../assets/p1.png'
import Pic2 from '../../assets/p2.png'
import Pic3 from '../../assets/p3.png'
import Pic4 from '../../assets/p4.png'
import Pic5 from '../../assets/Pic 5.png'
import './index.css'

function Project() {

    const data=[
        {
         url:Pic1,
         title:"Wikipedia Search ",
         main:"",
         deployLink:"https://wikipedia-f4ct.vercel.app/",
         github:"https://github.com/SaiCharan211/Wikipedia",
         content:"A search engine is a software program that helps people find the information they are looking for online using keywords or phrases. Search engines are able to return results quickly—even with millions of websites online—by scanning the Internet continuously and indexing every page they find",
        },
        {
         url:Pic2,
         title:"TodoList",
         main:"",
         github:"https://github.com/SaiCharan211/Todo",
         deployLink:"https://todo-zeta-eight-77.vercel.app/",
         content:"Todo Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom",
        },
        {
         url:Pic3,
         title:"MoviesApp(Clone)",
         main:"",
         github:"https://github.com/SaiCharan211/reacttttt",
         deployLink:" https://reacttttt-rho.vercel.app/",
         content:"Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details.",
        },
        {
         url:Pic4,
         main:true,
         title:"Login and Registration page",
         github:"https://github.com/SaiCharan211/Login-and-Registration",
         deployLink:"https://myapp-nine-sage.vercel.app/",
         content:"Login and Signup pages is where A signup page enables users and organizations to independently register and gain access to your system. Registered user data stored in mangodb database locally ",
        },
        {
         url:Pic5,
         title:"Tic Tac Toe Game",
         main:"",
         github:"https://github.com/SaiCharan211/Tic-Tac-Toe-Game",
         deployLink:"https://tic-tac-toe-game-eqqd.vercel.app/",
         content:"The goal of this portfolio Tic Tac Toe project is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally. An opponent can prevent a win by blocking the completion of the opponent's line",
        },
     ]
  return (
    <div className=' p-3 m-3 Cards'>
        <h1 className='h1'>Projects</h1>
        <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
            <div className="row">
                
                    {data.map((i,id)=>(
                        <Card style={{ width: '20rem'}} className='m-3' key={id}>
                        <Card.Img variant="top" src={i.url} width={100} className='p-0' />
                        <Card.Body>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text style={{ fontSize:'0.8rem'}} >
                            {i.content}
                            <br/>
                            <br />
                            <p style={{color:"red",textDecoration:"underline",fontSize:"15px"}}>{i.main ? "Note: Switch to desktop mode on mobile devices.":null}</p>
                            <Button variant="primary" href={i.github} target="_blank" className='mt-0 m-3 '>Github</Button>
                            <Button variant="danger" href={i.deployLink} target="_blank" className='mt-0 m-3 '>Go to website</Button>
                            </Card.Text>
                        </Card.Body>
                        </Card> 
                    ))}
           
            </div>
        </div>
    </div>
  );
}

export default Project;