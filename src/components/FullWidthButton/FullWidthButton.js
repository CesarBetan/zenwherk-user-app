import React, { Component } from 'react';
import './FullWidthButton.css';

class FullWidthButton extends Component {

    onClick() {
        if(this.props.onClick !== undefined) {
            this.props.onClick();
        }
    }

    render() {
        return (
          this.props.targetBlank === false ?
            <a href={this.props.href}
               onClick={this.onClick.bind(this)}
               className={`full-width-button PraxisNext-Ultra ${this.props.className}`}>
                <span className="full-width-button-text">
                  {this.props.title}
                </span>
            </a>
          :
            <a href={this.props.href} target="_blank"
               onClick={this.onClick.bind(this)}
               className={`full-width-button PraxisNext-Ultra ${this.props.className}`}>
                <span className="full-width-button-text">
                  {this.props.title}
                </span>
            </a>
        );
    }
}

export default FullWidthButton;
