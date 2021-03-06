import React, { Component } from 'react';
import './SearchBar.css';
import SearchBarFilter from '../SearchBarFilter';
import TextField from '../../TextField';
import FilterButton from '../FilterButton';
import smallDarkSearchIcon from '../../../assets/Global/small-dark-search-icon.svg';

class SearchBar extends Component {

    constructor(props) {
      super(props)
      this.state = { isFilterOpen: false, openTab: 'Categories',
      searchBarText: '', categoryFilters: this.props.categoryFilters,
      featureFilters: this.props.featureFilters }
      this.onOpenFilter = this.onOpenFilter.bind(this)
      this.onCloseFilter = this.onCloseFilter.bind(this)
      this.onSelectFilter = this.onSelectFilter.bind(this)
      this.onEnter = this.onEnter.bind(this)
      this.onSearchRequested = this.onSearchRequested.bind(this)
      this.onTextChange = this.onTextChange.bind(this)
    }

    onOpenFilter(title) {
      this.setState({isFilterOpen: true, openTab: title})
      document.body.style.overflow = "hidden";
    }

    onCloseFilter() {
      this.setState({isFilterOpen: false})
      document.body.style.overflow = "scroll";
    }

    onSelectFilter(categoryFilters, featureFilters) {
      this.onCloseFilter()
      this.setState({categoryFilters: categoryFilters,
        featureFilters: featureFilters}, () => {
          this.onSearchRequested(this.state.categoryFilters,
          this.state.featureFilters)
        })
    }

    onEnter() {
      this.onSearchRequested(this.state.categoryFilters,
      this.state.featureFilters)
    }

    onSearchRequested(categoryFilters, featureFilters) {
      let params = new URLSearchParams()
      if(this.state.searchBarText !== '') {
        params.append("name", this.state.searchBarText)
      }
      for(let i = 0; i < categoryFilters.length; i++) {
        params.append("categories", categoryFilters[i])
      }
      for(let i = 0; i < featureFilters.length; i++) {
        params.append("features", featureFilters[i])
      }
      this.props.onSearchRequested(params)
    }

    onTextChange(newValue) {
      this.setState({searchBarText : newValue})
    }

    render() {
        return (
          <div className="search-bar-container PraxisNext-Heavy">
            <SearchBarFilter onSelectFilter={this.onSelectFilter}
            categoryFilters={this.state.categoryFilters}
            featureFilters={this.state.featureFilters}
            currentTab={this.state.openTab}
            className={this.state.isFilterOpen === true ?
            '' : 'search-bar-filter-close'}
            onCloseFilter={this.onCloseFilter}/>
            <TextField className="search-bar-textfield"
            name="query" placeholder="What do you need?"
            icon={smallDarkSearchIcon}
            value={this.props.nameFilter}
            onTextChange={this.onTextChange}
            onEnter={this.onEnter}
            />
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
