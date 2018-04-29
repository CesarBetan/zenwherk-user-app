import React, { Component } from 'react';
import './FilterButton.css';

class FilterButton extends Component {
    render() {
        const { title, onClick } = this.props
        return (
          <div onClick={onClick} className="filter-button">
            <span className="filter-button-title">
              {title}
            </span>
          </div>
        );
    }
}

export default FilterButton;
