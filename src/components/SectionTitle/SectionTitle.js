import React, { Component } from 'react';
import './SectionTitle.css';
import PropTypes from "prop-types";

class SectionTitle extends Component {
    render() {
        return (
          <span className={`${this.props.className} section-title PraxisNext-ExtraBlack`}>
            {this.props.title}
          </span>
        );
    }
}

SectionTitle.defaultProps = {
    className: "",
    title: ""
};

SectionTitle.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SectionTitle;
