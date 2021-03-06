import React, { Component } from 'react';
import './NearPlacesList.css';
import CompactPlaceCell from '../../CompactPlaceCell';

class NearPlacesList extends Component {
    render() {
        document.title = "ZenWherk | Lugares Cercanos"
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
                      <CompactPlaceCell key={i} place={place} isNearPlace={true}/>
                  ))
                }
              </div>
            }
          </div>
        );
    }
}

export default NearPlacesList;
