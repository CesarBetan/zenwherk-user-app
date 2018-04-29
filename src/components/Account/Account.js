import React, { Component } from 'react';
import axios from 'axios';
import './Account.css';
import NavBar from '../NavBar/index'
import {apiUrl} from "../../Constants";

class Account extends Component {

    constructor(props){
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null){
            this.state = {uuid: user.uuid, userData:[], endpoint: apiUrl+"user/", userName: "", userLastName: "",
                userEmail: "", userNewPassword: "", updateSuccess: false, errorMessage: ""};
        }else{
            this.state = {uuid: null, userData:[], endpoint: apiUrl+"user/", userName: "", userLastName: "", userEmail: "",
                userNewPassword: "",  updateSuccess: false, errorMessage: ""};
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.closeAccountSuccess = this.closeAccountSuccess.bind(this);
        this.closeAccountError = this.closeAccountError.bind(this);
        this.closeAccountPreError = this.closeAccountPreError.bind(this);
    }

    getUser(){
        if(localStorage.getItem("accesstoken")){
            const config = {
                headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
            };
            axios.get(this.state.endpoint + this.state.uuid, config).then(res => {
                this.setState({userData:res.data});
                this.setState({userName:res.data.name});
                this.setState({userLastName:res.data.lastName});
                this.setState({userEmail:res.data.email});
                this.setState({userNewPassword: ''});
            });
        }
    }

    componentWillMount(){
        this.getUser();
        if(!localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
    }

    handleChangeName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({userLastName: event.target.value});
    }
    handleChangeNewPassword(event) {
        this.setState({userNewPassword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""})
        if(this.state.userName.trim().length < 1){
            this.setState({errorMessage: "El nombre debe de tener al menos 1 caracter."});
            document.getElementById("account-success").style.display = "none";
            document.getElementById("account-error").style.display = "none";
            document.getElementById("account-pre-error").style.display = "block";
        }else if(this.state.userLastName.trim().length < 1) {
            this.setState({errorMessage: "El apellido debe de tener al menos 1 caracter."});
            document.getElementById("account-success").style.display = "none";
            document.getElementById("account-error").style.display = "none";
            document.getElementById("account-pre-error").style.display = "block";
        }else if(this.state.userNewPassword === ''){
            if(localStorage.getItem("accesstoken")){
                const config = {
                    headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
                };
                axios.put(this.state.endpoint + this.state.uuid, {
                    name: this.state.userName,
                    lastName: this.state.userLastName
                }, config
                ).then(res => {
                    if(res.status === 200){
                        document.getElementById("account-error").style.display = "none";
                        document.getElementById("account-pre-error").style.display = "none";
                        document.getElementById("account-success").style.display = "block";
                    }else{
                        document.getElementById("account-pre-error").style.display = "none";
                        document.getElementById("account-success").style.display = "none";
                        document.getElementById("account-error").style.display = "block";
                    }
                });
            }
        }else if(this.state.userNewPassword.length < 8){
            this.setState({errorMessage: "La nueva contraseña debe tener al menos 8 caracteres."});
            document.getElementById("account-success").style.display = "none";
            document.getElementById("account-error").style.display = "none";
            document.getElementById("account-pre-error").style.display = "block";
        }else{
            if(localStorage.getItem("accesstoken")){
                const config = {
                    headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
                };
                axios.put(this.state.endpoint + this.state.uuid, {
                    name: this.state.userName,
                    lastName: this.state.userLastName,
                    password: this.state.userNewPassword
                }, config
                ).then(res => {
                    if(res.status === 200){
                        document.getElementById("account-success").style.display = "block";
                    }else{
                        document.getElementById("account-error").style.display = "block";
                    }
                });
            }
        }
    }

    closeAccountSuccess(event) {
        document.getElementById("account-success").style.display = "none";
    }
    closeAccountError(event) {
        document.getElementById("account-error").style.display = "none";
    }
    closeAccountPreError(event) {
        document.getElementById("account-pre-error").style.display = "none";
    }

    render() {
        return (
            <div className="user-view">
                <NavBar/>
                <div>
                    <form className="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
                            <div className="isa_success" id="account-success">
                                La cuenta fue actualizada correctamente.
                                <a onClick={this.closeAccountSuccess}>X</a>
                            </div>
                            <div className="isa_error" id="account-pre-error">
                                {this.state.errorMessage}
                                <a onClick={this.closeAccountPreError}>X</a>
                            </div>
                            <div className="isa_error" id="account-error">
                                La cuenta NO pudo ser actualizada.
                                <a onClick={this.closeAccountError}>X</a>
                            </div>
                            <h2>Cuenta</h2>
                            <li>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="PraxisNext-Bold" name="name"
                                       onChange={this.handleChangeName}
                                       value={this.state.userName} />
                                <span>* Ingresa tu nombre o nombres aquí</span>
                            </li>
                            <li>
                                <label htmlFor="lastName">Apellido</label>
                                <input type="text" className="PraxisNext-Bold" name="lastName"
                                       onChange={this.handleChangeLastName}
                                       value={this.state.userLastName} />
                                <span>* Ingresa tus apellidos aquí</span>
                            </li>
                            <li>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" className="PraxisNext-Bold user-input-disabled" name="email"
                                       value={this.state.userEmail} disabled/>
                                <span>Ingresa un correo electrónico válido</span>
                            </li>
                            <li>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" className="PraxisNext-Bold" name="password"
                                       onChange={this.handleChangeNewPassword}
                                       value={this.state.userNewPassword} />
                                <span>Ingresa una nueva contraseña</span>
                            </li>
                            <li>
                                <input type="submit" value="Actualizar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Account;
