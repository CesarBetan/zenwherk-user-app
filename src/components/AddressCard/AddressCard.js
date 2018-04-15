import React, { Component } from 'react';
import './AddressCard.css';
import Map from '../Map'

class AddressCard extends Component {
    render() {
        const dummyLocation = {
          lat: 34.061534,
          lng: -118.313043
        }
        return (
          <div className="address-card-container PraxisNext-ExtraBlack">
            <div className="address-card-map-wrapper">
              <Map title="Nothing But Coffee" location={dummyLocation}/>
            </div>
            <div className="address-card-text-wrapper">
              3952 Wilshire Blvd.<br/>
              Los Angeles, CA 90010<br/>
              United States
            </div>
          </div>
        );
    }
}

export default AddressCard;
