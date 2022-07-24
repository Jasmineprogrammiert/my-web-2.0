import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import jasmine from '../assets/img/jasmine.png';
// import Contact from '../components/Contact';

const About = () => {
  const { t } = useTranslation(["about"]);
  // const { t, i18n } = useTranslation(["navbar"]);
	// const handleLangChange = e => {
	// 	i18n.changeLanguage(e.target.id);
	// };

  const originalHeading = <ArrowBackIosNewIcon />;
  const updatedHeading = `${t("arrow")}`;
  const [heading, setHeading] = useState(originalHeading);

  return (
    <>
    <main id="about-me" name="about-me">
      <Link to="/" className="arrow-back slideUp">
        <span
          to="/" 
          onMouseOver={() => setHeading(updatedHeading)}
          onMouseLeave={() => setHeading(originalHeading)}
        > {heading}
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
            Und <code></code>
          </Trans>
        </span>
      </h1>

      <img src={jasmine} alt="Jasmine" className="about-me-img" />

      <div className="about-me">
        <h2>About Me</h2>
        {/* <h1>About Me</h1> */}

        <p>
          <Trans i18nKey="about.about-1">
            <code></code>
          </Trans>
        </p>
        <p>
          {t("about.about-2")}
        </p>
        <p>
          {t("about.about-3")}
        </p>
        <p>
          {t("about.about-4")}
        </p>
        <p>
          {/* <a href="https://deinelieblingsjasmin.com" target="_blank">blog</a>. */}
          {t("about.about-5")}
        </p>
      </div>
    </main>
    {/* <Contact /> */}
    </>
  )
}

export default About;