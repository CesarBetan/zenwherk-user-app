import React, { Component } from 'react';
import './AboutDescription.css';
import PropTypes from "prop-types";

class AboutDescription extends Component {
    render() {
        const description = this.props.description;
        return (
          <div className="about-description-place-container PraxisNext-Heavy">
            <p className="about-description-place-text">
              { description }
            </p>
          </div>
        );
    }
}

AboutDescription.defaultProps = {
    description: "Descripción"
};

AboutDescription.propTypes = {
    description: PropTypes.string.isRequired
};

export default AboutDescription;
