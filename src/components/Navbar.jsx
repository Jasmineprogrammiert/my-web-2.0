import Nav from 'react-bootstrap/Nav';

const Navigationbar = () => {
  return (
    <>
    <div className="hero-image"></div>
    <h1 className="hero-text hero-text-name"><span>Jasmine Zi Xin ZENG</span></h1>
    <Nav.Link href="#about-me" className="hero-text menu-1">
      <span>About me</span>
    </Nav.Link>
    <Nav.Link href="https://deinelieblingsjasmin.com" target="_blank" className="hero-text menu-2">
      <span>My blogs</span>
    </Nav.Link>
    <Nav.Link href="#contact" className="hero-text menu-3">
      <span>Contact</span>
    </Nav.Link>
    <Nav.Link href="#" className="hero-text menu-4 lang-letter">
      <span>🇩🇪 Deutsch</span>
    </Nav.Link>
    <Nav.Link href="#" className="hero-text menu-5 lang-letter">
      <span>🇫🇷 Français</span>
    </Nav.Link>
    <Nav.Link href="#" className="hero-text menu-6 lang-chinese">
      <span>🇨🇳 简体中文</span>
    </Nav.Link>
    <Nav.Link href="#" className="hero-text menu-7 lang-chinese">
      <span>🇭🇰 繁體中文</span>
    </Nav.Link>
    </>
  )
}

export default Navigationbar;
