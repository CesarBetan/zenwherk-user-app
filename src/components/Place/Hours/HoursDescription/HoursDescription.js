import React, { Component } from 'react';
import './HoursDescription.css';
import PropTypes from "prop-types";

class HoursDescription extends Component {

    parseScheduleDay(current) {
      switch (current.day) {
        case 1:
          return 'Monday'
        case 2:
          return 'Tuesday'
        case 3:
          return 'Wednesday'
        case 4:
          return 'Thursday'
        case 5:
          return 'Friday'
        case 6:
          return 'Saturday'
        case 7:
          return 'Sunday'
        default:
          return null
      }
    }

    render() {
        const schedule = this.props.schedule;
        return (
          <div className="hours-description-container PraxisNext-Heavy">
            {
              schedule.map((current, i) =>
                <div className="hours-description-wrapper" key={i}>
                  <span className="hours-description-day">
                    { this.parseScheduleDay(current) }
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

HoursDescription.defaultProps = {
    schedule: []
};

HoursDescription.propTypes = {
    schedule: PropTypes.array.isRequired
};

export default HoursDescription;
