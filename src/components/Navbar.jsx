import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigationbar = () => {
  const { i18n, t } = useTranslation(["navbar"]);
	const handleLangChange = e => {
		i18n.changeLanguage(e.target.id);
	};

  var originalHeading = `${t("headingName")}`
  const [heading, setHeading] = useState(originalHeading);

  return (
    <>
    <div href="top" className="hero-image"></div>
    <h1 className="hero-text hero-text-name">
      <span 
        onMouseOver={() => setHeading(`${t("headingWelcome")}`)}
        onMouseLeave={() => setHeading(originalHeading)}
        style={{color: !setHeading ? "yellow" : "#00FFFF"}}
      >
        {heading}
      </span>
    </h1>
    <Nav.Link 
      href="#about-me" 
      className="hero-text menu-1"
    >
      <span>{t("aboutMe")}</span>
    </Nav.Link> 
    <Nav.Link 
      href="https://deinelieblingsjasmin.com" 
      target="_blank" 
      rel="noreferrer" 
      className="hero-text menu-2"
    >
      <span>{t("myBlogs")}</span>
    </Nav.Link>
    <Nav.Link 
      href="#contact" 
      className="hero-text menu-3"
    >
      <span>{t("Contact")}</span>
    </Nav.Link> 
    <Link 
      to="/" 
      className="hero-text menu-en lang" 
      onClick={handleLangChange}
    >
      <span id="en">{t("EN")}</span>
    </Link>
    <Link 
      to="/de" 
      className="hero-text menu-de lang" 
      // would like to trigger 2 functions, doesn't work
      onClick={() => {handleLangChange(); setHeading();}}
    >
     <span id="de">{t("DE")}</span>
    </Link>
    <Link 
      to="/fr" 
      className="hero-text menu-fr lang" 
      onClick={handleLangChange}>
      <span id="fr">{t("FR")}</span>
    </Link>
    <Nav.Link 
      href="/sc" 
      className="hero-text menu-sc lang"
      onClick={handleLangChange}
    >
      <span id="sc">{t("SC")}</span>
    </Nav.Link>
    <Nav.Link 
      href="/tc" 
      className="hero-text menu-tc lang"
      onClick={handleLangChange}
    >
      <span id="tc">{t("TC")}</span>
    </Nav.Link>
    </>
  )
}

export default Navigationbar;
