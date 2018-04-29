import React, { Component } from 'react';
import './SearchBar.css';
import SearchBarFilter from '../SearchBarFilter';
import TextField from '../../TextField';
import FilterButton from '../FilterButton';
import smallDarkSearchIcon from '../../../assets/Global/small-dark-search-icon.svg';

class SearchBar extends Component {

    constructor(props) {
      super(props)
      this.state = { isFilterOpen: false }
      this.onOpenFilter = this.onOpenFilter.bind(this)
      this.onCloseFilter = this.onCloseFilter.bind(this)
    }

    onOpenFilter() {
      this.setState({isFilterOpen: true})
      document.body.style.overflow = "hidden";
    }

    onCloseFilter() {
      this.setState({isFilterOpen: false})
      document.body.style.overflow = "scroll";
    }

    render() {
        return (
          <div className="search-bar-container PraxisNext-Heavy">
            <SearchBarFilter className={this.state.isFilterOpen === true ?
            '' : 'search-bar-filter-close'}
            onCloseFilter={this.onCloseFilter}/>
            <TextField className="search-bar-textfield"
            name="query" placeholder="What do you need?"
            icon={smallDarkSearchIcon}/>
            <div className="search-buttons-wrapper">
              <span className="search-bar-filter-text">
                Filter by
              </span>
              <FilterButton onClick={this.onOpenFilter} title="Categories"/>
              <FilterButton onClick={this.onOpenFilter} title="Features"/>
            </div>
          </div>
        );
    }
}

export default SearchBar;
