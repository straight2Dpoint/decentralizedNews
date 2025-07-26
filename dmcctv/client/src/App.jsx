import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubmitNews from './components/SubmitNews';
import NewsMap from './components/NewsMap';
import TrendingNews from './components/TrendingNews';
import Home from './components/Home';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="flex flex-col py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<SubmitNews />} />
              <Route path="/map" element={<NewsMap />} />
              <Route path="/trending" element={<TrendingNews />} /> 
            </Routes>
        </div>
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
