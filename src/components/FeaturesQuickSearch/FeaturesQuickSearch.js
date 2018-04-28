import React, { Component } from 'react';
import './FeaturesQuickSearch.css';
import FeaturesQuickSearchCell from './FeaturesQuickSearchCell';
import { features } from './FeaturesQuickSearchData';

class FeaturesQuickSearch extends Component {
    render() {
        return (
            <div className="features-quick-search-container">
              <div className="features-quick-search-grid">
                {
                  features.map((feature, i) => (
                    <FeaturesQuickSearchCell key={i} feature={feature}/>
                  ))
                }
              </div>
            </div>
        );
    }
}

export default FeaturesQuickSearch;
