import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Googel Analytics on testing
// import ReactGA from 'react-ga4';

// ReactGA.initialize("G-RWQCJMQ1X1");
// ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
// ReactGA.event({
//   category: "your category",
//   action: "your action",
//   label: "your label", // optional
//   value: 99, // optional, must be a number
//   nonInteraction: true, // optional, true/false
//   transport: "xhr", // optional, beacon/xhr/image
// });

// components
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './components/Contact';
import OnProgress from './pages/OnProgress';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/global.css';
import './assets/media.css';

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<OnProgress />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;