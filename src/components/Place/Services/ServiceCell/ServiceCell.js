import React, { Component } from 'react';
import './ServiceCell.css';
import iconPlaceholderImage from '../../../../assets/Place/Icon Placeholder.svg'

class ServiceCell extends Component {

    render() {
        const service = this.props.service
        return (
          <div className="service-cell-container PraxisNext-Bold">
            <img className="service-cell-icon"
              src={service.icon !== null ? service.icon : iconPlaceholderImage}
              alt={service.iconAlt}
            />
            <span className="service-cell-text">
              {service.text}
            </span>
          </div>
        );
    }
}

export default ServiceCell;
