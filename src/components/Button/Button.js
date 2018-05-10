import React, { Component } from 'react';
import './Button.css';
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        let onClick = this.props.onClick
        return (
          <div onClick={onClick} className={`button PraxisNext-Ultra ${this.props.className}
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

Button.defaultProps = {
    onClick: () => {
        console.log("Faltó la función onClick")
    },
    className:"",
    color: "",
    title: ""
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Button;
