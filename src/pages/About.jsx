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
          Hello, my name is <i><strong>Jasmine Zeng</strong></i>. I'm a Hong-Kong-based web developer and marketing undergrad with a passion for language learning, hiking, history, traveling and many more.
        </p>
        <p>
          I had a solo hike at the MacLehose Trail Section 2 while visiting Hong Kong in 2018. The beauty of the nature there fully captivated me, which among other factors led to the decision to pursue a higher education in HK.
        </p>
        <p>
          My stronghold in personal development drives my commitment to continual learning, so that I can contribute in a meaningful way to society. Marketing teaches exactly how by identifying people's needs and providing value through inspirational work and the use of technologies. And the joy of accomplishments is unneglectable. Therefore, I chose to major in marketing.
        </p>
        <p>
          I've become a avid hiker upon moving to HK. My hikes have provided me with many beautiful photos and experiences that I'd like to share. Originally, I posted them on Instagram, but the word limit made it difficult to put one post together, which sparked a bold idea to code my own hiking blog. Although I had no background in tech, I believe that anything is possible with action, consistency, and perseverance. I dived into web development in early 2022, and it was one of the best decisions I've ever made.
        </p>
        <p>
          It is my endless curiosity about the world that drives me to explore different fields. Aside from being a web deveoper, marketing undergrad and hiker, I also identify myself as an enthusiast in language, history, traveling, piano and many other things. More about my skills, experience and education can be found on my resume and <a href="https://deinelieblingsjasmin.com" target="_blank">blog</a>.
        </p>
      </div>
    </main>
    {/* <Contact /> */}
    </>
  )
}

export default About;