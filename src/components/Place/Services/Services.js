import React, { Component } from 'react';
import './Services.css';
import SectionTitle from '../../SectionTitle';
import ServicesList from './ServicesList';
import Button from '../../Button';

class Services extends Component {
    render() {
        const services = this.props.services
        return (
          <div className="services-container">
            <SectionTitle title="Features"/>
            <ServicesList services={services}/>
            {
              services.length > 8 ?
              <Button className="services-show-all-button" title="See All"/>
              :
              ''
            }
          </div>
        );
    }
}

export default Services;
