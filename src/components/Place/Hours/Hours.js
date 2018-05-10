import React, { Component } from 'react';
import './Hours.css';
import SectionTitle from '../../SectionTitle';
import HoursDescription from './HoursDescription';
import PropTypes from "prop-types";

class Hours extends Component {
    render() {
        return (
          <div className="place-hours-container PraxisNext-ExtraBlack">
            <SectionTitle title="Hours"/>
            <HoursDescription schedule={this.props.schedule}/>
          </div>
        );
    }
}

Hours.defaultProps = {
    schedule: []
};

Hours.propTypes = {
    schedule: PropTypes.array.isRequired
};

export default Hours;
