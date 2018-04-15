import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
          <div className="button PraxisNext-Ultra">
            <span className="button-text">
              {this.props.title} 
            </span>
          </div>
        );
    }
}

export default Button;
