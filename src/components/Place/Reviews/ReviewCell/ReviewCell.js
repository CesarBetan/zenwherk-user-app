import React, { Component } from 'react';
import './ReviewCell.css';
import userPlaceholderImage from '../../../../assets/Place/Account Image Placeholder.svg'
import filledStar from '../../../../assets/Place/Filled Star.svg';
import emptyStar from '../../../../assets/Place/Empty Star.svg';
import moment from 'moment'

class ReviewsCell extends Component {
    render() {
      moment.updateLocale('en', {
        relativeTime : {
          future: "in %s",
          past:   "%s",
          s  : 'Just now',
          ss : '%ds ago',
          m:  "%dm ago",
          mm: "%dm ago",
          h:  "%dh ago",
          hh: "%dh ago",
          d:  "%dd ago",
          dd: "%dd ago",
          M:  "%dmo ago",
          MM: "%dmo ago",
          y:  "%dy ago",
          yy: "%dy ago"
        }
        });
        const review = this.props.review;
        return (
          <div className="review-cell-container">
            <div className="review-cell-user-wrapper">
              <img className="review-cell-user-image" alt="User Profile"
              src={review.userImage == null ?
                userPlaceholderImage : review.userImage}
              />
              <span className="review-cell-user-name PraxisNext-Bold">
                {review.userName}
              </span>
              <span className="review-cell-number-of-reviews PraxisNext-Bold">
                {review.numberOfUserReviews} reviews
              </span>
            </div>
            <div className="review-cell-body-wrapper">
              <div className="review-cell-header-wrapper">
                <div className="review-cell-star-wrapper">
                  <img className="review-cell-star-image"
                    alt={(review.rating > 0 && review.rating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.rating > 0 && review.rating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.rating > 1 && review.rating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.rating > 1 && review.rating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.rating > 2 && review.rating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.rating > 2 && review.rating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.rating > 3 && review.rating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.rating > 3 && review.rating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.rating > 4 && review.rating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.rating > 4 && review.rating != null)
                      ? filledStar : emptyStar}
                  />
                </div>
                <div className="review-cell-date PraxisNext-Regular">
                  {
                    moment.utc(review.date * 1000).isSameOrAfter(moment()
                    .subtract(24, 'hours')) ?
                    moment.utc(review.date * 1000).fromNow()
                    :
                    moment.utc(review.date * 1000).isSameOrAfter(moment()
                    .subtract(7, 'days')) ?
                    moment.utc(review.date * 1000).format("ddd")
                    :
                    moment.utc(review.date * 1000).isBefore(moment()
                    .subtract(319, 'days')) ?
                    moment.utc(review.date * 1000).fromNow()
                    :
                    moment.utc(review.date * 1000).format("D MMM")
                  }
                </div>
              </div>
              <div className="review-cell-content-wrapper PraxisNext-Regular">
                {review.content}
              </div>
            </div>
          </div>
        );
    }
}

export default ReviewsCell;
