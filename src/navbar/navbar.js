import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import icono from '../imagenes/LOGO/logooptica.png'
import Button from 'react-bootstrap/Button';
import whatsapp from '../imagenes/LOGO/whatsapp.png'
import { Link } from 'react-router-dom';
import instagram from '../imagenes/LOGO/instagram.png'
import facebook from '../imagenes/LOGO/facebook.ong.png'


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
                <NavLink to="/accesorios"><b>ACCESORIOS</b></NavLink>
              </Button>
            </Nav.Link>
            <Nav.Link >
              <Button variant="dark">
                <NavLink to="/nosotros"><b>NOSOTROS</b></NavLink>
              </Button>

            </Nav.Link>
            <div className='redes'>
              <Nav.Link bsPrefix='boton-redes'>
                <Button bsPrefix='logowhat' onClick={() => window.location.href = 'wa.me/2604053883'} variant='none'>
                  <Link to="wa.me/2604053883" target="_blank" rel="noopener noreferrer">
                    <img className='imagenwhat' src={whatsapp}></img>
                  </Link>
                </Button>

              </Nav.Link>
              <Nav.Link bsPrefix='boton-redes'>
                <Button bsPrefix='logowhat' onClick={() => window.location.href = 'www.instagram.com/visionsuroptica23/'} variant="none">
                  <Link to="www.instagram.com/visionsuroptica23/">
                    <img className='imagenwhat' src={instagram}></img>
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link bsPrefix='boton-redes'>
                <Button bsPrefix='logowhat' onClick={() => window.location.href = 'facebook.com/profile.php?id=100093681363279'} variant="none">
                  <Link to="www.facebook.com/profile.php?id=100093681363279">
                    <img className='imagenwhat' src={facebook}></img>
                  </Link>
                </Button>
              </Nav.Link>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;