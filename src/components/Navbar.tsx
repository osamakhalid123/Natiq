import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">Natiq App</Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-5 align-items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/natiq"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Natiq
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
