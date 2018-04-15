import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
          <div className="place-hero-container PraxisNext-ExtraBlack">
            <div className="place-hero-wrapper">
              <span className="place-hero-name">Nothing But Coffee</span>
              <div className="place-hero-hours-wrapper">
                <span className="place-hero-hours-title">Today's Hours</span>
                <br/>
                <span className="place-hero-hours">9AM - 10PM</span>
              </div>
            </div>
            <div className="place-hero-image-wrapper"></div>
          </div>
        );
    }
}

export default Hero;
