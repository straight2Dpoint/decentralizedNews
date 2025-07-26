import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { Menu } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { connectWallet, currentAccount } = useContext(NewsContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Submit', path: '/submit' },
    { name: 'Trending', path: '/trending' },
    { name: 'Map', path: '/map' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          🧿 DMCCTV
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
