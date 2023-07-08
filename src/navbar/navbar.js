import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import icono from '../imagenes/LOGO/logooptica.png'
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand >
          <NavLink to="/opticavision">
            <img class="icono" src={icono} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Button variant="dark">
                <NavLink class="link-negro" to="/lentesSol"><b>LENTES SOL</b></NavLink>
              </Button>

            </Nav.Link>
            <Nav.Link>
              <Button variant="dark">
                <NavLink to="/graduacion"><b>LENTES AUMENTO</b></NavLink>
              </Button>

            </Nav.Link>
            <Nav.Link >
              <Button variant="dark">
                <NavLink to="/nosotros"><b>ACCESORIOS</b></NavLink>
              </Button>
            </Nav.Link>
            <Nav.Link >
              <Button variant="dark">
                <NavLink to="/nosotros"><b>NOSOTROS</b></NavLink>
              </Button>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;