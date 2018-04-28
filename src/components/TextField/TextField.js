import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {

    render() {
        const { name, placeholder, icon } = this.props;
        return (
          <div className={`textfield-container
            ${this.props.className}`}>
            <input className="textfield-input PraxisNext-Bold"
            type="text" name={name} placeholder={placeholder}/>
          </div>
        );
    }
}

export default TextField;
