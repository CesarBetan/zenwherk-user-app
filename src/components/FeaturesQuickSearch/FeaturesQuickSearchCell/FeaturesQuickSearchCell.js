import React, { Component } from 'react';
import './FeaturesQuickSearchCell.css';
import placeholderIcon from '../../../assets/Global/FeatureQuickSearchPlaceholder.svg'

class FeaturesQuickSearchCell extends Component {
    render() {
        const feature = this.props.feature;
        return (
            <div className="features-quick-search-cell-container PraxisNext-CnSemiBold">
              <img
              alt={feature.iconAlt === null ? 'Feature Quick Search Icon'
              : feature.iconAlt}
              src={feature.icon === null ? placeholderIcon :  feature.icon}/>
            </div>
        );
    }
}

export default FeaturesQuickSearchCell;
