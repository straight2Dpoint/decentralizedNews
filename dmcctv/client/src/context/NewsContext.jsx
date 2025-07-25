import React, { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [newsReports, setNewsReports] = useState([]);
    const [loading, setLoading] = useState(false);

    const addNewsReport = (report) => {
        setNewsReports([...newsReports, report]);
    };

    const voteOnReport = (reportId, vote) => {
        setNewsReports(newsReports.map(report => 
            report.id === reportId ? { ...report, votes: report.votes + vote } : report
        ));
    };

    return (
        <NewsContext.Provider value={{ newsReports, loading, addNewsReport, voteOnReport }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => {
    return useContext(NewsContext);
};