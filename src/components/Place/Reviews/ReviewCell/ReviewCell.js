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
                {`${review.user.name} ${review.user.lastName.substring(0, 1)}.`}
              </span>
              <span className="review-cell-number-of-reviews PraxisNext-Bold">
                {review.numberOfUserReviews === undefined ? '' :
                review.numberOfUserReviews === 1 ? `${review.numberOfUserReviews} review`
                : `${review.numberOfUserReviews} reviews`}
              </span>
            </div>
            <div className="review-cell-body-wrapper">
              <div className="review-cell-header-wrapper">
                <div className="review-cell-star-wrapper">
                  <img className="review-cell-star-image"
                    alt={(review.reviewRating > 0 && review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.reviewRating > 0 && review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.reviewRating > 1 && review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.reviewRating > 1 && review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.reviewRating > 2 && review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.reviewRating > 2 && review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.reviewRating > 3 && review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.reviewRating > 3 && review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(review.reviewRating > 4 && review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(review.reviewRating > 4 && review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                </div>
                <div className="review-cell-date PraxisNext-Regular">
                  {
                    moment.utc(review.createdAt).isSameOrAfter(moment()
                    .subtract(24, 'hours')) ?
                    moment.utc(review.createdAt).fromNow()
                    :
                    moment.utc(review.createdAt).isSameOrAfter(moment()
                    .subtract(7, 'days')) ?
                    moment.utc(review.createdAt).format("ddd")
                    :
                    moment.utc(review.createdAt).isBefore(moment()
                    .subtract(319, 'days')) ?
                    moment.utc(review.createdAt).fromNow()
                    :
                    moment.utc(review.createdAt).format("D MMM")
                  }
                </div>
              </div>
              <div className="review-cell-content-wrapper PraxisNext-Regular">
                {review.reviewText}
              </div>
            </div>
          </div>
        );
    }
}

export default ReviewsCell;
