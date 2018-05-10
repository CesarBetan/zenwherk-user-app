import React, { Component } from 'react';
import './Address.css';
import SectionTitle from '../../SectionTitle';
import AddressCard from '../../AddressCard';
import PropTypes from "prop-types";

class Address extends Component {
    render() {
        const { latitude, longitude, address } = this.props;
        return (
          <div className="address-container PraxisNext-ExtraBlack">
            <SectionTitle title="Address"/>
            <AddressCard latitude={latitude} longitude={longitude}
            address={address}/>
          </div>
        );
    }
}

Address.defaultProps = {
    latitude: 0.0,
    longitude: 0.0,
    address: ""
};

Address.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired
};

export default Address;
