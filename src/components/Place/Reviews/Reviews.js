import React, { Component } from 'react';
import './Reviews.css';
import SectionTitle from '../../SectionTitle';
import ReviewsList from './ReviewsList';
import Button from '../../Button';
import { NavLink } from 'react-router-dom';
import FullWidthButton from "../../FullWidthButton/FullWidthButton";

class Reviews extends Component {
    render() {
        const reviews = this.props.reviews;
        const placeUuid = this.props.uuidPlace;
        return (
          <div className="reviews-container">
            <SectionTitle title={`Reviews (${reviews.length})`}/>
              {
                  localStorage.getItem('accesstoken') ?
                    <FullWidthButton href={'/place/' + placeUuid + '/review/create'} title={"Write Review"} targetBlank={false}/>
                    :
                        ""
              }
            <ReviewsList reviews={reviews} allReviews={false}/>
            {
              reviews.length > 2 ?
              <NavLink className="reviews-nav-link" to ={'/place/' + placeUuid + '/reviews'}>
                  <Button className="reviews-read-more-button" title="Read More"/>
              </NavLink>
              :
              ''
            }
          </div>
        );
    }
}

export default Reviews;
