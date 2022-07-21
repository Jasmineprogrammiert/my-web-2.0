import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeDe from './pages/HomeDe';
import HomeFr from './pages/HomeFr';
import HomeSc from './pages/HomeSc';
import HomeTc from './pages/HomeTc';
// folder
import './i18n';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';

function App() {
  return (
    <>
    <Navbar />   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="de" element={<HomeDe />} />
      <Route path="fr" element={<HomeFr />} />
      <Route path="sc" element={<HomeSc />} />
      <Route path="tc" element={<HomeTc />} />
    </Routes>
    </>
  );
}

export default App;
