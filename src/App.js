import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Home from './pages/Home';
import HomeDe from './pages/HomeDe';
import HomeFr from './pages/HomeFr';
import HomeSc from './pages/HomeSc';
import HomeTc from './pages/HomeTc';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<Spinner />}>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navbar />} />
          <Route path="en" element={<Home />} />
          <Route path="de" element={<HomeDe />} />
          <Route path="fr" element={<HomeFr />} />
          <Route path="sc" element={<HomeSc />} />
          <Route path="tc" element={<HomeTc />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;