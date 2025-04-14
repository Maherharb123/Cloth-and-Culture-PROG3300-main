import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import HomePage from './pages/HomePage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import ShoesPage from './pages/ShoesPage';
import PantsPage from './pages/PantsPage'; // Add import for PantsPage
import ShirtsPage from './pages/ShirtsPage'; // Add import for ShirtsPage
import CoatsPage from './pages/CoatsPage'; // Add import for CoatsPage
import AccessoriesPage from './pages/AccessoriesPage'; // Add import for AccessoriesPage
import WatchesJewelryPage from './pages/WatchJewelryPage'; // Add import for WatchesJewelryPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/pants" element={<PantsPage />} />
        <Route path="/shirts" element={<ShirtsPage />} />
        <Route path="/coats" element={<CoatsPage />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/watch-jewelry" element={<WatchesJewelryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
