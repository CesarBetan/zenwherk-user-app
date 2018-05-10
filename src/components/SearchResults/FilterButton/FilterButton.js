import React, { Component } from 'react';
import './FilterButton.css';
import PropTypes from "prop-types";

class FilterButton extends Component {
    onClick() {
      const { title, onClick } = this.props;
      onClick(title);
    }

    render() {
        const { title2 } = this.props
        return (
          <div onClick={this.onClick.bind(this)} className="filter-button">
            <span className="filter-button-title">
              {title2}
            </span>
          </div>
        );
    }
}

FilterButton.defaultProps = {
    title: "",
    onClick: () => {
        console.log("Se espera función onClick");
    },
    title2: ""
};

FilterButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title2: PropTypes.string.isRequired
};

export default FilterButton;
