import React, { Component } from 'react';
import './AboutDescription.css';

class AboutDescription extends Component {
    render() {
        const description = this.props.description
        return (
          <div className="about-description-place-container PraxisNext-Heavy">
            <p className="about-description-place-text">
              { description }
            </p>
          </div>
        );
    }
}

export default AboutDescription;
