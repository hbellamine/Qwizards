import { Navbar, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "./NavBar.css";
import React from "react";

import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  const onClick = () => {
    props.history.push({
      pathname: "/newbookform",
    });
  };

  const home = () => {
    props.history.push({
      pathname: "/",
    });
  };

  const adminpanel = () => {
    props.history.push({
      pathname: "/adminpanel",
    });
  };

  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={home}>Qwizards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={home}>Home</Nav.Link>
            <Nav.Link onClick={adminpanel}>My Dashboard</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown> */}
          </Nav>
          <Button onClick={onClick} variant="contained" color="primary">
            Add a New Book
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
