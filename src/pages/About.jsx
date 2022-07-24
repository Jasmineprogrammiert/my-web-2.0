import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import jasmine from '../assets/img/jasmine.png';
// import jasmine from '../assets/img/jasmine-00.jpg';
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
          Hello, my name is <i><strong>Jasmine Zeng</strong></i>. I'm a Hong-Kong-based web developer and marketing undergrad whose passions extend beyond to language learning, hiking, history, traveling and many more.
        </p>
        <p>
          While visiting Hong Kong in 2018, I had a solo hike at the MacLehose Trail Stage 2. The beauty of nature there was so enchanting to me as I grew up in a city without much nature, which, among other factors, led to the thought that relocating to HK might be a great idea.
        </p>
        <p>
          The following year, I moved to HK in pursuit of higher education and have become a avid hiker ever since. My hikes have provided me with many beautiful photos and experiences that I'd like to share. Originally, I posted them on Instagram, but the word limit made it difficult to put one post together, which sparked a bold idea to code my own hiking blog. Although I had no background in tech, I believe that anything is possible with action, consistency, and perseverance. I dived into web development in early 2022, and it was one of the best decisions I've ever made.
        </p>
        <p>
          My stronghold in personal development drives my commitment to continual learning so that I can contribute in a meaningful way to society. Through identifying people's needs and providing value through inspirational work and the use of technologies, marketing teaches exactly how to do that. And the joy of accomplishments is unneglectable. That's why I choose to major in marketing. 
        </p>
        <p>My curiosity about the world drives me to ... ...</p>
        {/* <p>
          Furthermore, I am an avid language devotee. A language acts like a bridge that connects me to people and their cultures on a deeper level. For this reason, I find it extremely fascinating. Right now, I am actively learning German and French after being fluent in English and Cantonese. 
        </p>
        <p>
          Besides the above hobbies, I also enjoy hiking, visiting historical and art museums, and exploring local neighborhoods for their food and cultures. If you are intrigued by my discoveries, please visit my <a href="https://deinelieblingsjasmin.com" target="_blank">blog</a>. 
        </p> */}
      </div>
    </main>
    {/* <Contact /> */}
    </>
  )
}

export default About;