import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Star, Clock, CheckCircle, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Bidar’s Trusted Unisex Salon for <span className="text-accent">Hair, Skin & Grooming</span></h2>
            <p>Experience premium professional beauty services with a 4.8⭐ customer satisfaction rating. Step in for a glow-up today!</p>
            <div className="hero-cta">
              <a href="tel:+910000000000" className="btn btn-primary">
                <Phone size={20} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline hero-btn-outline">
                <Calendar size={20} /> Book Appointment
              </Link>
            </div>
            
            <div className="hero-trust">
              <div className="trust-badge">
                <Star size={18} fill="#D4AF37" color="#D4AF37" />
                <span>4.8 Rating (149+ Reviews)</span>
              </div>
              <div className="trust-badge">
                <Clock size={18} color="#D4AF37" />
                <span>Open Till 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Trust Indicators Section */}
      <section className="trust-indicators section">
        <div className="container grid grid-3 text-center">
          <div className="indicator-card">
            <CheckCircle size={40} className="text-accent indicator-icon" />
            <h3>Expert Professionals</h3>
            <p>10+ years of experienced staff dedicated to your look.</p>
          </div>
          <div className="indicator-card">
            <Clock size={40} className="text-accent indicator-icon" />
            <h3>Quick Service Time</h3>
            <p>From 30 min styling to 2 hour comprehensive grooming sessions.</p>
          </div>
          <div className="indicator-card">
            <Star size={40} className="text-accent indicator-icon" />
            <h3>Top Rated in Bidar</h3>
            <p>149+ satisfied customers vouch for our excellence.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section section-bg">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className="grid grid-4">
            
            <div className="service-simple-card">
              <div className="service-img-wrapper">
                 {/* Standard fallback placeholder but styled up */}
                 <div className="service-color-bg" style={{backgroundColor: '#f4ede6'}}></div>
              </div>
              <div className="service-info">
                <h3>Haircut & Styling</h3>
                <p>Trending cuts & nourishing spas.</p>
                <Link to="/services#hair" className="service-link">View Details &rarr;</Link>
              </div>
            </div>

            <div className="service-simple-card">
              <div className="service-img-wrapper">
                 <div className="service-color-bg" style={{backgroundColor: '#e6f4ed'}}></div>
              </div>
              <div className="service-info">
                <h3>Skin & Facial</h3>
                <p>Glow-up facials and skin repair.</p>
                <Link to="/services#skin" className="service-link">View Details &rarr;</Link>
              </div>
            </div>

            <div className="service-simple-card">
              <div className="service-img-wrapper">
                 <img src="/assets/bridal_makeup.png" alt="Bridal Makeup" />
              </div>
              <div className="service-info">
                <h3>Bridal Makeup</h3>
                <p>Stunning transformations for your big day.</p>
                <Link to="/services#bridal" className="service-link">View Details &rarr;</Link>
              </div>
            </div>

            <div className="service-simple-card">
              <div className="service-img-wrapper">
                 <img src="/assets/mens_grooming.png" alt="Men's Grooming" />
              </div>
              <div className="service-info">
                <h3>Men's Grooming</h3>
                <p>Crisp fades and precision beard trims.</p>
                <Link to="/services#grooming" className="service-link">View Details &rarr;</Link>
              </div>
            </div>

          </div>
          <div className="text-center mt-40">
            <Link to="/services" className="btn btn-dark">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-3">
            <div className="review-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
              </div>
              <p className="review-text">"Very good service, especially the facial. The staff is professional and they use genuine products. Highly recommended in Bidar!"</p>
              <h4 className="reviewer-name">- Arisha Khan</h4>
            </div>
            
            <div className="review-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
              </div>
              <p className="review-text">"Ambiance and staff work is excellent. Got a fade and beard alignment, best barber experience I've had locally."</p>
              <h4 className="reviewer-name">- Rahul G.</h4>
            </div>

            <div className="review-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
              </div>
              <p className="review-text">"Booked them for my cocktail party makeup. Absolutely loved the look. Soft, elegant and exactly what I wanted."</p>
              <h4 className="reviewer-name">- Sneha P.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner section">
        <div className="container text-center cta-inner">
          <h2>Ready For A Glow Up?</h2>
          <p>Limited slots available. Walk-in or book your appointment instantly.</p>
          <a href="tel:+910000000000" className="btn btn-primary cta-btn">
             <Phone size={20} /> Call Now To Book
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section section section-bg">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <div className="grid grid-2">
            <div className="location-details">
              <h3>Visit New Shaheen Salon</h3>
              <p className="address-text">
                <MapPin className="text-accent" size={24} />
                Bus Stand, Shop No 01, Shinde Complex,<br/> Bidar, Karnataka.
              </p>
              <div className="timing-info">
                <h4>Opening Hours:</h4>
                <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
              </div>
              <a href="tel:+910000000000" className="btn btn-dark mt-20">Call For Directions</a>
            </div>
            <div className="map-container">
               {/* Embed default Google map for Bidar as placeholder */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121731.83842187766!2d77.4665476274486!3d17.915003180295627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce30b05b38aaef%3A0xc622616a2468352b!2sBidar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712600216442!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
