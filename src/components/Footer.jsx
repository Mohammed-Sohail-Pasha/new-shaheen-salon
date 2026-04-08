import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-4 footer-inner">
        {/* About */ }
        <div className="footer-col">
          <h3>New Shaheen <span className="text-accent">Salon</span></h3>
          <p className="footer-desc">
            Bidar's trusted unisex salon offering professional hair, skin, bridal, and grooming services. With over 149 real 5-star reviews, we guarantee excellence.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram" style={{fontWeight: 'bold'}}>IG</a>
            <a href="#" aria-label="Facebook" style={{fontWeight: 'bold'}}>FB</a>
          </div>
        </div>

        {/* Quick Links */ }
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">All Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */ }
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#hair">Haircut & Styling</Link></li>
            <li><Link to="/services#skin">Facial & Skin Care</Link></li>
            <li><Link to="/services#bridal">Bridal Makeup</Link></li>
            <li><Link to="/services#grooming">Men's Grooming</Link></li>
          </ul>
        </div>

        {/* Contact Info */ }
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="text-accent" />
              <span>Bus Stand, Shop No 01, Shinde Complex, Bidar, Karnataka</span>
            </li>
            <li>
              <Phone size={18} className="text-accent" />
              <span>+91 99647 85000</span>
            </li>
            <li>
              <Mail size={18} className="text-accent" />
              <span>info@newshaheensalon.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} New Shaheen Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
