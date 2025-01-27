import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo1.png';
import '../App.css';

const Header = () => {
  return (
    <>
      <header>
        <div className='container py-1'>
          <Navbar collapseOnSelect expand="sm" bg='none' className="navbar-transparent rounded-4">
            <Container>
              <Navbar.Brand href="/" className='d-flex p-3'><h3 className='text-light fs-2'>A</h3><h3 className='J fs-2'>J</h3></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto text-light">
                  <Nav.Link href="/" className="nav-link mx-3 text-light">Home</Nav.Link>
                  <Nav.Link href="/about" className="nav-link mx-3 text-light">About</Nav.Link>
                  <Nav.Link href="/contact" className="nav-link mx-3 text-light">Contact Us</Nav.Link>
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
