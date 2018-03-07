import React, { Component } from 'react';
import './NearPlaces.css';
import queryString from 'query-string';

class NearPlaces extends Component {

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

    render() {
        return (
            <p>NearPlaces component! {this.renderQueryParams()} </p>
        );
    }
}

export default NearPlaces;