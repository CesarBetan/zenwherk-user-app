import React, { Component } from 'react';
import './ReviewForm.css';
import SectionTitle from "../../../SectionTitle/SectionTitle";
import NavBar from "../../../NavBar/NavBar";
import {apiUrl} from "../../../../Constants";
import axios from "axios/index";

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        let uuid = this.props.match.params.uuid;
        this.state = { place : [], uuid: uuid };
        this.getPlace = this.getPlace.bind(this);
    }

    componentWillMount() {
        this.getPlace()
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

    render() {
        return (
          <div className="review-form-view">
              <NavBar/>
              <div>
                  <form className="form-style-user" onSubmit={this.handleSubmit}>
                      <ul className="PraxisNext-Bold">
                          <div className="isa_success" id="account-success">
                              La cuenta fue actualizada correctamente.
                              <a onClick={this.closeAccountSuccess}>X</a>
                          </div>
                          <div className="isa_error" id="account-pre-error">
                              {this.state.errorMessage}
                              <a onClick={this.closeAccountPreError}>X</a>
                          </div>
                          <div className="isa_error" id="account-error">
                              {this.state.errorServer}
                              <a onClick={this.closeAccountError}>X</a>
                          </div>
                          <span className="review-form-title PraxisNext-Ultra">Review</span>
                          <span className="review-form-place PraxisNext-ExtraBlack">{this.state.place.name}</span>
                          <span className="starRating">
                              <input id="rating5" type="radio" name="rating" value="5"/>
                              <label htmlFor="rating5">5</label>
                              <input id="rating4" type="radio" name="rating" value="4"/>
                              <label htmlFor="rating4">4</label>
                              <input id="rating3" type="radio" name="rating" value="3"/>
                              <label htmlFor="rating3">3</label>
                              <input id="rating2" type="radio" name="rating" value="2"/>
                              <label htmlFor="rating2">2</label>
                              <input id="rating1" type="radio" name="rating" value="1"/>
                              <label htmlFor="rating1">1</label>
                            </span>
                          <li>
                              <label htmlFor="name">Review</label>
                              <textarea rows="7" className="PraxisNext-Bold" name="name"
                                     onChange={this.handleChangeName}
                                     value={this.state.userName} />
                              <span>* Write a review</span>
                          </li>
                          <li>
                              <input type="submit" value="Review" />
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
        );
    }
}

export default ReviewForm;
