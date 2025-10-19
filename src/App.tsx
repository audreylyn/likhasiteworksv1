import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import OurStory from './pages/OurStory';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';
import './styles/globals.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
