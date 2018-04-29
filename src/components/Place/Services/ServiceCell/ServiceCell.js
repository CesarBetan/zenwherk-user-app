import React, { Component } from 'react';
import './ServiceCell.css';
import iconPlaceholderImage from '../../../../assets/Place/Icon Placeholder.svg'

class ServiceCell extends Component {

    imageForType(featureRaw) {
      switch (featureRaw) {
        case 1:
          return iconPlaceholderImage
        case 2:
          return iconPlaceholderImage
        default:

      }
    }

    render() {
        const service = this.props.service
        return (
          <div className="service-cell-container PraxisNext-Bold">
            <img className="service-cell-icon"
              src={this.imageForType(service.featureEnum)}
              alt={service.iconAlt}
            />
            <span className="service-cell-text">
              {service.featureDescription}
            </span>
          </div>
        );
    }
}

export default ServiceCell;
