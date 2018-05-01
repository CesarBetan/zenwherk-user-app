import React, { Component } from 'react';
import './PlaceFeaturesForm.css';
import {apiUrl} from "../../../Constants";
import FullWidthButton from '../../FullWidthButton';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PlaceFeatureFormElement from './PlaceFeatureFormElement';

class PlaceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { featureFormElements: [], idCount: 1 };
    }

    handleSubmit(event) {
        if(event !== undefined && event.preventDefault !== undefined) {
            event.preventDefault();
        }
    }

    handleSkip() {
    }

    addFeatureFormElement() {
        const featureElements = [...this.state.featureFormElements];
        featureElements.push({
            id: this.state.idCount,
            featureEnum: 1,
            featureDesc: '',
        });

        const idCount = this.state.idCount + 1;
        this.setState({ featureFormElements: featureElements, idCount });
    }

    deleteFeatureFormElement(id) {
        const featureElements = this.state.featureFormElements.filter((feature) => feature.id !== id);
        this.setState({ featureFormElements: featureElements });
    }

    handleChangeFeatureEnum(id, newValue) {
        const featureElements = this.state.featureFormElements.map((feature) => {
            if(feature.id === id) {
                feature.featureEnum = newValue;
            }
            return feature;
        });
        this.setState({ featureFormElements: featureElements });
    }

    renderFeatures() {
        return this.state.featureFormElements.map((feature) => {
            return (
                <PlaceFeatureFormElement
                    key={feature.id}
                    id={feature.id}
                    featureEnum={feature.featureEnum}
                    featureDesc={feature.featureDesc}
                    delete={this.deleteFeatureFormElement.bind(this)}
                    handleChangeFeatureEnum={this.handleChangeFeatureEnum.bind(this)}/>
            );
        });
    }

    render() {
        const { title } = this.props;
        return (
            <div className="place-form-stages">
                <SectionTitle title={title} />
                <form className="form-style-user" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        { this.renderFeatures() }
                    </div>
                    <div>
                        <span className="place-features-form-add-button" onClick={this.addFeatureFormElement.bind(this)}>
                            [Agregar]
                        </span>
                    </div>
                    <div className="place-features-form-button">
                        <FullWidthButton title="Guardar y Continuar" onClick={this.handleSubmit.bind(this)} />
                    </div>
                    <div>
                        <FullWidthButton title="Saltar" onClick={this.handleSkip.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default PlaceForm;
