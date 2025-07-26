import React, { useState } from 'react';
import { BiCalendar, BiMap, BiCategory, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const categories = [
    'Marites',
    'Community',
    'Crime',
    'Events',
    'Politics',
    'Weather'
  ];

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="sidebar-toggle md:hidden"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle filters"
      >
        {isExpanded ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
      </button>

      <div className="sidebar-content">
        {/* Date Filter */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <BiCalendar /> Date Range
          </h3>
          <div>
            <input
              type="date"
              className="date-input"
              placeholder="Select date..."
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <BiMap /> Location
          </h3>
          <input
            type="text"
            placeholder="Search location..."
            className="location-input"
          />
        </div>

        {/* Category Filter */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <BiCategory /> Categories
          </h3>
          <div className="category-list">
            {categories.map((category) => (
              <label key={category} className="category-item">
                <input type="checkbox" className="category-checkbox" />
                <span className="category-label">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
