import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubmitNews from './components/SubmitNews';
import NewsMap from './components/NewsMap';
import TrendingNews from './components/TrendingNews';
import Home from './components/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitNews />} />
            <Route path="/map" element={<NewsMap />} />
            <Route path="/trending" element={<TrendingNews />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
