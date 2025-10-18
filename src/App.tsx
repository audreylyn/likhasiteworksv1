import React from 'react';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import './styles/globals.css';

export default function App() {
  return (
    <div className="text-black text-[16px] leading-[normal] w-full max-w-none mx-auto font-sans">
      <div className="min-h-full bg-[rgb(255,_253,_235)] text-[rgb(31,_31,_31)] leading-[22.4px] font-['Bricolage_Grotesque',sans-serif]">
        <Header />
        <BottomNavigation />
      </div>
    </div>
  );
}
