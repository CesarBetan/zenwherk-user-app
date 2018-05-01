import React, { Component } from 'react';
import './PlaceFeatureFormElement.css';
import { features } from '../../../../Constants';

class PlaceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteFeatureFormElement() {
        this.props.delete(this.props.id);
    }

    handleChangeFeatureEnum(event) {
        this.props.handleChangeFeatureEnum(this.props.id, parseInt(event.target.value));
    }

    renderFeatureTypes() {
        return features.map((feature) => {
            return (
                <option value={`${feature.id}`}>{feature.name}</option>
            );
        });
    }

    render() {
        const { id, featureEnum, featureDesc } = this.props;
        return (
            <div className="place-features-form-element-container">
                <div>
                    <label htmlFor="category">Tipo de feature</label>
                    <select value={this.props.featureEnum} onChange={this.handleChangeFeatureEnum.bind(this)}
                            className="PraxisNext-Bold">
                        { this.renderFeatureTypes() }
                    </select>
                    <span>* Selecciona el tipo de feature</span>
                </div>
                <div className="place-features-form-element-delete-button-container">
                    <span onClick={this.deleteFeatureFormElement.bind(this)}>
                        [Borrar]
                    </span>
                </div>
            </div>
        );
    }
}

export default PlaceForm;