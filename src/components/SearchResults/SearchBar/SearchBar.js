import React, { Component } from 'react';
import './SearchBar.css';
import SearchBarFilter from '../SearchBarFilter';
import TextField from '../../TextField';
import FilterButton from '../FilterButton';
import smallDarkSearchIcon from '../../../assets/Global/small-dark-search-icon.svg';
import { apiUrl } from '../../../Constants';
import axios from 'axios';

class SearchBar extends Component {

    constructor(props) {
      super(props)
      this.state = { isFilterOpen: false, openTab: 'Categories' }
      this.onOpenFilter = this.onOpenFilter.bind(this)
      this.onCloseFilter = this.onCloseFilter.bind(this)
      this.onSelectFilter = this.onSelectFilter.bind(this)
    }

    onOpenFilter(title) {
      this.setState({isFilterOpen: true, openTab: title})
      document.body.style.overflow = "hidden";
    }

    onCloseFilter() {
      this.setState({isFilterOpen: false})
      document.body.style.overflow = "scroll";
    }

    onSelectFilter(filters, type) {
      this.onCloseFilter()
      const endpoint = apiUrl + 'public/place/'
      let params = new URLSearchParams()
      for(let i = 0; i < filters.length; i++) {
        console.log(type.toLowerCase())
        console.log(filters[i])
        params.append(type.toLowerCase(), filters[i])
      }
      console.log(params)
      let request = {
        params: params
      }

      axios.get(endpoint, request).then(response => {
        switch (response.status) {
          case 200:
            console.log(response.result)
            break;
          case 404:
            console.log("NOTHING TO SEE HERE")
            break;
          default:

        }
      })
      //console.log(filters)
      //console.log(type)
    }

    render() {
        return (
          <div className="search-bar-container PraxisNext-Heavy">
            <SearchBarFilter onSelectFilter={this.onSelectFilter} currentTab={this.state.openTab}
            className={this.state.isFilterOpen === true ?
            '' : 'search-bar-filter-close'}
            onCloseFilter={this.onCloseFilter}
            onSelectFilter={this.onSelectFilter}/>
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
