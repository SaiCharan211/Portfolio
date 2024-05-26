import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
function NavbarItem() {
  return (
    <Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="/" className='navItems'><i className="fa-solid fa-house "></i> Home</Nav.Link>
            <Nav.Link href="/about" className='navItems'><i className="fa-solid fa-address-card"></i> About</Nav.Link>
            <Nav.Link href="/project" className='navItems'><i className="fa-solid fa-diagram-project"></i> Projects</Nav.Link>
            <Nav.Link href="skills" className='navItems'><i className="fa-solid fa-pen-ruler"></i> Skills</Nav.Link>
            <Nav.Link href="resume" className='navItems'><i className="fa-solid fa-pen-ruler"></i> Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;