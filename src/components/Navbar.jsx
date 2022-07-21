import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigationbar = () => {
  const { i18n, t } = useTranslation(["navbar"]);
	const handleLangChange = e => {
		i18n.changeLanguage(e.target.id);
	};

  const originalHeading = `${t("headingName")}`;
  const updatedHeading = `${t("headingWelcome")}`;
  const [heading, setHeading] = useState(originalHeading);
  const handleHeading = () => {
    setHeading(`${t("headingName")}`);
  };

  const [style, setStyle] = useState("");
  const handleStyleChange = () => {
    setStyle("lang-cn-s");
  };
  const handleStyleChangeBack = () => {
    setStyle("lang");
  }

  const [style1, setStyle1] = useState("");
  const handleStyleChange1 = () => {
    setStyle1("lang-cn-l");
  };
  const handleStyleChange1Back = () => {
    setStyle1("hero-text");
  }

  return (
    <>
    <div href="top" className="hero-image"></div>
    <h1 className="hero-text">
      <span 
        onMouseOver={() => setHeading(updatedHeading)}
        onMouseLeave={() => setHeading(originalHeading)}
        style={{color: setHeading ? "#00FFFF" : ""}}
      >
        {heading}
      </span>
    </h1>
    <Nav.Link 
      href="#about-me" 
      className={`hero-text menu-1 ${style1}`}
    >
      <span>{t("aboutMe")}</span>
    </Nav.Link> 
    <Nav.Link 
      href="https://deinelieblingsjasmin.com" 
      target="_blank" 
      rel="noreferrer" 
      className={`hero-text menu-2 ${style1}`}
    >
      <span>{t("myBlogs")}</span>
    </Nav.Link>
    <Nav.Link 
      href="#contact" 
      className={`hero-text menu-3 ${style1}`}
    >
      <span>{t("Contact")}</span>
    </Nav.Link> 
    <Link 
      to="/"
      className={`hero-text menu-en lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleStyleChangeBack();
        handleStyleChange1Back();
      }}>
      <span id="en">{t("EN")}</span>
    </Link>
    <Link  
      to="/de"
      className={`hero-text menu-de lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleStyleChangeBack();
        handleStyleChange1Back()
      }}>
     <span id="de">{t("DE")}</span>
    </Link>
    <Link  
      to="/fr" 
      className={`hero-text menu-fr lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleStyleChangeBack();
        handleStyleChange1Back()
      }}>
      <span id="fr">{t("FR")}</span>
    </Link>
    <Link  
      to="/sc" 
      className={`hero-text menu-sc lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleStyleChange(); 
        handleStyleChange1()
      }}>
      <span id="sc">{t("SC")}</span>
    </Link>
    <Link  
      to="/tc" 
      className={`hero-text menu-tc lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleStyleChange(); 
        handleStyleChange1()
      }}>
      <span id="tc">{t("TC")}</span>
    </Link>
    </>
  )
}

export default Navigationbar;
