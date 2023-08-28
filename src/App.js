import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Pricing } from './Pricing';
import { Header } from './Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
