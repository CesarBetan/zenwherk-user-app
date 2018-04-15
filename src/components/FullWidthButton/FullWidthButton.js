import React, { Component } from 'react';
import './FullWidthButton.css';

class FullWidthButton extends Component {
    render() {
        return (
          <div className={`full-width-button PraxisNext-Ultra ${this.props.className}`}>
            <span className="full-width-button-text">
              {this.props.title}
            </span>
          </div>
        );
    }
}

export default FullWidthButton;
