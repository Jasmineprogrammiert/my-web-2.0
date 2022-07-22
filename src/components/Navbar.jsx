import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigationbar = () => {
  const { i18n, t } = useTranslation(["navbar"]);
	const handleLangChange = e => {
		i18n.changeLanguage(e.target.id);
	};

  const originalHeading = `${t("aboutMe")}`;
  const updatedHeading = `${t("aboutMe1")}`;
  const [heading, setHeading] = useState(originalHeading);
  const handleHeading = () => {
    setHeading(`${t("aboutMe")}`);
  };

  const originalHeading1 = `${t("myBlogs")}`;
  const updatedHeading1 = `${t("myBlogs1")}`;
  const [heading1, setHeading1] = useState(originalHeading1);
  const handleHeading1 = () => {
    setHeading1(`${t("myBlogs")}`);
  };

  const originalHeading2 = `${t("Contact")}`;
  const updatedHeading2 = `${t("Contact1")}`;
  const [heading2, setHeading2] = useState(originalHeading2);
  const handleHeading2 = () => {
    setHeading2(`${t("Contact")}`);
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
    <Nav.Link 
      href="#about-me" 
      className={`hero-text hero-text-l menu-1 ${style1}`}
    >
      <span
         onMouseOver={() => setHeading(updatedHeading)}
         onMouseLeave={() => setHeading(originalHeading)}
      >
        {heading}
      </span>
    </Nav.Link> 
    <Nav.Link 
      href="https://deinelieblingsjasmin.com" 
      target="_blank" 
      rel="noreferrer" 
      className={`hero-text hero-text-l menu-2 ${style1}`}
    >
      <span
         onMouseOver={() => setHeading1(updatedHeading1)}
         onMouseLeave={() => setHeading1(originalHeading1)}
      >
        {heading1}
      </span>
    </Nav.Link>
    <Nav.Link 
      href="#contact" 
      className={`hero-text hero-text-l menu-3 ${style1}`}
    >
      <span
        onMouseOver={() => setHeading2(updatedHeading2)}
        onMouseLeave={() => setHeading2(originalHeading2)}
      >
        {heading2}
      </span>
    </Nav.Link> 
    <Link 
      to="/"
      className={`hero-text menu-en lang ${style}`}
      onClick={e => {
        handleLangChange(e); 
        handleHeading(); 
        handleHeading1(); 
        handleHeading2(); 
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
        handleHeading1(); 
        handleHeading2(); 
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
        handleHeading1(); 
        handleHeading2(); 
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
        handleHeading1(); 
        handleHeading2(); 
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
        handleHeading1(); 
        handleHeading2(); 
        handleStyleChange(); 
        handleStyleChange1()
      }}>
      <span id="tc">{t("TC")}</span>
    </Link>
    </>
  )
}

export default Navigationbar;
