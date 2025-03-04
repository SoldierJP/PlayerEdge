import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../customnav.css';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor:'#204051', fontFamily: 'Avenir Next, sans-serif' }}>
      <Container fluid>
      <Navbar.Brand as={Link} to="/" className="me-0 flex-grow-0" style={{color:'#fff',fontWeight: 'bold'}}>♠PLAYEREDGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-grow-1 justify-content-center">
          <Nav className="gap-5 me-5 nav-links" style={{color:'white',fontWeight: 'bold'}}>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/subscriptions" style={{ color: 'white' }}>Subscriptions</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/TS" style={{ color: 'white' }}>T&S</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className='btn btn-success flex-grow-0 ms-auto' style={{fontWeight: 'bold' }}>Log In</Button>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

