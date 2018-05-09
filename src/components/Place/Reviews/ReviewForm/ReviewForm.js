import React, { Component } from 'react';
import './ReviewForm.css';
import NavBar from "../../../NavBar/NavBar";
import {apiUrl} from "../../../../Constants";
import axios from "axios/index";
import filledStar from '../../../../assets/Place/Filled Star.svg';
import emptyStar from '../../../../assets/Place/Empty Star.svg';
import PropTypes from "prop-types";

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        let uuid = this.props.match.params.uuid;
        let user = JSON.parse(localStorage.getItem('user'));
        if(user !== null){
            this.state = { place : [], endpoint: apiUrl+"review/", uuid: uuid, uuidUser: user.uuid, rating: 1 , reviewDescription: ""};
        }else{
            this.state = { place : [], endpoint: apiUrl+"review/", uuid: uuid, uuidUser: null, rating: 1 , reviewDescription: ""}
        }
        this.getPlace = this.getPlace.bind(this);

        this.handleReviewDescription = this.handleReviewDescription.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if(!localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }else {
            this.getPlace();
        }
    }

    handleReviewDescription(event) {
        this.setState({reviewDescription: event.target.value});
    }
    closeAccountSuccess(event) {
        document.getElementById("review-success").style.display = "none";
    }
    closeAccountError(event) {
        document.getElementById("review-error").style.display = "none";
    }
    closeAccountPreError(event) {
        document.getElementById("review-pre-error").style.display = "none";
    }

    getPlace() {
        const endpoint = apiUrl + 'public/place/';
        axios.get(endpoint + this.state.uuid).then(response => {
            switch (response.status) {
                case 200:
                    this.setState({place : response.data});
                    break;
                case 404:
                    console.log("NOTHING TO SEE HERE");
                    break;
                default:

            }
        })
    }

    changeRating(event){
        switch(event.target.value){
            case '5':
                this.setState({rating: 5});
                break;
            case '4':
                this.setState({rating: 4});
                break;
            case '3':
                this.setState({rating: 3});
                break;
            case '2':
                this.setState({rating: 2});
                break;
            case '1':
                this.setState({rating: 1});
                break;
            default:
                this.setState({rating: 1});
                break;
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""})
        if(this.state.reviewDescription.length < 5){
            this.setState({errorMessage: "La reseña debe tener al menos 3 caracteres."});
            document.getElementById("review-success").style.display = "none";
            document.getElementById("review-error").style.display = "none";
            document.getElementById("review-pre-error").style.display = "block";
        }else{
            if(localStorage.getItem("accesstoken")){
                const config = {
                    headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
                };
                axios.post(this.state.endpoint, {
                    reviewRating: this.state.rating,
                    reviewText: this.state.reviewDescription,
                    place: {
                        uuid: this.state.uuid
                    },
                    user: {
                        uuid: this.state.uuidUser
                    }
                  }, config
                ).then(res => {
                    document.getElementById("review-error").style.display = "none";
                    document.getElementById("review-pre-error").style.display = "none";
                    document.getElementById("review-success").style.display = "block";
                }).catch(err => {
                    this.setState({errorServer: err.response.data.message});
                    document.getElementById("review-pre-error").style.display = "none";
                    document.getElementById("review-success").style.display = "none";
                    document.getElementById("review-error").style.display = "block";
                });
            }
        }
    }

    render() {
        return (
          <div className="review-form-view">
              <NavBar/>
              <div>
                  <form className="form-style-user" onSubmit={this.handleSubmit}>
                      <ul className="PraxisNext-Bold">
                          <div className="isa_success" id="review-success">
                              Se ha creado tu review exitosamente.
                              <a onClick={this.closeAccountSuccess}>X</a>
                          </div>
                          <div className="isa_error" id="review-pre-error">
                              {this.state.errorMessage}
                              <a onClick={this.closeAccountPreError}>X</a>
                          </div>
                          <div className="isa_error" id="review-error">
                              {this.state.errorServer}
                              <a onClick={this.closeAccountError}>X</a>
                          </div>
                          <span className="review-form-title PraxisNext-Ultra">Review</span>
                          <span className="review-form-place PraxisNext-ExtraBlack">{this.state.place.name}</span>
                          <li className="li-star-rating">
                            <div className="star-rating">
                                <input id="rating1" type="radio" name="rating" defaultChecked value="1" onClick={this.changeRating}/>
                                <label htmlFor="rating1">
                                    <img className="search-result-cell-star-image"
                                         alt={(this.state.rating > 0 && this.state.rating !== undefined)
                                           ? "Filled Star" : "No Fill Star"}
                                         src={(this.state.rating > 0 && this.state.rating !== undefined)
                                           ? filledStar : emptyStar}
                                    />
                                </label>
                                <input id="rating2" type="radio" name="rating" value="2" onClick={this.changeRating}/>
                                <label htmlFor="rating2">
                                    <img className="search-result-cell-star-image"
                                         alt={(this.state.rating > 1 && this.state.rating !== undefined)
                                           ? "Filled Star" : "No Fill Star"}
                                         src={(this.state.rating > 1 && this.state.rating !== undefined)
                                           ? filledStar : emptyStar}
                                    />
                                </label>
                                <input id="rating3" type="radio" name="rating" value="3" onClick={this.changeRating}/>
                                <label htmlFor="rating3">
                                    <img className="search-result-cell-star-image"
                                         alt={(this.state.rating > 2 && this.state.rating !== undefined)
                                           ? "Filled Star" : "No Fill Star"}
                                         src={(this.state.rating > 2 && this.state.rating !== undefined)
                                           ? filledStar : emptyStar}
                                    />
                                </label>
                                <input id="rating4" type="radio" name="rating" value="4" onClick={this.changeRating}/>
                                <label htmlFor="rating4">
                                    <img className="search-result-cell-star-image"
                                         alt={(this.state.rating > 3 && this.state.rating !== undefined)
                                           ? "Filled Star" : "No Fill Star"}
                                         src={(this.state.rating > 3 && this.state.rating !== undefined)
                                           ? filledStar : emptyStar}
                                    />
                                </label>
                                <input id="rating5" type="radio" name="rating" value="5" onClick={this.changeRating}/>
                                <label htmlFor="rating5">
                                    <img className="search-result-cell-star-image"
                                         alt={(this.state.rating > 4 && this.state.rating !== undefined)
                                           ? "Filled Star" : "No Fill Star"}
                                         src={(this.state.rating > 4 && this.state.rating !== undefined)
                                           ? filledStar : emptyStar}
                                    />
                                </label>
                            </div>
                          </li>
                          <li>
                              <label htmlFor="description">Review</label>
                              <textarea rows="7" className="PraxisNext-Bold" name="description"
                                     onChange={this.handleReviewDescription}
                                     value={this.state.reviewDescription} />
                              <span>* Write a review</span>
                          </li>
                          <li>
                              <input type="submit" value="Publish" />
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
        );
    }
}

ReviewForm.defaultProps = {
    history: []
};

ReviewForm.propTypes = {
    history: PropTypes.array.isRequired
};

export default ReviewForm;
