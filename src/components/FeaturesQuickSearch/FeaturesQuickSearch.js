import React, { Component } from 'react';
import './FeaturesQuickSearch.css';
import FeaturesQuickSearchCell from './FeaturesQuickSearchCell';
import { features } from './FeaturesQuickSearchData';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

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

FeaturesQuickSearch.defaultProps = {
    history: []
};

FeaturesQuickSearch.propTypes = {
    history: PropTypes.array.isRequired
};

export default withRouter(FeaturesQuickSearch);
