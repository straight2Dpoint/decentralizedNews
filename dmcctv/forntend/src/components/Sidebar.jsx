import React from 'react';
import { BiCalendar, BiMap, BiCategory } from 'react-icons/bi';
import '../styles/Sidebar.css';

const categories = [
  'Community',
  'Events',
  'Crime',
  'Politics',
  'Weather',
  'Business',
  'Education'
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">
          <BiCalendar />
          Date Range
        </h3>
        <input
          type="date"
          className="date-input"
          placeholder="Start date"
        />
        <input
          type="date"
          className="date-input"
          placeholder="End date"
        />
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-heading">
          <BiMap />
          Location
        </h3>
        <input
          type="text"
          className="location-input"
          placeholder="Search location..."
        />
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-heading">
          <BiCategory />
          Categories
        </h3>
        <div className="category-list">
          {categories.map((category) => (
            <label key={category} className="category-item">
              <input
                type="checkbox"
                className="category-checkbox"
              />
              <span className="category-label">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
