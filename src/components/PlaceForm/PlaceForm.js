import React, { Component } from 'react';
import './PlaceForm.css';
import NavBar from "../NavBar/NavBar";
import SectionTitle from "../SectionTitle/SectionTitle";
import {apiUrl} from "../../Constants";
import DraggableMap from "../DraggableMap/DraggableMap";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import steps1 from '../../assets/Global/steps1.svg';
import steps2 from '../../assets/Global/steps2.svg';
import steps3 from '../../assets/Global/steps3.svg';
import steps4 from '../../assets/Global/steps4.svg';
import PlaceImagesForm from './PlaceImagesForm';

import PlaceFeaturesForm from './PlaceFeaturesForm';
import PlaceSchedulesForm from "./PlaceSchedulesForm/PlaceSchedulesForm";
import FullWidthButton from "../FullWidthButton/FullWidthButton";

class PlaceForm extends Component {

    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null){
            this.state = {uuid: user.uuid, endpoint: apiUrl+"place/", placeName: "", placePhone: "",
                placeDescription: "", placeAddress: "", placeWebsite: "", updateSuccess: false, errorMessage: "", errorServer: "",
                latitude: null, longitude: null, successMessage: "", placeCategory: "1", uuidPlace: null, stage: 1};
        }else{
            this.state = {uuid: null, endpoint: apiUrl+"place/", placeName: "", placePhone: "",
                placeDescription: "", placeAddress: "", placeWebsite: "",  updateSuccess: false, errorMessage: "", errorServer: "",
                latitude: null, longitude: null, successMessage: "", placeCategory: "1", uuidPlace: null, stage: 1};
        }

        this.closePlaceFormSuccess = this.closePlaceFormSuccess.bind(this);
        this.closePlaceFormError = this.closePlaceFormError.bind(this);
        this.closePlaceFormPreError = this.closePlaceFormPreError.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePlaceName = this.handlePlaceName.bind(this);
        this.handlePlacePhone = this.handlePlacePhone.bind(this);
        this.handlePlaceAddress = this.handlePlaceAddress.bind(this);
        this.handlePlaceWebsite = this.handlePlaceWebsite.bind(this);
        this.handlePlaceDescription = this.handlePlaceDescription.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.onMapPinChanged = this.onMapPinChanged.bind(this);
        this.changeStage = this.changeStage.bind(this)
    }

    componentWillMount() {
        if(!localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }else{
            //this.getUser();
        }
    }

    closePlaceFormSuccess(event) {
        document.getElementById("place-form-success").style.display = "none";
    }
    closePlaceFormError(event) {
        document.getElementById("place-form-error").style.display = "none";
    }
    closePlaceFormPreError(event) {
        document.getElementById("place-form-pre-error").style.display = "none";
    }
    handlePlaceName(event) {
        this.setState({placeName: event.target.value});
    }
    handlePlacePhone(event) {
        this.setState({placePhone: event.target.value});
    }
    handlePlaceAddress(event) {
        this.setState({placeAddress: event.target.value});
    }
    handlePlaceWebsite(event) {
        this.setState({placeWebsite: event.target.value});
    }
    handlePlaceDescription(event) {
        this.setState({placeDescription: event.target.value});
    }
    handleChangeCategory(event) {
        this.setState({placeCategory: event.target.value});
    }

    onMapPinChanged(location) {
        location = location.replace(/\s/g, '');
        location = location.slice(1,-1);
        location= location.split(",");
        this.setState({latitude: location[0]});
        this.setState({longitude: location[1]});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""});
        if(this.state.placeName.trim().length < 1){
            this.setState({errorMessage: "El nombre debe de tener al menos 1 caracter."});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else if(this.state.placeAddress.trim().length < 3) {
            this.setState({errorMessage: "La dirección debe de tener al menos 3 caracteres."});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else if(this.state.placePhone.trim().length !== 10) {
            this.setState({errorMessage: "El número de teléfono debe de tener 10 dígitos."});
            document.getElementById("account-success").style.display = "none";
            document.getElementById("account-error").style.display = "none";
            document.getElementById("account-pre-error").style.display = "block";
        }else if(this.state.placeAddress.trim().length < 3) {
            this.setState({errorMessage: "La dirección debe de tener al menos 3 caracteres."});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else if(!/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g.test(this.state.placeWebsite)) {
            this.setState({errorMessage: "Ingresa un sitio web válido"});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else if(this.state.placeDescription.trim().length < 5) {
            this.setState({errorMessage: "La descripción debe de tener al menos 5 caracteres."});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else if(this.state.latitude === null) {
            this.setState({errorMessage: "Selecciona una ubicación en el mapa"});
            document.getElementById("place-form-success").style.display = "none";
            document.getElementById("place-form-error").style.display = "none";
            document.getElementById("place-form-pre-error").style.display = "block";
        }else{
            if(localStorage.getItem("accesstoken")){
                const config = {
                    headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
                };
                axios.post(this.state.endpoint, {
                    name: this.state.placeName,
                    address: this.state.placeAddress,
                    description: this.state.placeDescription,
                    phone: "+52"+this.state.placePhone,
                    category: parseInt(this.state.placeCategory, 10),
                    website: this.state.placeWebsite,
                    latitude: parseFloat(this.state.latitude),
                    longitude: parseFloat(this.state.longitude),
                    user: {
                        uuid: this.state.uuid
                    }
                  }, config
                ).then(res => {
                    console.log(res);
                    this.setState({uuidPlace: res.data.uuid});
                    this.setState({stage: 2});
                    this.setState({successMessage: res.statusText});
                    document.getElementById("place-form-error").style.display = "none";
                    document.getElementById("place-form-pre-error").style.display = "none";
                    document.getElementById("place-form-success").style.display = "block";
                }).catch(err => {
                    console.log(err);
                    if(err.response !== undefined){
                        this.setState({errorServer: err.response.data.message});
                        document.getElementById("place-form-pre-error").style.display = "none";
                        document.getElementById("place-form-success").style.display = "none";
                        document.getElementById("place-form-error").style.display = "block";
                    }
                });
            }
        }
    }

    changeStage(){
        let s = this.state.stage;
        s += 1;
        this.setState({stage: s});
    }

    render() {
        return (
          <div className="place-form-view">
              <NavBar/>
              <div className="place-form-list">
                  {
                      this.state.stage === 1 ?
                        <div className="stages-images">
                            <img className="steps-image"
                                 alt="Step 1" src={steps1}/>
                        </div>
                        :
                          this.state.stage === 2 ?
                            <div className="stages-images">
                                <img className="steps-image"
                                     alt="Step 1" src={steps2}/>
                            </div>
                          :
                            this.state.stage === 3 ?
                              <div className="stages-images">
                                  <img className="steps-image"
                                       alt="Step 1" src={steps3}/>
                              </div>
                            :
                              <div className="stages-images">
                                  <img className="steps-image"
                                       alt="Step 1" src={steps4}/>
                              </div>
                  }
                  {
                      this.state.stage === 1 ?
                        <form className="form-style-user" onSubmit={this.handleSubmit}>
                            <ul className="PraxisNext-Bold">
                                <div className="isa_success" id="place-form-success">
                                    {this.state.successMessage}
                                    <a onClick={this.closePlaceFormSuccess}>X</a>
                                </div>
                                <div className="isa_error" id="place-form-pre-error">
                                    {this.state.errorMessage}
                                    <a onClick={this.closePlaceFormPreError}>X</a>
                                </div>
                                <div className="isa_error" id="place-form-error">
                                    {this.state.errorServer}
                                    <a onClick={this.closePlaceFormError}>X</a>
                                </div>
                                <SectionTitle title={"Crear Lugar"}/>
                                <li>
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" className="PraxisNext-Bold" name="name"
                                           onChange={this.handlePlaceName}
                                           value={this.state.placeName} />
                                    <span>* Ingresa el nombre del lugar aquí</span>
                                </li>
                                <li>
                                    <label htmlFor="address">Dirección</label>
                                    <input type="text" className="PraxisNext-Bold" name="address"
                                           onChange={this.handlePlaceAddress}
                                           value={this.state.placeAddress}/>
                                    <span>* Ingresa la dirección del lugar aquí</span>
                                </li>
                                <li className="place-relative-li">
                                    <label htmlFor="phone">Teléfono</label>
                                    <p>+52</p>
                                    <input type="text" className="PraxisNext-Bold" name="phone" pattern="^[1-9][0-9]*$"
                                           maxLength="10"
                                           onChange={this.handlePlacePhone}
                                           value={this.state.placePhone} />
                                    <span>Ingresa el número de teléfono aquí</span>
                                </li>
                                <li>
                                    <label htmlFor="website">Sitio Web</label>
                                    <input type="text" className="PraxisNext-Bold" name="website"
                                           onChange={this.handlePlaceWebsite}
                                           value={this.state.placeWebsite} />
                                    <span>Ingresa el sitio website aquí</span>
                                </li>
                                <li>
                                    <label htmlFor="description">Descripción</label>
                                    <textarea rows="5" className="PraxisNext-Bold" name="description"
                                              onChange={this.handlePlaceDescription}
                                              value={this.state.placeDescription} />
                                    <span>* Ingresa la descripción del lugar aquí</span>
                                </li>
                                <li>
                                    <label htmlFor="category">Categoría</label>
                                    <select value={this.state.placeCategory} onChange={this.handleChangeCategory}
                                            className="PraxisNext-Bold">
                                        <option value="1">Coffee Shop</option>
                                        <option value="2">Library</option>
                                        <option value="3">Co-Working</option>
                                    </select>
                                    <span>* Selecciona una categoría</span>
                                </li>
                                <li className="place-form-map-li">
                                    <label htmlFor="description">Ubicación</label>
                                    <DraggableMap onMapPinChanged={this.onMapPinChanged}/>
                                </li>
                                <li>
                                    <input type="submit" value="Guardar y Continuar" />
                                </li>
                            </ul>
                        </form>
                      :
                        this.state.stage === 2 ?
                          <div className="place-form-stages">
                            <PlaceImagesForm onStageChange={this.changeStage} uuidPlace={this.state.uuidPlace}/>
                          </div>
                        :
                          this.state.stage === 3 ?
                              <PlaceFeaturesForm  title="Features del lugar" placeUuid={this.state.uuidPlace} changeStage={this.changeStage}/>
                          :
                            this.state.stage === 4 ?
                              <div className="place-form-stages">
                                  <PlaceSchedulesForm title="Horarios del lugar" placeUuid={this.state.uuidPlace} changeStage={this.changeStage}/>
                              </div>
                            :
                              <div className="place-form-stages">
                                  <SectionTitle className="section-no-capitalize" title={"Lugar creado exitosamente Espera a que el lugar se aprobado (:"}/>
                                  <NavLink to={"/"}>
                                    <FullWidthButton title="Ir a Inicio"/>
                                  </NavLink>
                              </div>
                  }
              </div>
          </div>
        );
    }
}

export default PlaceForm;
