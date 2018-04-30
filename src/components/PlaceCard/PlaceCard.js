import React, { Component } from 'react';
import './PlaceCard.css';
import placeholderImage from '../../assets/Place/Place Hero.jpg';

class PlaceCard extends Component {
    render() {
        const { featuredPlace } = this.props;
        return (
          <div className="place-card-container PraxisNext-ExtraBlack">
            <div className="place-card-rounded-container">
              <div className="place-card-image-wrapper">
                <div className="place-card-image-overlay"/>
                <img className="place-card-image" alt="Place"
                src={
                  (featuredPlace.pictures === null || featuredPlace.pictures.length === 0) ?
                  placeholderImage : featuredPlace.pictures[0].url
                }/>
              </div>
              <div className="place-card-text-wrapper">
                <span className="place-card-name PraxisNext-Heavy">
                  { featuredPlace.name }
                </span>
                <span className="place-card-headline PraxisNext-SemiBold">
                  { featuredPlace.description }
                </span>
              </div>
            </div>
          </div>
        );
    }
}

export default PlaceCard;
