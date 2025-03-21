import { NavLink } from "react-router-dom"
import "./navbar.css"
import { setActiveClass } from "../../utilities/setActive"
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap" // Add this line

export const Navbar = () => {
  return (
    <>
      <BootstrapNavbar expand="lg" className="navbar navbar-light bg-light">
        <Container fluid>
          <img
            className="gradient-border d-inline-block align-text-top"
            src="/raul.jpg"
            alt="foto de Raúl Rodríguez "
            width="110px"
            height="100%"
          />
          <p className="fs-2 ms-5 me-5">Raúl Rodríguez Clavero - Desarrollador</p>
          <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
          <BootstrapNavbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-0 mb-lg-0 fs-2 justify-content-evenly">
              <Nav.Item>
                <NavLink to="/" className={setActiveClass}>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/educacion" className={setActiveClass}>
                  Educación
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/experiencia" className={setActiveClass}>
                  Experiencia
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/portafolio" className={setActiveClass}>
                  Portafolio
                </NavLink>
              </Nav.Item>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  )
}

