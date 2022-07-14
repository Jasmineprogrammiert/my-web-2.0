import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigationbar = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" bg="light" expand="lg">
      <Container className="container-fluid">
        <Navbar.Brand className="h1 ms-4" id="nav-upperleft">Anything is possible with action, consistency and perseverance.</Navbar.Brand>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav ms-auto">
            <Nav.Link className="nav-link" aria-current="page" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#about-me">About Me</Nav.Link>
            <Nav.Link className="nav-link" href="#gallery">Gallery</Nav.Link>
            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
            <li className="nav-item dropdown">
              <NavDropdown className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" 
              aria-expanded="false" title="🇺🇸" id="navbarDropdown basic-nav-dropdown">🇺🇸</NavDropdown>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-menu-xl-start" aria-labelledby="navbarDropdown">
                <NavDropdown.Item><Nav.Link className="dropdown-item" href="/de.html">🇩🇪 Deutsch</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item><Nav.Link className="dropdown-item" href="/fr.html">🇫🇷 Français</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item><Nav.Link className="dropdown-item" href="/sc.html">🇨🇳 简体中文</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item><Nav.Link className="dropdown-item" href="/tc.html">🇭🇰 繁體中文</Nav.Link></NavDropdown.Item> 
              </ul>
            </li>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigationbar;
