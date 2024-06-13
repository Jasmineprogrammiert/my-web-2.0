import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Home from './pages/Home';
import About from './pages/About';
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