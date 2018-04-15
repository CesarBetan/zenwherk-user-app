import React, { Component } from 'react';
import './Reviews.css';
import SectionTitle from '../../SectionTitle';
import ReviewsList from './ReviewsList';
import { reviews } from './ReviewsData';
import Button from '../../Button';

class Reviews extends Component {
    render() {
        return (
          <div className="reviews-container">
            <SectionTitle title={`Reviews (${reviews.length})`}/>
            <ReviewsList reviews={reviews}/>
            <Button title="Read More"/>
          </div>
        );
    }
}

export default Reviews;
