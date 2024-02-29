import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
// styles
import AOS from 'aos';
import Nav from 'react-bootstrap/Nav';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// local files
import jasmine from '../assets/img/jasmine-01.png';
import Contact from '../components/Contact';

const About = () => {
  const { t } = useTranslation(["about"]);

  const originalArrow = <ArrowBackIosNewIcon />;
  const updatedArrow = `${t("arrow")}`;
  const [arrow, setArrow] = useState(originalArrow);

  const originalLink = `${t("links.link-1")}`;
  const updatedLink = `${t("links.link-1-copy")}`;
  const [link, setLink] = useState(originalLink);

  useEffect(() => {    
    AOS.init({
      offset: 0,
      delay: 300,
      duration: 1800
    });
    window.addEventListener('load', AOS.refresh);
  });

  return (
    <>
    <main id="about-me" name="about-me">
      <Link to="/" className="arrow-back slideUp">
        <span
          to="/" 
          onMouseOver={() => setArrow(updatedArrow)}
          onMouseLeave={() => setArrow(originalArrow)}
        > 
          {arrow}
        </span>
      </Link>
      <h1 className="slideUp titles menu-4">
        <span>
          <Trans i18nKey="titles.title-1">
            I'm a <code></code>
          </Trans>
        </span>
      </h1> 
      <h1 className="slideUp titles menu-5">
        <span>
          <Trans i18nKey="titles.title-2">
            I also <code></code>
          </Trans>
        </span>
      </h1>
      <img src={jasmine} alt="Jasmine" className="about-me-img" />
      <div 
        className="about-me"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h2>{t("about.about-me")}</h2>
        <p>
          <Trans i18nKey="about.about-1">
            <code></code>
          </Trans>
        </p>
        <p>{t("about.about-2")}</p>
        <p>{t("about.about-3")}</p>
        <p>{t("about.about-4")}</p>
        <Nav.Link 
          href={'/files/Jasmine_ZENG_Résumé.pdf'} 
          target="_blank" 
          rel="noreferrer"
          className="links"
        >
          <span
            onMouseOver={() => setLink(updatedLink)}
            onMouseLeave={() => setLink(originalLink)}
          >
            {link}
          </span>
        </Nav.Link>
      </div>
    </main>
    <Contact />
    </>
  )
}

export default About;