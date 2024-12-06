import React from 'react';
import { NavLink } from 'react-router-dom'; // For active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <Navbar bg="danger" variant="light">
      <Container>
        <Navbar.Brand href="#home">Theo's Site</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies">Hobbies</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
