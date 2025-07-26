import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { ThemeContext } from '../context/ThemeContext';
import { Menu, Sun, Moon } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { connectWallet, currentAccount } = useContext(NewsContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Submit', path: '/submit' },
    { name: 'Trending', path: '/trending' },
    { name: 'Map', path: '/map' },
  ];

  return (
    <header className="navbar bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <img 
            src={darkMode ? "/logo-dark.png" : "/logo.png"} 
            alt="DMCCTV" 
            className="navbar-logo" 
          />
          <span className="navbar-title dark:text-white">DMCCTV</span>
        </NavLink>

        <nav className="desktop-nav">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-500" />
            )}
          </button>
          {!currentAccount ? (
            <button
              onClick={connectWallet}
              className="connect-wallet"
            >
              Connect Wallet
            </button>
          ) : (
            <span className="wallet-address">
              {currentAccount.slice(0, 6)}…{currentAccount.slice(-4)}
            </span>
          )}

          <button
            className="mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${!open ? 'hidden' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
