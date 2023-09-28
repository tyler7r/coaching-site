import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';
import { Pricing } from './components/pricing/Pricing';
import { Header } from './components/header/Header';
import { About } from './components/about/About';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 391) {
      setMobileView(false)
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 390) {
      setMobileView(true)
      setMenuOpen(false);
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return _ =>{
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} mobileView={mobileView} />
        <Routes>
          <Route path='/' element={<Home menuOpen={menuOpen} mobileView={mobileView} />} />
          <Route path='/about' element={<About menuOpen={menuOpen} mobileView={mobileView} />} />
          <Route path='/contact' element={<Contact mobileView={mobileView} />} />
          <Route path='/pricing' element={<Pricing mobileView={mobileView} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
