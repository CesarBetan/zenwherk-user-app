import React, { Component } from 'react';
import './SearchResultsList.css';
import CompactPlaceCell from '../../CompactPlaceCell';

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
                  results.map((place, i) => (
                      <CompactPlaceCell key={i} place={place}/>
                  ))
                }
              </div>
            }
          </div>
        );
    }
}

export default SearchResultsList;
