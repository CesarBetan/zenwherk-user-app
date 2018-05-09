import React, { Component } from 'react';
import './TextField.css';
import PropTypes from "prop-types";

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

TextField.defaultProps = {
    onTextChange: () => {
        console.log("Se espera función onTextChange");
    },
    value: "value",
    onEnter: () => {
        console.log("Se espera función onEnter");
    },
    name: "nombre",
    placeholder: "placeholder",
    icon: "url de un ícono",
    className: "class-name"
};

TextField.propTypes = {
    onTextChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onEnter: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired

};

export default TextField;
