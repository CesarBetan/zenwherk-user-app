import React, { Component } from 'react';
import './FullWidthButton.css';
import PropTypes from "prop-types";

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

FullWidthButton.defaultProps = {
    onClick: () => {
        console.log("Hace falta la función onClick")
    },
    targetBlank: false,
    className:"custom-class",
    href: "www.zenwherk-user.firesbaseapp.com",
    title: "Título"
};

FullWidthButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    targetBlank: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default FullWidthButton;
