import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
          <div className={`button PraxisNext-Ultra ${this.props.className}
            ${this.props.color == null ? '' : this.props.color === 'white'
            ? 'white-button' : 'green-button'
            }
          `}>
            <span className="button-text">
              {this.props.title}
            </span>
          </div>
        );
    }
}

export default Button;
