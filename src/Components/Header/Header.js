import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">Best Online Cources</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="Cart" id="collasible-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
        </div>
    );
};

export default Header;