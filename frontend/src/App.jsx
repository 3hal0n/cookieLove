import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#FFF8E1] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
