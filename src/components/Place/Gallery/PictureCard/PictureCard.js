import React, { Component } from 'react';
import './PictureCard.css';
import PropTypes from "prop-types";

class PictureCard extends Component {
    render() {
        const picture = this.props.picture;
        return (
          <div className="picture-card-container PraxisNext-ExtraBlack">
            <img className="picture-card-image" src={picture}
            alt="Place Gallery"/>
          </div>
        );
    }
}

PictureCard.defaultProps = {
    picture: "url de una imágen"
};

PictureCard.propTypes = {
    picture: PropTypes.string.isRequired
};

export default PictureCard;
