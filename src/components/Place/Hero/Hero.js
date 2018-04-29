import React, { Component } from 'react';
import './Hero.css';
import placeholderImage from '../../../assets/Place/Place Hero.jpg';
import moment from 'moment';

class Hero extends Component {

    getTodaysHours(schedule) {
      let currentDayNumber = moment().format("E")
      return [schedule[currentDayNumber - 1].shortOpeningTime, schedule[currentDayNumber - 1].shortClosingTime]
    }

    render() {
        const { title, picture, schedule } = this.props
        let timesArray = this.getTodaysHours(schedule)
        let shortOpeningTime = timesArray[0]
        let shortClosingTime = timesArray[1]
        return (
          <div className="place-hero-container PraxisNext-ExtraBlack">
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

export default Hero;
