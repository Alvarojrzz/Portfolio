import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes añadir más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
