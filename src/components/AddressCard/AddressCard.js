import React, { Component } from 'react';
import './AddressCard.css';
import Map from '../Map'
import PropTypes from 'prop-types';

class AddressCard extends Component {

    render() {
        const { latitude, longitude, address } = this.props;
        const location = {
          lat: latitude,
          lng: longitude
        }
        return (
          <div className="address-card-container PraxisNext-ExtraBlack">
            <div className="address-card-map-wrapper">
              <Map title="Nothing But Coffee" location={location}/>
            </div>
            <div className="address-card-text-wrapper">
              {address}
            </div>
          </div>
        );
    }
}

AddressCard.defaultProps = {
    latitude: "[19.00]",
    longitude:"[90.00]",
    address: "[Dirección]"
};

AddressCard.propTypes = {
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

export default AddressCard;
