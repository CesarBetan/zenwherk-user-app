import React, { Component } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import NavBar from '../NavBar/index'
import {apiUrl} from "../../Constants";

class RegistrationForm extends Component {

    constructor(props){
        super(props);
        this.state = {endpoint: apiUrl+"public/user/", userName: "", userLastName: "", userEmail: "",
                userNewPassword: "",  updateSuccess: false, errorMessage: "", errorServer: ""};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.closeRegisterSuccess = this.closeRegisterSuccess.bind(this);
        this.closeRegisterError = this.closeRegisterError.bind(this);
        this.closeRegisterPreError = this.closeRegisterPreError.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
    }

    handleChangeName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({userLastName: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({userEmail: event.target.value});
    }
    handleChangeNewPassword(event) {
        this.setState({userNewPassword: event.target.value});
    }
    closeRegisterSuccess(event) {
        document.getElementById("register-success").style.display = "none";
    }
    closeRegisterError(event) {
        document.getElementById("register-error").style.display = "none";
    }
    closeRegisterPreError(event) {
        document.getElementById("register-pre-error").style.display = "none";
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""})
        if(this.state.userName.trim().length < 1){
            this.setState({errorMessage: "El nombre debe de tener al menos 1 caracter."});
            document.getElementById("register-success").style.display = "none";
            document.getElementById("register-error").style.display = "none";
            document.getElementById("register-pre-error").style.display = "block";
        }else if(this.state.userLastName.trim().length < 1) {
            this.setState({errorMessage: "El apellido debe de tener al menos 1 caracter."});
            document.getElementById("register-success").style.display = "none";
            document.getElementById("register-error").style.display = "none";
            document.getElementById("register-pre-error").style.display = "block";
        }else if(!/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(this.state.userEmail)){
            this.setState({errorMessage: "Ingresa un correo válido."});
            document.getElementById("register-success").style.display = "none";
            document.getElementById("register-error").style.display = "none";
            document.getElementById("register-pre-error").style.display = "block";
        }else if(this.state.userNewPassword.length < 8){
            this.setState({errorMessage: "La contraseña debe tener al menos 8 caracteres."});
            document.getElementById("register-success").style.display = "none";
            document.getElementById("register-error").style.display = "none";
            document.getElementById("register-pre-error").style.display = "block";
        }else{
            axios.post(this.state.endpoint, {
                name: this.state.userName,
                lastName: this.state.userLastName,
                email: this.state.userEmail,
                password: this.state.userNewPassword,
                picture: "example.com"
            }).then(res => {
                document.getElementById("register-error").style.display = "none";
                document.getElementById("register-pre-error").style.display = "none";
                document.getElementById("register-success").style.display = "block";
                this.setState({userName: ""});
                this.setState({userLastName: ""});
                this.setState({userName: ""});
                this.setState({userEmail: ""});
                this.setState({userNewPassword: ""});

            }).catch(err => {
                this.setState({errorServer: err.response.data.message});
                document.getElementById("register-pre-error").style.display = "none";
                document.getElementById("register-success").style.display = "none";
                document.getElementById("register-error").style.display = "block";
            });
        }
    }

    render() {
        return (
            <div className="register-view">
                <NavBar/>
                <div>
                    <form className="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
                            <div className="isa_success" id="register-success">
                                La cuenta fue creada exitosamente.
                                <a onClick={this.closeRegisterSuccess}>X</a>
                            </div>
                            <div className="isa_error" id="register-pre-error">
                                {this.state.errorMessage}
                                <a onClick={this.closeRegisterPreError}>X</a>
                            </div>
                            <div className="isa_error" id="register-error">
                                {this.state.errorServer}
                                <a onClick={this.closeRegisterError}>X</a>
                            </div>
                            <h2>Registro</h2>
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
                                <input type="text" className="PraxisNext-Bold" name="email"
                                       onChange={this.handleChangeEmail}
                                       value={this.state.userEmail}/>
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
                                <input type="submit" value="Registarse" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;