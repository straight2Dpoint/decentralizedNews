import React, { useContext, useEffect, useState } from 'react';
import { NewsContext } from '../context/NewsContext';
import NewsCard from './NewsCard';

const TrendingNews = () => {
  const { reports } = useContext(NewsContext);
  const [trendingReports, setTrendingReports] = useState([]);

  useEffect(() => {
    // Sort reports by verify count
    const sorted = [...reports].sort((a, b) => b.verifyCount - a.verifyCount);
    setTrendingReports(sorted.slice(0, 10)); // Get top 10
  }, [reports]);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-bold text-center mb-8">Trending News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingReports.map((report, index) => (
          <NewsCard report={report} />
        ))}
        
      </div>
    </div>
  );
};

export default TrendingNews;