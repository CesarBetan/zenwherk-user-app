import React, { Component } from 'react';
import './Address.css';
import SectionTitle from '../../SectionTitle';
import AddressCard from '../../AddressCard';

class Address extends Component {
    render() {
        return (
          <div className="address-container PraxisNext-ExtraBlack">
            <SectionTitle title="Address"/>
            <AddressCard/>
          </div>
        );
    }
}

export default Address;
