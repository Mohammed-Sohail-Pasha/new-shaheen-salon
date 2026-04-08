import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our <span className="text-accent">Services</span></h1>
          <p>Premium grooming, styling, and beauty treatments tailored for you.</p>
        </div>
      </div>

      <div className="container section">
        
        {/* Hair Services */}
        <div id="hair" className="service-category">
          <div className="category-header">
            <h2>Haircut & Styling</h2>
            <div className="category-line"></div>
          </div>
          <div className="grid grid-2">
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Signature Haircut</h4>
                <p>Trending styles tailored to your face shape.</p>
              </div>
              <div className="service-price">From ₹250</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Hair Spa & Deep Conditioning</h4>
                <p>Revitalize damaged hair with our premium spa.</p>
              </div>
              <div className="service-price">From ₹800</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Hair Coloring / Highlights</h4>
                <p>Global colour, balayage, or simple root touch-ups.</p>
              </div>
              <div className="service-price">From ₹1200</div>
            </div>
          </div>
        </div>

        {/* Skin Services */}
        <div id="skin" className="service-category">
          <div className="category-header">
            <h2>Facial & Skin Care</h2>
            <div className="category-line"></div>
          </div>
          <div className="grid grid-2">
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Classic Glow Facial</h4>
                <p>Deep cleansing and massage for instant radiance.</p>
              </div>
              <div className="service-price">From ₹700</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Advanced Skin Treatment</h4>
                <p>Acne, pigmentation, and anti-aging treatments.</p>
              </div>
              <div className="service-price">From ₹1500</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>De-Tan & Bleach</h4>
                <p>Remove sun tan and even out skin tone effectively.</p>
              </div>
              <div className="service-price">From ₹400</div>
            </div>
          </div>
        </div>

        {/* Bridal Services */}
        <div id="bridal" className="service-category">
          <div className="category-header">
            <h2>Bridal Makeup & Styling</h2>
            <div className="category-line"></div>
          </div>
          <div className="grid grid-2">
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>HD & Airbrush Makeup</h4>
                <p>Flawless finish that lasts for 12+ hours.</p>
              </div>
              <div className="service-price">Custom</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Pre-Bridal Packages</h4>
                <p>Comprehensive glow-up sessions before the big day.</p>
              </div>
              <div className="service-price">Custom</div>
            </div>
          </div>
        </div>

        {/* Grooming Services */}
        <div id="grooming" className="service-category">
          <div className="category-header">
            <h2>Men's Grooming</h2>
            <div className="category-line"></div>
          </div>
          <div className="grid grid-2">
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Fade & Beard Alignment</h4>
                <p>Sharp, modern cuts and precision beard shaping.</p>
              </div>
              <div className="service-price">From ₹350</div>
            </div>
            <div className="service-item-card">
              <CheckCircle2 className="text-accent" size={24} />
              <div className="service-item-info">
                <h4>Head Massage</h4>
                <p>Relaxing oil massage for stress relief.</p>
              </div>
              <div className="service-price">From ₹300</div>
            </div>
          </div>
        </div>

        {/* CTA Banner inside services */}
        <div className="service-cta">
          <h3>Not sure what to choose?</h3>
          <p>Talk to our experts today for a free consultation!</p>
          <a href="tel:+919964785000" className="btn btn-primary mt-20">
             <Phone size={20} /> Call For Expert Advice
          </a>
        </div>

      </div>
    </div>
  );
};

export default Services;
