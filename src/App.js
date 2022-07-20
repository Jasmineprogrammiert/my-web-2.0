import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeDe from './pages/HomeDe';
import HomeFr from './pages/HomeFr';
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
    </Routes>
    </>
  );
}

export default App;
