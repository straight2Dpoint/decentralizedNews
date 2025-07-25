import React from 'react';

const NewsCard = ({ title, content, author, date, votes }) => {
    return (
        <div className="news-card">
            <h2>{title}</h2>
            <p>{content}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
            <p><strong>Votes:</strong> {votes}</p>
        </div>
    );
};

export default NewsCard;