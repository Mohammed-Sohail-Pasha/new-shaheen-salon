import React from 'react';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About New Shaheen <span className="text-accent">Salon</span></h1>
          <p>Bidar's premier destination for premium styling and grooming since our inception.</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-2 about-story">
          <div className="about-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>Our Story</h2>
            <p className="lead-text">
              New Shaheen Salon was founded with a singular vision: to bring world-class grooming, hair, and beauty services to the heart of Bidar.
            </p>
            <p>
              Located conveniently near the Bus Stand at Shinde Complex, we've built our reputation on a foundation of hygiene, professionalism, and unparalleled customer service. With a 4.8-star rating from over 149 satisfied clients, we don't just provide a service; we offer a transformation.
            </p>
            <p>
              Whether you are preparing for your wedding day, looking for a refreshing facial, or simply needing a sharp fade, our experienced staff are dedicated to making you look and feel your absolute best.
            </p>
          </div>
          <div className="about-image">
            {/* Fallback image wrapper */}
            <div className="image-placeholder">
               <img src="/assets/hero_salon.png" alt="Inside New Shaheen Salon" />
            </div>
          </div>
        </div>
      </div>

      <div className="values-section section section-bg">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="grid grid-4 text-center mt-40">
            
            <div className="value-card">
              <Award className="text-accent value-icon" size={48} />
              <h3>Expert Stylists</h3>
              <p>Our team undergoes continuous training to bring you the latest trends and techniques.</p>
            </div>

            <div className="value-card">
              <ShieldCheck className="text-accent value-icon" size={48} />
              <h3>100% Hygiene</h3>
              <p>We use sanitized tools, disposable towels, and maintain a spotless environment.</p>
            </div>

            <div className="value-card">
              <Sparkles className="text-accent value-icon" size={48} />
              <h3>Premium Products</h3>
              <p>We only use genuine, top-tier brands for hair and skin treatments to ensure safety and superior results.</p>
            </div>

            <div className="value-card">
              <Users className="text-accent value-icon" size={48} />
              <h3>Client Centric</h3>
              <p>Every service is customized to your unique preferences, hair type, and skin tone.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
