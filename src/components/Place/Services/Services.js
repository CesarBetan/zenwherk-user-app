import React, { Component } from 'react';
import './Services.css';
import SectionTitle from '../../SectionTitle';
import ServicesList from './ServicesList';
import Button from '../../Button';
import PropTypes from "prop-types";

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

Services.defaultProps = {
    services: ["Arreglo de services"]
};

Services.propTypes = {
    services: PropTypes.array.isRequired
};

export default Services;
