import React from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { formatDistanceToNow } from 'date-fns';
import '../styles/NewsCard.css';

const NewsCard = ({ report }) => {
  const {
    title,
    description,
    location,
    timestamp,
    imageUrl,
    isBreaking,
    isUrgent,
    upvotes,
    downvotes,
  } = report;

  // Default image if none provided
  const defaultImage = 'https://images.unsplash.com/photo-1504465039710-0371a06ec386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';

  return (
    <article className="news-card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="news-card-image-container">
        <img
          src={imageUrl || defaultImage}
          alt={title}
          className="news-card-image"
        />
        {(isBreaking || isUrgent) && (
          <div className="news-card-badges">
            {isBreaking && (
              <span className="badge-breaking">Breaking</span>
            )}
            {isUrgent && (
              <span className="badge-urgent">Urgent</span>
            )}
          </div>
        )}
      </div>

      <div className="news-card-content p-4">
        <h3 className="news-card-title text-gray-900 dark:text-white text-xl font-semibold">{title}</h3>
        <p className="news-card-description text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        
        <div className="news-card-metadata">
          <div className="news-card-location">
            <IoLocationOutline className="location-icon" />
            <span>{location}</span>
          </div>
          <span>{formatDistanceToNow(new Date(timestamp))} ago</span>
        </div>

        <div className="news-card-footer">
          <div className="vote-buttons">
            <button className="vote-button upvote">
              <BiUpvote size={20} />
              <span>{upvotes}</span>
            </button>
            <button className="vote-button downvote">
              <BiDownvote size={20} />
              <span>{downvotes}</span>
            </button>
          </div>
          <button className="view-details-button">View Details</button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;