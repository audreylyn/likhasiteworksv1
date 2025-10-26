import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import OurStory from './pages/OurStory';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import Rainbow from './components/Rainbow';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/globals.css';

// Component to handle dynamic titles with rainbow icons
const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToTitle: { [key: string]: string } = {
      '/': '🌈 likha siteworks',
      '/about': '🌈 About - likha siteworks',
      '/work': '🌈 Work - likha siteworks',
      '/works': '🌈 Work - likha siteworks',
      '/our-story': '🌈 Our Story - likha siteworks',
      '/quote': '🌈 Get Quote - likha siteworks',
    };

    const title = pathToTitle[location.pathname] || '🌈 Page Not Found - likha siteworks';
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default function App() {
  return (
    <>
      <DynamicTitle />
      <ScrollToTop />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/works" element={<Work />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/quote" element={<GetQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
