import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {

    constructor(props) {
      super(props)
      this.state = { hasText : false, text: '' }
    }

    onChange(event) {
      if(event.target.value === null || event.target.value === "") {
        this.setState({ hasText : false, text: '' })
      } else {
        this.setState({ hasText : true, text: event.target.value })
      }
    }

    onEnter() {
      this.props.onEnter(this.state.text);
    }

    _handleKeyPress (e)  {
      if (e.key === 'Enter') {
        this.onEnter();
      }
    }

    render() {
        const { name, placeholder, icon } = this.props;
        return (
          <div className={`textfield-container
            ${this.props.className}`}>
            {
              icon !== null ?
              <img alt="Magnifying Glass Icon" className={`textfield-image ${this.state.hasText ? '' : 'textfield-image-placeholder'}`} src={icon}/>
              :
              ''
            }
            <input onChange={this.onChange.bind(this)} onKeyPress={this._handleKeyPress.bind(this)} className="textfield-input PraxisNext-Bold"
            type="text" name={name} placeholder={placeholder} autoComplete="off"/>
          </div>
        );
    }
}

export default TextField;
