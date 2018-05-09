import React, { Component } from 'react';
import './ServiceCell.css';
import iconPlaceholderImage from '../../../../assets/Place/Icon Placeholder.svg'
import PropTypes from "prop-types";

class ServiceCell extends Component {

    imageForType(featureRaw) {
      switch (featureRaw) {
        case 1:
          return iconPlaceholderImage;
        case 2:
          return iconPlaceholderImage;
          case 3:
              return iconPlaceholderImage;
          case 4:
              return iconPlaceholderImage;
          case 5:
              return iconPlaceholderImage;
          case 6:
              return iconPlaceholderImage;
          case 7:
              return iconPlaceholderImage;
          case 8:
              return iconPlaceholderImage;
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

ServiceCell.defaultProps = {
    service: ["Arreglo con los datos de un service: featureEnum, iconAlt, featureDescription"]
};

ServiceCell.propTypes = {
    service: PropTypes.array.isRequired
};

export default ServiceCell;
