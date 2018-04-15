import React, { Component } from 'react';
import './About.css';
import SectionTitle from '../../SectionTitle';
import AboutDescription from './AboutDescription';
import FullWidthButton from '../../FullWidthButton';

class About extends Component {
    render() {
        return (
          <div className="about-place-container PraxisNext-ExtraBlack">
            <SectionTitle title="About"/>
            <AboutDescription/>
            <FullWidthButton className="about-place-full-width-button"
              title="Call +1 (213) 908-6610"
            />
            <FullWidthButton className="about-place-full-width-button"
              title="Visit Website"
            />
          </div>
        );
    }
}

export default About;
