import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import SubmitNews from './components/SubmitNews';
import NewsMap from './components/NewsMap';
import TrendingNews from './components/TrendingNews';
import Home from './components/Home';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem('hasVisited');
    if (visited) {
      setShowSplash(false);
    } else {
      localStorage.setItem('hasVisited', 'true');
    }
    setHasVisited(true);
  }, []);

  return (
    <ThemeProvider>
      {showSplash && hasVisited && <SplashScreen onFinish={() => setShowSplash(false)} />}
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
