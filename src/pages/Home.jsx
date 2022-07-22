import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
    <main id="about-me" name="about-me">
      <div className="about-me">
        <p>
          Hello, my name is <i><strong>Jasmine Zeng</strong></i>. I am a marketing undergraduate, a full-stack web developer and a language enthusiast originally from Zhongshan, Mainland China, currently based in Hong Kong. As a person who values personal development to a great extent, I constantly strive to learn new skills and aim for proficiency.
        </p>
        <p>
          My interests extend beyond academic studies to programming languages like HTML, CSS, JavaScript and Python. My first foray into web development was in late 2021. Initially, I only intended to create a blog showcasing my hiking experiences and photos. However, I soon realized that I really enjoy building websites and am always eager to learn more. Therefore, I fully committed myself to web development in early 2022, acquiring frameworks, libraries and other tools like jQuery, Sass, React, Node.js, Jest, PostgreSQL and Redux Toolkit. Although there were countless challenges along the way, I truly enjoyed the learning experience. 
        </p>
        <p>
          Furthermore, I am an avid language devotee. A language acts like a bridge that connects me to people and their cultures on a deeper level. For this reason, I find it extremely fascinating. Right now, I am actively learning German and French after being fluent in English and Cantonese.
        </p>
        <p>
          Besides the above hobbies, I also enjoy hiking, visiting historical and art museums, and exploring local neighborhoods for their food and cultures. If you are intrigued by my discoveries, please visit my <a href="https://deinelieblingsjasmin.com" target="_blank">blog</a>. 
        </p>
      </div>
    </main>
    <Contact />
    </>
  )
}

export default Home;