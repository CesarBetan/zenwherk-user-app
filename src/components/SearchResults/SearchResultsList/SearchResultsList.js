import React, { Component } from 'react';
import './SearchResultsList.css';

class SearchResultsList extends Component {
    render() {
        const results = this.props.results;
        return (
          <div>
            {
              results === undefined ?
              <div>
                No Results
              </div>
              :
              <div className="search-results-list-container">
                {
                  
                }
              </div>
            }
          </div>
        );
    }
}

export default SearchResultsList;
