import React, { Component } from 'react';
import './HoursDescription.css';
import { hours } from '../HoursData';

class HoursDescription extends Component {
    render() {
        return (
          <div className="hours-description-container PraxisNext-Heavy">
            {
              hours.map((current, i) =>
                <div className="hours-description-wrapper" key={i}>
                  <span className="hours-description-day">
                    {current.day}
                  </span>
                  <span className="hours-description-times">
                    {
                      current.open ?
                      `${current.openingTime} - ${current.closingTime}`
                      : 'Closed'
                    }
                  </span>
                </div>
              )
            }
          </div>
        );
    }
}

export default HoursDescription;
