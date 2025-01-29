import { Nav, Navbar, Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleClose = () => setShowQR(false);
  const handleShow = () => setShowQR(true);

  return (
    <>
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
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/project" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            <Button variant="outline-none" onClick={handleShow} className="d-flex align-items-center justify-content-center">
              <i className="bi bi-upc-scan h4"></i>
            </Button>
          </Nav>



        </Navbar.Collapse>
      </Navbar>
      

      <Modal show={showQR} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan the QR code!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img 
            src="./assets/qr-code.png" 
            alt="QR code for aena teodocio's digital card" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}