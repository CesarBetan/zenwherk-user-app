import React, { Component } from 'react';
import './ReviewsList.css';
import ReviewCell from '../ReviewCell';
import PropTypes from "prop-types";

class ReviewsList extends Component {
    render() {
        const reviews = this.props.reviews;
        const allReviews = this.props.allReviews;
        return (
          <div className="reviews-list-container">
            {
                allReviews ?
                    reviews.sort((a,b) => a.date < b.date).map((review, i) =>
                        <ReviewCell key={i} review={review}/>
                    )
                :
                    reviews.sort((a,b) => a.date < b.date).slice(0,2).map((review, i) =>
                        <ReviewCell key={i} review={review}/>
                    )
            }
          </div>
        );
    }
}

ReviewsList.defaultProps = {
    reviews: ["Arreglo de algunos reviews"],
    allReviews: false,
};

ReviewsList.propTypes = {
    reviews: PropTypes.array.isRequired,
    allReviews: PropTypes.bool.isRequired
};

export default ReviewsList;
