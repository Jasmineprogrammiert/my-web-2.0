import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigationbar = () => {
  const { t, i18n } = useTranslation(["home"]);
	const handleLangChange = e => {
		i18n.changeLanguage(e.target.id);
	};

  const originalHeading = `${t("nav.aboutMe")}`;
  const originalHeading1 = `${t("nav.myBlog")}`;
  const originalHeading2 = `${t("nav.contact")}`;
  const updatedHeading = `${t("nav.aboutMe1")}`;
  const updatedHeading1 = `${t("nav.myBlog1")}`;
  const updatedHeading2 = `${t("nav.contact1")}`;

  const [heading, setHeading] = useState(originalHeading);
  const [heading1, setHeading1] = useState(originalHeading1);
  const [heading2, setHeading2] = useState(originalHeading2);
  const [isOriginal, setIsOriginal] = useState(true);

  const handleHeadings = () => {
    setHeading(`${t("nav.aboutMe")}`);
    setHeading1(`${t("nav.myBlog")}`);
    setHeading2(`${t("nav.contact")}`);
  }
  const handleMobileHeadings1 = () => {
    setHeading(updatedHeading);
    setHeading1(updatedHeading1);
    setHeading2(updatedHeading2);
    setIsOriginal(false)
  }
  const handleMobileHeadings2 = () => {
    setHeading(originalHeading);
    setHeading1(originalHeading1);
    setHeading2(originalHeading2);
    setIsOriginal(true)
  }

  return (
    <>
    <div href="top" className="bg-img" />
    <Link 
      to="/about" 
      className={`hero-text slideUp menu-1`}
    >
      <span
         onMouseOver={() => setHeading(updatedHeading)}
         onMouseLeave={() => setHeading(originalHeading)}
      >
        {heading}
      </span>
    </Link> 
    <Nav.Link 
      href="https://deinelieblingsjasmin.com" 
      target="_blank" 
      rel="noreferrer" 
      className={`hero-text slideUp menu-2`}
    >
      <span
         onMouseOver={() => setHeading1(updatedHeading1)}
         onMouseLeave={() => setHeading1(originalHeading1)}
      >
        {heading1}
      </span>
    </Nav.Link>
    <Link 
      to="/work" 
      className={`hero-text slideUp menu-3`}
    >
      <span
        onMouseOver={() => setHeading2(updatedHeading2)}
        onMouseLeave={() => setHeading2(originalHeading2)}
      >
        {heading2}
      </span>
    </Link> 
    <div
      className={`hero-text menu-en lang`}
      onClick={e => {
        handleLangChange(e);
        setTimeout(() => {
          handleHeadings();
        }, 100);
      }}
    >
      <span id="en">{t("lang.EN")}</span>
    </div>
    <div
      className={`hero-text menu-de lang`}
      onClick={e => {
        handleLangChange(e);
        setTimeout(() => {
          handleHeadings();
        }, 100);
      }}
    >
     <span id="de">{t("lang.DE")}</span>
    </div>
    <div
      className={`hero-text menu-fr lang`}
      onClick={e => {
        handleLangChange(e);
        setTimeout(() => {
          handleHeadings();
        }, 100);
      }}
    >
      <span id="fr">{t("lang.FR")}</span>
    </div>
    <div 
      className={`hero-text menu-sc lang`}
      onClick={e => {
        handleLangChange(e);
        setTimeout(() => {
          handleHeadings();
        }, 100);
      }}
    >
      <span id="sc">{t("lang.SC")}</span>
    </div>
    <div  
      className={`hero-text menu-tc lang`}
      onClick={e => {
        handleLangChange(e);
        setTimeout(() => {
          handleHeadings();
        }, 100);
      }}
    >
      <span id="tc">{t("lang.TC")}</span>
    </div>
    <div  
      className="tap-indication"
      onClick={() => { 
        isOriginal ? handleMobileHeadings1() : handleMobileHeadings2()
    }}>
      <span>
        {t("tap-indication")}
      </span>
    </div>
    </>
  )
}

export default Navigationbar;