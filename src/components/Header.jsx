import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin, MapPinned } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      {/* Top Bar for quick information & primary CTA */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-info">
            <span className="info-item">
              <MapPin size={16} className="text-accent" />
              <span>Bidar, Karnataka - Open till 10 PM</span>
            </span>
            <span className="info-item">
              <span>⭐ 4.8 Rating (149+ Reviews)</span>
            </span>
          </div>
          <div className="top-cta">
            <a href="tel:+919964785000" className="call-now-text">
              <Phone size={16} /> Call: +91 99647 85000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-inner">
          <Link to="/" className="brand">
            <h1>New Shaheen <span className="text-accent">Salon</span></h1>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary btn-sm">
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
