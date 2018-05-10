import React, { Component } from 'react';
import './FeaturesQuickSearch.css';
import FeaturesQuickSearchCell from './FeaturesQuickSearchCell';
import { features } from './FeaturesQuickSearchData';
import { withRouter } from 'react-router-dom';

class FeaturesQuickSearch extends Component {

    cellClicked(id) {
      this.props.history.push(`/search?features=${id}`);
    }

    render() {
        return (
            <div className="features-quick-search-container">
              <div className="features-quick-search-grid">
                {
                  features.map((feature) => (
                    <FeaturesQuickSearchCell key={feature.id} feature={feature} onClick={this.cellClicked.bind(this)}/>
                  ))
                }
              </div>
            </div>
        );
    }
}

export default withRouter(FeaturesQuickSearch);
