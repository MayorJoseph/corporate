import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" data-text="TechVerse">
          TechVerse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              Home<span></span>
            </Nav.Link>
            <Nav.Link href="#about">
              About<span></span>
            </Nav.Link>
            <Nav.Link href="#services">
              Services<span></span>
            </Nav.Link>
            <Nav.Link href="#works">
              Works<span></span>
            </Nav.Link>
            <Nav.Link href="#teams">
              Teams<span></span>
            </Nav.Link>
            <Nav.Link href="#testimonials">
              Testimonials<span></span>
            </Nav.Link>
            <Nav.Link href="#pricing">
              Pricing<span></span>
            </Nav.Link>
            <Nav.Link href="#blog">
              Blog<span></span>
            </Nav.Link>
            <Nav.Link href="#contact">
              Contact<span></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
