import React, { Component } from 'react';
import './Map.css';
import PropTypes from "prop-types";

class Map extends Component {

    placeMarker(location) {
      const google = window.google;
      const title = this.props.title;
      var marker = new google.maps.Marker({
        position: location,
        title: title,
        map: this.map,
      });

      google.maps.event.addListener(marker , 'click', function(){
      var newLocation = {lat: location.lat + 0.00075, lng: location.lng}
      var infowindow = new google.maps.InfoWindow({
        content: title,
        position: newLocation,
      });
      infowindow.open(this.map);
  });
    }

    constructor(props) {
      super(props)
      this.placeMarker = this.placeMarker.bind(this)
    }

    componentDidMount() {
      const google = window.google;
      this.map = new google.maps.Map(this.refs.map, {
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        center: this.props.location,
        zoom: 16
      });
      this.placeMarker(this.props.location)
    }
    render() {
        return (
          <div ref="map" className="map"></div>
        );
    }
}

Map.defaultProps = {
    title: "Título"
};

Map.propTypes = {
    title: PropTypes.string.isRequired
};

export default Map;
