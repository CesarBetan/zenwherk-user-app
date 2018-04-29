import React, { Component } from 'react';
import './Reviews.css';
import SectionTitle from '../../SectionTitle';
import ReviewsList from './ReviewsList';
import Button from '../../Button';

class Reviews extends Component {
    render() {
        const reviews = this.props.reviews
        return (
          <div className="reviews-container">
            <SectionTitle title={`Reviews (${reviews.length})`}/>
            <ReviewsList reviews={reviews}/>
            {
              reviews.length > 2 ?
              <Button className="reviews-read-more-button" title="Read More"/>
              :
              ''
            }
          </div>
        );
    }
}

export default Reviews;
