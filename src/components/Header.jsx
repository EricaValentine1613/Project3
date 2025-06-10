import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Song Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/AddSongs">Add Songs</Nav.Link>
          <Nav.Link as={Link} to="/SavedSongs">Saved Songs</Nav.Link>
          <Nav.Link as={Link} to="/ListSongs">List Songs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    

  )
}
