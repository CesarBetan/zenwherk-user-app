import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
    render() {
        return (
          <span className="section-title PraxisNext-ExtraBlack">
            {this.props.title}
          </span>
        );
    }
}

export default SectionTitle;
