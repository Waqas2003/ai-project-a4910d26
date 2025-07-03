import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero is-fullheight is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Welcome to Bidec!</h1>
          <p className="subtitle is-3">We're excited to have you on board!</p>
          <button className="button is-primary is-large">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;