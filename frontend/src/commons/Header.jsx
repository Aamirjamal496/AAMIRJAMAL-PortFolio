import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigate = useNavigate();
  const Home =()=>{
    Navigate('/');
  }
  const About =()=>{
    Navigate('/about');
  }
  const ContactMe =()=>{
    Navigate('/contact');
  }
  return (
    <>
      <header>
        <div className='container py-1 fixed-top'>
          <Navbar collapseOnSelect expand="lg" bg='none' className="navbar-transparent rounded-4">
            <Container>
              <Navbar.Brand onClick={Home} className='d-flex p-3 logo'><h3 className='text-light fs-2'>A</h3><h3 className='J fs-2'>J</h3></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto text-light">
                  <Nav.Link onClick={Home} className="nav-link mx-3 text-light">Home</Nav.Link>
                  <Nav.Link onClick={About} className="nav-link mx-3 text-light">About</Nav.Link>
                  <Nav.Link onClick={ContactMe} className="nav-link mx-3 text-light">Contact Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
