import React, { useState } from 'react';
import { BiCalendar, BiMap, BiCategory } from 'react-icons/bi';
import MultiSelect from './MultiSelect';
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile category select - Only visible on mobile */}
      <div className="md:hidden w-full px-4 py-2">
        <MultiSelect
          options={categories}
          selectedOptions={selectedCategories}
          onChange={setSelectedCategories}
        />
      </div>

      {/* Desktop sidebar - Hidden on mobile */}
      <aside className="hidden md:block sidebar bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
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
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      setSelectedCategories(selectedCategories.filter(c => c !== category));
                    }
                  }}
                  className="category-checkbox"
                />
                <span className="category-label">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
