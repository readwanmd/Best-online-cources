import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';



const Header = () => {
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <ReactBootstrap.Navbar.Brand href="#home">Best Online Cources</ReactBootstrap.Navbar.Brand>
              <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="ml-auto">
                  <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="#aboutUs"> About us</ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="#cources">Cources</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
              </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    );
};

export default Header;