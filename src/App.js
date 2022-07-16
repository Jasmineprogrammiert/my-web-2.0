import './assets/global.css';
import Navigationbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
