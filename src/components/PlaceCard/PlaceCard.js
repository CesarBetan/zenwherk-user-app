import React, { Component } from 'react';
import './PlaceCard.css';
import placeholderImage from '../../assets/Place/Place Hero.jpg';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class PlaceCard extends Component {

    onClick() {
      this.props.history.push(`/place/${this.props.featuredPlace.uuid}`);
    }

    render() {
        const { featuredPlace } = this.props;
        return (
          <div className="place-card-container PraxisNext-ExtraBlack" onClick={this.onClick.bind(this)}>
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

PlaceCard.defaultProps = {
    featuredPlace: {}
};

PlaceCard.propTypes = {
    featuredPlace: PropTypes.object.isRequired
};

export default withRouter(PlaceCard);
