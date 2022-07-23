import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Contact from '../components/Contact';

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <>
    <main id="about-me" name="about-me">
      <Link to="/" className="slideUp arrow-container">
        <span>
          <ArrowBackIosNewIcon to="/" className="arrow-back" />
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

      <div className="about-me">
        <p>
          Hello, my name is <i><strong>Jasmine Zeng</strong></i>. I am a full-stack web developer, a language enthusiast and a marketing undergraduate from Zhongshan, Mainland China, currently based in Hong Kong. As a person who values personal development to a great extent, I constantly strive to learn new skills and aim for proficiency.
        </p>
        <p>
          My interests extend beyond academic studies to web development, learning languages, hiking and traveling. 
          
          
          
          
          My first foray into it was in late 2021, when I wanted to create a blog showcasing my hiking experiences and photos. I quickly realized that building websites became a passion for me, as I am always eager to learn more so as to develop new features. Therefore, I fully committed myself into web development in summer 2022 by joining a bootcamp, acquiring languages, frameworks and other tools like HTML, CSS, JavaScript, Node.js, Jest, React, Redux Toolkit, PostgreSQL and Redis. Although there were countless challenges along the way, I truly enjoyed the learning experience. 
        </p>
        <p>
          Furthermore, I am an avid language devotee. A language acts like a bridge that connects me to people and their cultures on a deeper level. For this reason, I find it extremely fascinating. Right now, I am actively learning German and French after being fluent in English and Cantonese. 
        </p>




        <p>
          Besides the above hobbies, I also enjoy hiking, visiting historical and art museums, and exploring local neighborhoods for their food and cultures. If you are intrigued by my discoveries, please visit my <a href="https://deinelieblingsjasmin.com" target="_blank">blog</a>. 
        </p>
      </div>
    </main>
    {/* <Contact /> */}
    </>
  )
}

export default About;