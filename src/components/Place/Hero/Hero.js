import React, { Component } from 'react';
import './Hero.css';
import placeholderImage from '../../../assets/Place/Place Hero.jpg';
import empty_heart from '../../../assets/Place/empty_heart.svg';
import filled_heart from '../../../assets/Place/filled_heart.svg';
import moment from 'moment';
import {apiUrl} from "../../../Constants";
import axios from 'axios';
import PropTypes from "prop-types";

class Hero extends Component {

    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem("accesstoken")) {
            this.state = { isFavorite: false, isAuthenticated: true, endpoint: apiUrl+"user/", favEndpoint: apiUrl+'favorite', uuid: user.uuid, favoriteEvent: '' };
        } else {
            this.state = { isFavorite: false, isAuthenticated: false, endpoint: apiUrl+"user/", favEndpoint: apiUrl+'favorite', uuid: null, favoriteEvent: '' };
        }
    }

    componentWillMount() {
        if(localStorage.getItem("accesstoken")){
            const config = {
                headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
            };
            axios.get(this.state.endpoint + this.state.uuid, config).then(res => {
                const isFavorite = (res.data.favorites.filter((place) => place.uuid === this.props.placeUuid)).length > 0;
                this.setState({ isFavorite });
            });
        }
    }

    componentDidUpdate() {
      if(this.state.favoriteEvent === 'add') {
        this.addRemoveFavorite(true)
      } else if(this.state.favoriteEvent === 'remove') {
        this.addRemoveFavorite(false)
      }
    }

    onClickHeart() {
      if(this.state.isFavorite) {
        this.setState({favoriteEvent: 'remove', isFavorite: false });
      } else {
        this.setState({favoriteEvent: 'add', isFavorite: true });
      }
    }

    addRemoveFavorite(add) {
      const config = {
        headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
      };
      if(add) {
        axios.post(this.state.favEndpoint, {
          place: {
            uuid: this.props.placeUuid
          },
          user: {
            uuid: this.state.uuid
          }
        },config).then(res => {
          this.setState({ favoriteEvent: '', isFavorite: true });
        }).catch(() => {
          this.setState({ favoriteEvent: '', isFavorite: false });
        });
      } else {
        axios.delete(this.state.favEndpoint, {
          headers: config.headers,
          data: {
            place: {
              uuid: this.props.placeUuid
            },
            user: {
              uuid: this.state.uuid
            }
          }
        }).then(res => {
          this.setState({ favoriteEvent: '', isFavorite: false });
        }).catch((e) => {
          console.log(e);
          this.setState({ favoriteEvent: '', isFavorite: true });
        });
      }
    }


    getTodaysHours(schedule) {
      let currentDayNumber = moment().format("E")
      return [schedule[currentDayNumber - 1].shortOpeningTime, schedule[currentDayNumber - 1].shortClosingTime]
    }

    renderFavoriteHeart() {
      if(this.state.isAuthenticated ) {
        return (<div className="place-hero-favorite-heart-container" onClick={this.onClickHeart.bind(this)}>
                  <img alt="Heart" src={(this.state.isFavorite) ? filled_heart : empty_heart }
                       className="place-hero-favorite-heart"/>
                </div>);
      }

      return "";
    }

    render() {
        const { title, picture, schedule } = this.props
        let timesArray = this.getTodaysHours(schedule)
        let shortOpeningTime = timesArray[0]
        let shortClosingTime = timesArray[1]
        return (
          <div className="place-hero-container PraxisNext-ExtraBlack">
            { this.renderFavoriteHeart() }
            <div className="place-hero-wrapper">
              <span className="place-hero-name">{ title }</span>
              <div className="place-hero-hours-wrapper">
                <span className="place-hero-hours-title">Today's Hours</span>
                <br/>
                <span className="place-hero-hours">{shortOpeningTime} - {shortClosingTime}</span>
              </div>
            </div>
            <div className="place-card-image-overlay"/>
            <img className="place-hero-image" alt="Place" src={picture === undefined ? placeholderImage : picture.url}/>
          </div>
        );
    }
}

Hero.defaultProps = {
    schedule: ["Arreglo con datos de un schedule"],
    title: "Título",
    picture: ["Arreglo con los datos de la imágen"],
    placeUuid: "uuid de un lugar de 32 caracteres"

};

Hero.propTypes = {
    schedule: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.array.isRequired,
    placeUuid: PropTypes.string.isRequired
};

export default Hero;
