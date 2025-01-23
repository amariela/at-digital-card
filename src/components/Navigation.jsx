import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      id="topNav" 
      collapseOnSelect 
      expand="sm" 
      className="fs-5 pb-4"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >

        <Navbar.Brand as={NavLink} to="/" className="bg-dark text-white px-3 rounded" onClick={() => setExpanded(false)}>
          aena.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}