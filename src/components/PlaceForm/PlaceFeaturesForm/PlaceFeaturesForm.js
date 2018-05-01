import React, { Component } from 'react';
import './PlaceFeaturesForm.css';
import {apiUrl} from "../../../Constants";
import FullWidthButton from '../../FullWidthButton';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PlaceFeatureFormElement from './PlaceFeatureFormElement';
import axios from "axios/index";

class PlaceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { featureFormElements: [], idCount: 1, errorMessage: '', endpoint: apiUrl+"place_feature" };
        this.submittedFeaturesCount = 0;
    }

    componentWillMount() {
        console.log('Place uuid: ' + this.props.placeUuid);
    }

    countSubmittedFeatures() {
        this.submittedFeaturesCount = this.submittedFeaturesCount + 1;
        if(this.submittedFeaturesCount >= this.state.featureFormElements.length) {
            this.props.changeStage();
        }
    }

    handleSubmit(event) {
        if(event !== undefined && event.preventDefault !== undefined) {
            event.preventDefault();
        }

        let shouldSubmit = this.state.featureFormElements.length > 0;
        for(let i = 0; i < this.state.featureFormElements.length && shouldSubmit; i++) {
            if(this.state.featureFormElements[i].featureDesc.trim().length < 1) {
                shouldSubmit = false;
            }
        }

        if(!shouldSubmit) {
            if(this.state.featureFormElements.length > 0) {
                this.setState({ errorMessage: 'Todos los features deben tener una descripción' });
            } else {
                this.setState({ errorMessage: 'Debes agregar por lo menos un feature. ' });
            }
            document.getElementById("place-form-pre-error").style.display = "block";
        } else {
            if(localStorage.getItem("accesstoken")) {
                let userUuid = JSON.parse(localStorage.getItem('user')).uuid;
                const config = {
                    headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
                };
                this.state.featureFormElements.forEach((feature) => {
                    axios.post(this.state.endpoint, {
                            featureDescription: feature.featureDesc,
                            featureEnum: feature.featureEnum,
                            place: {
                                uuid: this.props.placeUuid
                            },
                            user: {
                                uuid: userUuid
                            }
                        }, config
                    ).then(() => {
                        this.countSubmittedFeatures();
                    }).catch(() => {
                        this.countSubmittedFeatures();
                    });
                });
            }
        }
    }

    handleSkip() {

    }

    closePlaceFormPreError(event) {
        document.getElementById("place-form-pre-error").style.display = "none";
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

    handleChangeFeatureDesc(id, newValue) {
        const featureElements = this.state.featureFormElements.map((feature) => {
            if(feature.id === id) {
                feature.featureDesc = newValue;
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
                    handleChangeFeatureEnum={this.handleChangeFeatureEnum.bind(this)}
                    handleChangeFeatureDesc={this.handleChangeFeatureDesc.bind(this)}/>
            );
        });
    }

    render() {
        const { title } = this.props;
        return (
            <div className="place-form-stages">
                <div className="isa_error" id="place-form-pre-error">
                    {this.state.errorMessage}
                    <a onClick={this.closePlaceFormPreError.bind(this)}>X</a>
                </div>
                <SectionTitle title={title} />
                <form className="form-style-user" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        { this.renderFeatures() }
                    </div>
                    <div className="place-features-form-add-button-container">
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
