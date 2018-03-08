import React, { Component } from 'react';
import './Compare.css';
import queryString from 'query-string';

class Compare extends Component {
    render() {
        return (
            <p>Compare component!<br/>{ this.props.match.params.id_1  } with { this.props.match.params.id_2 }</p>
        );
    }
}

export default Compare;