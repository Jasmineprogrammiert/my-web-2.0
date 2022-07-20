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




  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
    // 👇️ or set to true
    // setIsActive(true);
  };



  return (
    <>
    <div href="top" className="hero-image"></div>
    <h1 className="hero-text hero-text-name">
      <span 
        onMouseOver={() => setHeading(`${t("headingWelcome")}`)}
        onMouseLeave={() => setHeading(originalHeading)}
        style={{color: !setHeading ? "" : "#00FFFF"}}
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
      onClick={(e) => {handleLangChange(e); heading();}}
    >
      <span id="en">{t("EN")}</span>
    </Link>
    <Link 
      to="/de" 
      className="hero-text menu-de lang" 
      // would like to trigger 2 functions, doesn't work
      onClick={(e) => {handleLangChange(e); heading();}}
    >
     <span id="de">{t("DE")}</span>
    </Link>
    <Link 
      to="/fr" 
      className="hero-text menu-fr lang"
      onClick={(e) => {handleLangChange(e); heading();}}
    >
      <span id="fr">{t("FR")}</span>
    </Link>
    <Nav.Link 
      href="/sc" 
      className="hero-text menu-sc lang"
      onClick={(e) => {handleLangChange(e); heading();}}
      style={{
        fontFamily: "Noto Sans TC sans-serif",
        fontSize: "2vw",
        fontWeight: "lighter",
      }}
    >
      <span id="sc">{t("SC")}</span>
    </Nav.Link>
    <Nav.Link 
      href="/tc" 
      className="hero-text menu-tc lang"
      onClick={(e) => {handleLangChange(e); heading();}}
      style={{
        fontFamily: isActive ? "Noto Sans TC sans-serif" : "",
        fontSize: isActive ? "2vw" : "",
        fontWeight: isActive ? "lighter" : "",
      }}
    >
      <span id="tc">{t("TC")}</span>
    </Nav.Link>


    <div>
      <button
        style={{
          backgroundColor: isActive ? 'salmon' : 'black',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        Click
      </button>
    </div>




    </>
  )
}

export default Navigationbar;
