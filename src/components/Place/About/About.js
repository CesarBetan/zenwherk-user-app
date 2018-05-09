import React, { Component } from 'react';
import './About.css';
import SectionTitle from '../../SectionTitle';
import AboutDescription from './AboutDescription';
import FullWidthButton from '../../FullWidthButton';
import PropTypes from "prop-types";

class About extends Component {

    goToWebsite() {
      window.open()
    }

    render() {
        const { description, phone, website } = this.props;
        return (
          <div className="about-place-container PraxisNext-ExtraBlack">
            <SectionTitle title="About"/>
            <AboutDescription description={ description }/>
            <FullWidthButton className="about-place-full-width-button"
              title={`Call ${phone.substring(0, 3)}
              (${phone.substring(3, 5)}) ${phone.substring(5, 9)}
              ${phone.substring(9, 13)}`} href={`tel:${phone}`}
            />
            <FullWidthButton className="about-place-full-width-button"
              title="Visit Website" href={website}/>
          </div>
        );
    }
}

About.defaultProps = {
    description: "Descripción",
    phone: "+525512345678",
    website: "www.zenwherk-user"
};

About.propTypes = {
    description: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
};

export default About;
