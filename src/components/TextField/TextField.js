import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {

    constructor(props) {
      super(props)
      if (this.props.value !== undefined) {
        this.state = { hasText : this.props.value !== '', text: this.props.value }
      } else {
        this.state = { hasText : false, text: '' }
      }
    }

    onChange(event) {
      if(this.props.onTextChange !== undefined) {
        this.props.onTextChange(event.target.value);
      }
      if(event.target.value === null || event.target.value === "") {
        this.setState({ hasText : false, text: '' })
      } else {
        this.setState({ hasText : true, text: event.target.value })
      }
    }

    onEnter() {
      this.props.onEnter();
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
              <img alt="Magnifying Glass Icon"
              className={`textfield-image ${this.state.hasText ? '' :
              'textfield-image-placeholder'}`} src={icon}/>
              :
              ''
            }
            <input onChange={this.onChange.bind(this)}
            onKeyPress={this._handleKeyPress.bind(this)}
            className="textfield-input PraxisNext-Bold"
            type="text" name={name} placeholder={placeholder}
            autoComplete="off" value={this.state.text}/>
          </div>
        );
    }
}

export default TextField;
