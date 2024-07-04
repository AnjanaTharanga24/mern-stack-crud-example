import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../header/header.css';

export default function Header() {
  return (
    <div>
      <Navbar className="navbar"  data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="navbar-brand" as={Link} to="/">My App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link" >Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">Post User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

    </div>
  );
}
