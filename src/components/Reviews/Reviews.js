import React, { Component } from 'react';
import './Reviews.css';

class Reviews extends Component {
    render() {
        return (
            <p>Reviews component with id { this.props.match.params.id }!</p>
        );
    }
}

export default Reviews;