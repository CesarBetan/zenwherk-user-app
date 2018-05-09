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
    latitude: "19.00",
    longitude: "90.00",
    address: "Dirección"
};

Address.propTypes = {
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

export default Address;
