import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ItemDetail from './components/ItemDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-[#FFF8E1] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<ItemDetail />} />
        <Route path="*" element={<Hero />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
