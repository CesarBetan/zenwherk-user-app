import React, { Component } from 'react';
import './ReviewCell.css';
import userPlaceholderImage from '../../../../assets/Place/Account Image Placeholder.svg'
import filledStar from '../../../../assets/Place/Filled Star.svg';
import emptyStar from '../../../../assets/Place/Empty Star.svg';
import moment from 'moment'
import {apiUrl} from "../../../../Constants";
import axios from "axios/index";

class ReviewsCell extends Component {

    constructor(props) {
        super(props);

        this.state = {endpoint: apiUrl, review: props.review, reportText: "Report"};

        this.reportReview = this.reportReview.bind(this);
    }

  reportReview(){
      const config = {
          headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
      };
      axios.post(this.state.endpoint + "review/" + this.state.review.uuid + "/report", null, config
      ).then(res => {
          console.log(res);
          document.getElementById("review-report-text"+this.state.review.uuid).classList.add('review-report-text');
          this.setState({reportText: "Reported"});
      }).catch(err => {
          console.log(err);
      });
  }

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
        return (
          <div className="review-cell-container">
            <div className="review-cell-user-wrapper">
              <img className="review-cell-user-image" alt="User Profile"
              src={this.state.review.userImage == null ?
                userPlaceholderImage : this.state.review.userImage}
              />
              <span className="review-cell-user-name PraxisNext-Bold">
                {`${this.state.review.user.name} ${this.state.review.user.lastName.substring(0, 1)}.`}
              </span>
                {
                    localStorage.getItem('accesstoken') ?
                      <span id={"review-report-text"+this.state.review.uuid} className="review-cell-number-of-reviews PraxisNext-Bold" onClick={this.reportReview}>
                        {/*{review.numberOfUserReviews === undefined ? '' :
                        review.numberOfUserReviews === 1 ? `${review.numberOfUserReviews} review`
                        : `${review.numberOfUserReviews} reviews`}*/}
                          {this.state.reportText}
                      </span>
                      :
                      ""
                }
            </div>
            <div className="review-cell-body-wrapper">
              <div className="review-cell-header-wrapper">
                <div className="review-cell-star-wrapper">
                  <img className="review-cell-star-image"
                    alt={(this.state.review.reviewRating > 0 && this.state.review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(this.state.review.reviewRating > 0 && this.state.review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(this.state.review.reviewRating > 1 && this.state.review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(this.state.review.reviewRating > 1 && this.state.review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(this.state.review.reviewRating > 2 && this.state.review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(this.state.review.reviewRating > 2 && this.state.review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(this.state.review.reviewRating > 3 && this.state.review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(this.state.review.reviewRating > 3 && this.state.review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                  <img className="review-cell-star-image"
                    alt={(this.state.review.reviewRating > 4 && this.state.review.reviewRating != null)
                      ? "Filled Star" : "No Fill Star"}
                    src={(this.state.review.reviewRating > 4 && this.state.review.reviewRating != null)
                      ? filledStar : emptyStar}
                  />
                </div>
                <div className="review-cell-date PraxisNext-Regular">
                  {
                    moment.utc(this.state.review.createdAt).isSameOrAfter(moment()
                    .subtract(24, 'hours')) ?
                    moment.utc(this.state.review.createdAt).fromNow()
                    :
                    moment.utc(this.state.review.createdAt).isSameOrAfter(moment()
                    .subtract(7, 'days')) ?
                    moment.utc(this.state.review.createdAt).format("ddd")
                    :
                    moment.utc(this.state.review.createdAt).isBefore(moment()
                    .subtract(319, 'days')) ?
                    moment.utc(this.state.review.createdAt).fromNow()
                    :
                    moment.utc(this.state.review.createdAt).format("D MMM")
                  }
                </div>
              </div>
              <div className="review-cell-content-wrapper PraxisNext-Regular">
                {this.state.review.reviewText}
              </div>
            </div>
          </div>
        );
    }
}

export default ReviewsCell;
