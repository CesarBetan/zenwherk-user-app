import React, { Component } from 'react';
import './Address.css';
import SectionTitle from '../../SectionTitle';
import AddressCard from '../../AddressCard';

class Address extends Component {
    render() {
        const { latitude, longitude, address } = this.props
        return (
          <div className="address-container PraxisNext-ExtraBlack">
            <SectionTitle title="Address"/>
            <AddressCard latitude={latitude} longitude={longitude}
            address={address}/>
          </div>
        );
    }
}

export default Address;
