import React, { Component } from 'react';
import './FilterButton.css';

class FilterButton extends Component {
    onClick() {
      const { title, onClick } = this.props;
      onClick(title);
    }

    render() {
        const { title } = this.props
        return (
          <div onClick={this.onClick.bind(this)} className="filter-button">
            <span className="filter-button-title">
              {title}
            </span>
          </div>
        );
    }
}

export default FilterButton;
