import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../Constants';
import './SearchResults.css';
import queryString from 'query-string';
import NavBar from '../NavBar';
import SearchBar from './SearchBar';
import SearchResultCell from './SearchResultCell';

class SearchResults extends Component {

    renderQueryParams(){
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed.name)
        if(typeof parsed.name === 'string' && parsed.name.trim().length > 0) {
            return <span>Query params: { parsed.name }</span>
        }
        return "";
    }

    getResults() {
      const endpoint = apiUrl + 'public/place/'
      axios.get(endpoint + this.state.uuid).then(response => {
        switch (response.status) {
          case 200:
              this.setState({place : response.data})
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
              <SearchBar/>
              <SearchResultCell/>
              <p>SearchResults component! Please use q as a query params. {this.renderQueryParams()}</p>
            </div>
        );
    }
}

export default SearchResults;
