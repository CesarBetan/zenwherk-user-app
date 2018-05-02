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

    handleChangeFeatureDesc(event) {
        let value = event.target.value;
        if(typeof value !== 'string' || value === null) {
            value = '';
        }
        this.props.handleChangeFeatureDesc(this.props.id, value);
    }

    renderFeatureTypes() {
        return features.map((feature) => {
            return (
                <option key={feature.id} value={`${feature.id}`}>{feature.name}</option>
            );
        });
    }

    render() {
        const { featureEnum, featureDesc } = this.props;
        return (
            <div className="place-features-form-element-container">
                <div className="place-features-form-element-description-input-container">
                    <label>Descripción</label>
                    <input type="text" className="PraxisNext-Bold place-features-form-element-description-input" name="name"
                           onChange={this.handleChangeFeatureDesc.bind(this)}
                           value={featureDesc} />
                </div>
                <div>
                    <label>Tipo de feature</label>
                    <select value={featureEnum} onChange={this.handleChangeFeatureEnum.bind(this)}
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