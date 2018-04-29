import React, { Component } from 'react';
import './SearchBarFilter.css';

class SearchBarFilter extends Component {

    componentWillMount() {
      document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
      document.body.style.overflow = "scroll";
    }

    render() {
        let onCloseFilter = this.props.onCloseFilter
        return (
          <div className={`${this.props.className}
          search-bar-filter-container PraxisNext-Heavy`}>
            <div className="search-bar-filter-cross-wrapper"
            onClick={onCloseFilter}>
              <div className="search-bar-filter-cross cross-left"/>
              <div className="search-bar-filter-cross cross-right"/>
            </div>
          </div>
        );
    }
}

export default SearchBarFilter;
