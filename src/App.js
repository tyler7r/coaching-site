import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import { Home } from './Home';
import { Contact } from './Contact';
import { Pricing } from './Pricing';
import { Header } from './Header';
import { About } from './About';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path='/' element={<Home menuOpen={menuOpen} />} />
          <Route path='/about' element={<About menuOpen={menuOpen} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
