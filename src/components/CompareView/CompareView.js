import React, { Component } from 'react';
import './CompareView.css';

class CompareView extends Component {
    render() {
        return (
            <p>CompareView component!<br/>{ this.props.match.params.id_1  } with { this.props.match.params.id_2 }</p>
        );
    }
}

export default CompareView;