import React, { useState, useContext } from 'react';
import NewsCard from './NewsCard';
import Sidebar from './Sidebar';
import { NewsContext } from '../context/NewsContext';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import '../styles/Home.css';

const Home = () => {
  const [view, setView] = useState('grid');
  const { 
    isLoading, 
    reports, 
    useSampleData, 
    setUseSampleData,
    getAllReports
  } = useContext(NewsContext);

  const toggleDataSource = () => {
    setUseSampleData(!useSampleData);
    getAllReports();
  };

  return (
    <div className="home">
      <Sidebar />
      <main className="home-main">
        <div className="home-header">
          <h1 className="home-title">Latest Reports</h1>
          <div className="controls-wrapper">
            <button
              onClick={toggleDataSource}
              className={`data-toggle ${useSampleData ? 'sample' : 'live'}`}
            >
              {useSampleData ? 'Using Sample Data' : 'Using Live Data'}
            </button>
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
        </div>
        
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className={`reports-grid ${view === 'grid' ? 'grid-view' : 'list-view'}`}>
            {reports.map((report) => (
              <NewsCard key={report.id} report={report} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;