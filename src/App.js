import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import { Home } from './Home';
import { Contact } from './Contact';
import { Pricing } from './Pricing';
import { Header } from './Header';
import { About } from './About';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 381) {
      setMobileView(false)
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 380) {
      setMobileView(true)
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
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path='/' element={<Home menuOpen={menuOpen} mobileView={mobileView} />} />
          <Route path='/about' element={<About menuOpen={menuOpen} mobileView={mobileView} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
