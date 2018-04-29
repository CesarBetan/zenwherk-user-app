import React, { Component } from 'react';
import './CompactPlaceCell.css';
import placeholderImage from '../../assets/Place/Place Hero.jpg'
import filledStar from '../../assets/Global/Green Filled Star.svg';
import emptyStar from '../../assets/Global/Green Empty Star.svg';

class CompactPlaceCell extends Component {
    render() {
        const result = this.props.place;
        return (
          <div className="search-result-cell-container PraxisNext-Heavy">
            <div className="search-result-cell-text-wrapper">
              <span className="search-result-cell-title">
                  {result.name}
              </span>
              <div className="search-result-cell-star-wrapper">
                <img className="search-result-cell-star-image"
                  alt={(result.rating > 0 && result.rating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.rating > 0 && result.rating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.rating  > 1 && result.rating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.rating > 1 && result.rating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.rating > 2 && result.rating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.rating > 2 && result.rating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.rating > 3 && result.rating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.rating > 3 && result.rating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.rating > 4 && result.rating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.rating > 4 && result.rating !== undefined)
                    ? filledStar : emptyStar}
                />
              </div>
              <span className="search-result-cell-reviews PraxisNext-Bold">
                  {
                      result.rating < 1 ?
                          result.category === 1 ?
                              "Coffee Shop"
                          :
                              result.category === 2 ?
                                  "Library"
                              :
                                  "Co-Working"
                      :
                          result.category === 1 ?
                              `Coffee Shop (★ ${result.rating})`
                              :
                              result.category === 2 ?
                                  `Library (★ ${result.rating})`
                                  :
                                  `Co-Working (★ ${result.rating})`
                  }
              </span>
            </div>
            <img className="search-result-cell-image" alt="Result"
                 src={
                     result.pictures.length > 0 ?
                         result.pictures[0].url
                     :
                         placeholderImage
                 }
            />
          </div>
        );
    }
}

export default CompactPlaceCell;
