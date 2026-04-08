import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    time: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send this to an API or email service
    alert(`Thank you, ${formData.name}! We will call you shortly to confirm your appointment.`);
    setFormData({ name: '', phone: '', service: '', time: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Book <span className="text-accent">Appointment</span></h1>
          <p>Get in touch with us to schedule your next visit or ask any questions.</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-2 contact-grid">
          
          {/* Contact Information */}
          <div className="contact-details-panel">
            <h2>Contact Information</h2>
            <p className="contact-subtitle">We'd love to hear from you. Give us a call or drop by our salon in Bidar.</p>
            
            <div className="contact-info-list">
              <div className="info-box">
                <MapPin className="text-accent" size={30} />
                <div>
                  <h4>Our Location</h4>
                  <p>Bus Stand, Shop No 01, Shinde Complex, Bidar, Karnataka</p>
                </div>
              </div>
              
              <div className="info-box">
                <Phone className="text-accent" size={30} />
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 99647 85000</p>
                </div>
              </div>

              <div className="info-box">
                <Clock className="text-accent" size={30} />
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <div className="whatsapp-box">
              <h3>Fastest Reply via WhatsApp</h3>
              <a href="https://wa.me/919964785000" target="_blank" rel="noopener noreferrer" className="btn btn-dark whatsapp-btn">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            <h2>Schedule a Visit</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Akash Singh" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 99999 99999" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Required *</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="" disabled>Select a service...</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="facial">Skin Care / Facial</option>
                  <option value="bridal">Bridal / Party Makeup</option>
                  <option value="grooming">Men's Grooming / Fade</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">Confirm Appointment Booking</button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Embed Section in Contact */}
      <div className="contact-map">
         <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121731.83842187766!2d77.4665476274486!3d17.915003180295627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce30b05b38aaef%3A0xc622616a2468352b!2sBidar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712600216442!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
