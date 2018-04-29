import React, { Component } from 'react';
import './FullWidthButton.css';

class FullWidthButton extends Component {
    render() {
        return (
          <a href={this.props.href} target="_blank" className={`full-width-button PraxisNext-Ultra ${this.props.className}`}>
            <span className="full-width-button-text">
              {this.props.title}
            </span>
          </a>
        );
    }
}

export default FullWidthButton;
