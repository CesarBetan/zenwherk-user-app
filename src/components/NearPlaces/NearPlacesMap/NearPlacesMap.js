import React, { Component } from 'react';
import './NearPlacesMap.css';

class NearPlacesMap extends Component {

    placeMarker(location, title, isCurrentLocation) {
      const google = window.google;
      let marker = new google.maps.Marker({
        position: location,
        title: title,
        map: this.map,
      });

      let newLocation = {lat: location.lat, lng: location.lng}
      let infowindow = new google.maps.InfoWindow({
        content: title,
        position: newLocation,
        pixelOffset: new google.maps.Size(-1.5, -40),
      });
      if (isCurrentLocation === true) {
        infowindow.open(this.map);
      }
      google.maps.event.addListener(marker , 'click', function(){
        infowindow.open(this.map);
      });

    }

    constructor(props) {
      super(props)
      this.placeMarker = this.placeMarker.bind(this)
    }

    componentDidMount() {
      this.setupMap()
    }

    componentDidUpdate() {
      this.setupMap()
    }

    setupMap() {
      const google = window.google;
      let center = {}
      if (this.props.center.coords !== undefined) {
        center = {
          lat: this.props.center.coords.latitude,
          lng: this.props.center.coords.longitude,
        }
      } else {
        center = {
          lat: 19.284299850463867,
          lng: -99.13729858398438,
        }
      }
      this.map = new google.maps.Map(this.refs.map, {
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        center: center,
        zoom: 14
      });
      this.placeMarker(center, "Ubicación Actual", true)

      new google.maps.Circle({
        strokeColor: '#00DE91',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00DE91',
        fillOpacity: 0.35,
        map: this.map,
        center: center,
        radius: 10000
      });

      let results = this.props.results
      for(let i = 0; i < results.length; i++) {
        let coordinates = {
          lat: results[i].latitude,
          lng: results[i].longitude
        };
        this.placeMarker(coordinates, results[i].name, false)
      }
    }
    render() {
        return (
          <div ref="map" className="map"></div>
        );
    }
}

export default NearPlacesMap;
