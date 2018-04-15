import React, { Component } from 'react';
import './Services.css';
import SectionTitle from '../../SectionTitle';
import ServicesList from './ServicesList';
import { services } from './ServicesData';
import Button from '../../Button';

class Services extends Component {
    render() {
        return (
          <div className="reviews-container">
            <SectionTitle title="Services"/>
            <ServicesList services={services}/>
            <Button title="See All"/>
          </div>
        );
    }
}

export default Services;
