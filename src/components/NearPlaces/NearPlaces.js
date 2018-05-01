import React, { Component } from 'react';
import './NearPlaces.css';
import axios from 'axios';
import { apiUrl } from '../../Constants';
import queryString from 'query-string';
import NavBar from '../NavBar';
import SectionTitle from '../SectionTitle';
import NearPlacesMap from './NearPlacesMap';
import NearPlacesList from './NearPlacesList';

class NearPlaces extends Component {

    constructor(props) {
      super(props)
      this.state = {center: '', results: []}
      this.getNearPlaces = this.getNearPlaces.bind(this)
    }

    renderQueryParams(){
        const parsed = queryString.parse(this.props.location.search);
        let value = '';
        if(typeof parsed.category === 'string' && parsed.category.trim().length > 0) {
            value += ' Categoria: ' + parsed.category;
        }
        if(typeof parsed.lat === 'string' && parsed.lat.trim().length > 0) {
            value += ' Latitud: ' + parsed.lat;
        }
        if(typeof parsed.long === 'string' && parsed.long.trim().length > 0) {
            value += ' Longitud: ' + parsed.long;
        }

        return (
            <span>Query params: {value}</span>
        );
    }

    componentWillMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getNearPlaces)
      } else {
        console.log("Geolocation is not supported")
      }
    }

    getNearPlaces(location) {
      let params = new URLSearchParams()
      params.append("latitude", location.coords.latitude)
      params.append("longitude", location.coords.longitude)

      let request = {
        params: params
      }

      let endpoint = apiUrl + 'public/place/'
      axios.get(endpoint, request).then(response => {
        switch (response.status) {
          case 200:
            this.setState({center: location, results: response.data.result})
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
          <div className="near-places-container">
            <NavBar hasSolidBackground={true}/>
            <div className="near-places-inner-container">
              <SectionTitle title="Lugares Cercanos"/>
              <div className="near-places-map-wrapper">
                <NearPlacesMap center={this.state.center}
                results={this.state.results}/>
              </div>
              <NearPlacesList results={this.state.results}/>
            </div>
          </div>
        );
    }
}

export default NearPlaces;
