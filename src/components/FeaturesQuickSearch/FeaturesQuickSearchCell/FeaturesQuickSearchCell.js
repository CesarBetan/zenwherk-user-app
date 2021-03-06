import React, { Component } from 'react';
import './FeaturesQuickSearchCell.css';
import placeholderIcon from '../../../assets/Global/FeatureQuickSearchPlaceholder.svg'

class FeaturesQuickSearchCell extends Component {
    onClick() {
      this.props.onClick(this.props.feature.id);
    }
    render() {
        const feature = this.props.feature;
        return (
            <div className="features-quick-search-cell-container PraxisNext-CnSemiBold" onClick={this.onClick.bind(this)}>
              <img className="features-quick-search-cell-icon"
              alt={feature.iconAlt === null ? 'Feature Quick Search Icon'
              : feature.iconAlt}
              src={feature.icon === null ? placeholderIcon :  feature.icon}/>
              <span className="features-quick-search-cell-title">
                { feature.name }
              </span>
            </div>
        );
    }
}

export default FeaturesQuickSearchCell;
