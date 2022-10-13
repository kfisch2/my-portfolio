import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      {" "}
      <Navbar id="navbar" variant="dark" className="col">
        <Container>
          <Navbar.Brand>Kayla Fischer</Navbar.Brand>
          <Nav className="row">
            <Nav.Link href="/about" style={{textDecoration: 'none'}} className="col">About</Nav.Link>
            <Nav.Link href="/portfolio" style={{textDecoration: 'none'}} className="col">Portfolio</Nav.Link>
            <Nav.Link href="/contact" style={{textDecoration: 'none'}} className="col">Contact</Nav.Link>
            <Nav.Link href="/resume" style={{textDecoration: 'none'}} className="col">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
