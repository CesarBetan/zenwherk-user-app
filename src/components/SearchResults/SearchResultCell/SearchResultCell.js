import React, { Component } from 'react';
import './SearchResultCell.css';
import placeholderImage from '../../../assets/Place/Place Hero.jpg'
import filledStar from '../../../assets/Global/Green Filled Star.svg';
import emptyStar from '../../../assets/Global/Green Empty Star.svg';

class SearchResultCell extends Component {
    render() {
        const result = {}
        result.reviewRating = 9
        return (
          <div className="search-result-cell-container PraxisNext-Heavy">
            <div className="search-result-cell-text-wrapper">
              <span className="search-result-cell-title">
                Nothing But Coffee
              </span>
              <div className="search-result-cell-star-wrapper">
                <img className="search-result-cell-star-image"
                  alt={(result.reviewRating > 0 && result.reviewRating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.reviewRating > 0 && result.reviewRating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.reviewRating  > 1 && result.reviewRating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.reviewRating > 1 && result.reviewRating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.reviewRating > 2 && result.reviewRating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.reviewRating > 2 && result.reviewRating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.reviewRating > 3 && result.reviewRating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.reviewRating > 3 && result.reviewRating !== undefined)
                    ? filledStar : emptyStar}
                />
                <img className="search-result-cell-star-image"
                  alt={(result.reviewRating > 4 && result.reviewRating !== undefined)
                    ? "Filled Star" : "No Fill Star"}
                  src={(result.reviewRating > 4 && result.reviewRating !== undefined)
                    ? filledStar : emptyStar}
                />
              </div>
              <span className="search-result-cell-reviews PraxisNext-Bold">
                100k reviews
              </span>
            </div>
            <img className="search-result-cell-image" alt="Result" src={placeholderImage}/>
          </div>
        );
    }
}

export default SearchResultCell;
