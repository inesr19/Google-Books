import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarTab() {

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    <Nav.Link as={Link} to="/save">Saved Books</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
      </div>
    );
  }
  
  export default NavbarTab;