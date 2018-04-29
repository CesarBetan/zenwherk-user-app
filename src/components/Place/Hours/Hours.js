import React, { Component } from 'react';
import './Hours.css';
import SectionTitle from '../../SectionTitle';
import HoursDescription from './HoursDescription';

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

export default Hours;
