import React, { Component } from 'react';
import './ReviewsAll.css';
import NavBar from "../../../NavBar/NavBar";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import {apiUrl} from "../../../../Constants";
import axios from "axios/index";
import ReviewsList from "../ReviewsList/ReviewsList";

class ReviewsAll extends Component {

    constructor(props) {
        super(props)
        let uuid = this.props.match.params.uuid;
        this.state = { reviews : [], uuid: uuid };
        this.getReviews = this.getReviews.bind(this);
    }

    componentWillMount() {
        this.getReviews()
    }

    getReviews() {
        const endpoint = apiUrl + 'public/place/';
        axios.get(endpoint + this.state.uuid).then(response => {
            switch (response.status) {
                case 200:
                    this.setState({reviews : response.data.reviews});
                    break;
                case 404:
                    console.log("NOTHING TO SEE HERE");
                    break;
                default:

            }
        })
    }

    render() {
        const reviews = this.state.reviews;
        return (
            <div className="reviews-all-view">
                <NavBar/>
                <div className="all-reviews-list">
                    <SectionTitle title={"Reviews"}/>
                    <ReviewsList reviews={reviews} allReviews={true}/>
                </div>
            </div>
        );
    }
}

export default ReviewsAll;