import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello Cookie Love!
        </h1>
        <Footer />
      </div>
    </>
  )
}

export default App
