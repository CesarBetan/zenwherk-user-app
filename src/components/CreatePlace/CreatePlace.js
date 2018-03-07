import React, { Component } from 'react';
import './CreatePlace.css';

class CreatePlace extends Component {
    render() {
        return (
            <p>CreatePlace component with id { this.props.match.params.id }!</p>
        );
    }
}

export default CreatePlace;