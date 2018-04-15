import React, { Component } from 'react';
import './ReviewsList.css';
import ReviewCell from '../ReviewCell';

class ReviewsList extends Component {
    render() {
        const reviews = this.props.reviews;
        return (
          <div className="reviews-list-container">
            {
              reviews.sort((a,b) => a.date < b.date).slice(0,2).map((review, i) =>
                <ReviewCell key={i} review={review}/>
              )
            }
          </div>
        );
    }
}

export default ReviewsList;
