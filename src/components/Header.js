import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      {" "}
      <Navbar id="navbar" bg="dark">
        <Container>
          <Navbar.Brand href="/">Kayla Fischer</Navbar.Brand>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact me</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
