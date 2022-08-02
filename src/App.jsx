import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import About from './pages/About';
// import Contact from './components/Contact';
import OnProgress from './pages/OnProgress';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
import './assets/media.css';

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<OnProgress />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;