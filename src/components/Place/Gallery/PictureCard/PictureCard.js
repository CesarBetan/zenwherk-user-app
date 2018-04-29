import React, { Component } from 'react';
import './PictureCard.css';

class PictureCard extends Component {
    render() {
        const picture = this.props.picture
        return (
          <div className="picture-card-container PraxisNext-ExtraBlack">
            <img className="picture-card-image" src={picture}
            alt="Place Gallery"/>
          </div>
        );
    }
}

export default PictureCard;
