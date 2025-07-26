import React, { useState, useContext } from 'react';
import NewsCard from './NewsCard';
import Sidebar from './Sidebar';
import { NewsContext } from '../context/NewsContext';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import '../styles/Home.css';

const Home = () => {
  const [view, setView] = useState('grid');
  const { isLoading } = useContext(NewsContext);

  const dummyReports = Array(6).fill(0).map((_, i) => ({
    id: i,
    title: 'Breaking News: Local Community Event Makes Headlines',
    description: 'In an unprecedented turn of events, local residents gathered to celebrate the inauguration of a new community center that promises to revolutionize neighborhood activities...',
    location: 'Manila, Philippines',
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    imageUrl: `https://source.unsplash.com/random/800x600?news&${i}`,
    isBreaking: i === 0,
    isUrgent: i === 1,
    upvotes: Math.floor(Math.random() * 100),
    downvotes: Math.floor(Math.random() * 20),
    category: ['Community', 'Events'][Math.floor(Math.random() * 2)],
  }));

  return (
    <div className="home">
      <Sidebar />
      <main className="home-main">
        <div className="home-header">
          <h1 className="home-title">Latest Reports</h1>
          <div className="view-controls">
            <button
              onClick={() => setView('grid')}
              className={`view-button ${view === 'grid' ? 'active' : ''}`}
            >
              <BiGridAlt size={20} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`view-button ${view === 'list' ? 'active' : ''}`}
            >
              <BiListUl size={20} />
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className={`reports-grid ${view === 'grid' ? 'grid-view' : 'list-view'}`}>
            {dummyReports.map((report) => (
              <NewsCard key={report.id} report={report} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;