import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { apiUrl } from '../../Constants';
import './SearchResults.css';
import queryString from 'query-string';
import NavBar from '../NavBar';
import SearchBar from './SearchBar';
import CompactPlaceCell from '../CompactPlaceCell';

class SearchResults extends Component {

    constructor(props) {
      super(props)
      this.state = {nameFilter: '', results: [],
      featureFilters: [], categoryFilters:[], url: document.URL}
      this.getResults = this.getResults.bind(this)
      this.onSearchRequested = this.onSearchRequested.bind(this)
    }

    componentWillMount() {
      this.renderQueryParams()
    }

    componentWillUpdate(nextProps, nextState) {
      if(nextState.url !== document.URL) {
        console.log("WILL DIFFERENT")
        this.setState({url: document.URL}, () => {
          this.renderQueryParams()
        })
      }
    }

    renderQueryParams(){
        const parsed = queryString.parse(this.props.location.search);
        let params = new URLSearchParams()
        let name = ''
        let categoryFilters = []
        let featureFilters = []
        if(typeof parsed.name === 'string' && parsed.name.trim().length > 0) {
          params.append("name", parsed.name)
          name = parsed.name
        } else if (typeof parsed.name === 'object' && parsed.name.length > 0) {
          params.append("name", parsed.name[0])
          name = parsed.name[0]
        }
        if(typeof parsed.categories === 'string' && parsed.categories.trim().length > 0) {
          params.append("categories", parsed.categories)
          categoryFilters.push(parsed.categories)
          this.setState({categoryFilters: categoryFilters})
        } else if(typeof parsed.categories === 'object' && parsed.categories.length > 0) {
          for(let i = 0; i < parsed.categories.length; i++) {
            params.append("categories", parsed.categories[i])
            categoryFilters.push(parsed.categories[i])
          }
        }
        if(typeof parsed.features === 'string' && parsed.features.trim().length > 0) {
          params.append("features", parsed.features)
          featureFilters.push(parsed.features)
        } else if(typeof parsed.features === 'object' && parsed.features.length > 0) {
          for(let i = 0; i < parsed.features.length; i++) {
            params.append("features", parsed.features[i])
            featureFilters.push(parsed.features[i])
          }
        }
        this.setState({nameFilter: name, categoryFilters: categoryFilters,
        featureFilters: featureFilters})
        let request = {
          params: params
        }
        this.getResults(request)
    }

    onSearchRequested(params) {
      this.props.history.replace('/search')
    }

    getResults(request) {
      const endpoint = apiUrl + 'public/place/'
      console.log("SEARCH")
      axios.get(endpoint, request).then(response => {
        console.log(response.status)
        switch (response.status) {
          case 200:
            this.setState({results: response.data.result})
            break;
          case 404:
            console.log("NOTHING TO SEE HERE")
            break;
          default:

        }
      })
    }

    render() {
        return (
            <div className="search-results-container">
              <NavBar/>
              <SearchBar featureFilters={this.state.featureFilters}
              nameFilter={this.state.nameFilter}
              categoryFilters={this.state.categoryFilters}
              onSearchRequested={this.onSearchRequested}/>
              {
                this.state.results.map((current, i) =>
                  <CompactPlaceCell key={i} place={current}/>
                )
              }
              {/*<CompactPlaceCell/>*/}
            </div>
        );
    }
}

export default SearchResults;
