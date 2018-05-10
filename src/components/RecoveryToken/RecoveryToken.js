import React, { Component } from 'react';
import './RecoveryToken.css';
import {apiUrl, authUrl, frontUrl} from "../../Constants";
import NavBar from '../NavBar/index';
import axios from "axios/index";
import queryString from 'query-string'
import Button from "../Button/Button";
import { NavLink } from 'react-router-dom';
import SectionTitle from "../SectionTitle/SectionTitle";
import PropTypes from "prop-types";

class RecoveryToken extends Component {

    constructor(props){
        super(props);
        this.state = {endpoint: apiUrl+"public/user/recovery", userNewPassword: "", updateSuccess: false,
            errorMessage: "", errorServer: "", token: ""};
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.closeRecoverTokenSuccess = this.closeRecoverTokenSuccess.bind(this);
        this.closeRecoverTokenError = this.closeRecoverTokenError.bind(this);
        this.closeRecoverTokenPreError = this.closeRecoverTokenPreError.bind(this);
    }

    componentWillMount(){
        var parsed = queryString.parse(this.props.location.search);
        this.setState({token: parsed.token});
        if(localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
    }

    handleChangeNewPassword(event) {
        this.setState({userNewPassword: event.target.value});
    }
    closeRecoverTokenSuccess(event) {
        document.getElementById("recover-success").style.display = "none";
    }
    closeRecoverTokenError(event) {
        document.getElementById("recover-error").style.display = "none";
    }
    closeRecoverTokenPreError(event) {
        document.getElementById("recover-pre-error").style.display = "none";
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""})
        if(this.state.userNewPassword.length < 8){
            this.setState({errorMessage: "La nueva contraseña debe tener al menos 8 caracteres."});
            document.getElementById("account-success").style.display = "none";
            document.getElementById("account-error").style.display = "none";
            document.getElementById("account-pre-error").style.display = "block";
        }else{
            axios.put(this.state.endpoint, {
                token: this.state.token,
                password: this.state.userNewPassword
            }).then(res => {
                document.getElementById("recover-error").style.display = "none";
                document.getElementById("recover-pre-error").style.display = "none";
                document.getElementById("recover-success").style.display = "block";
                this.setState({userNewPassword: ""});
                document.getElementById("recovery-token-pre").style.display = "none";
                document.getElementById("recovery-token-post").style.display = "grid";
            }).catch(err => {
                console.log(err);
                this.setState({errorServer: err.response.data.message});
                document.getElementById("recover-pre-error").style.display = "none";
                document.getElementById("recover-success").style.display = "none";
                document.getElementById("recover-error").style.display = "block";
            });
        }
    }

    render() {
        return (
            <div className="recovery-view">
                <NavBar/>
                <div id="recovery-token-pre">
                    <form className="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
                            <div className="isa_success" id="recover-success">
                                Su contraseña ha sido reestablecida, favor de iniciar sesión.
                                <a onClick={this.closeRecoverTokenSuccess}>X</a>
                            </div>
                            <div className="isa_error" id="recover-pre-error">
                                {this.state.errorMessage}
                                <a onClick={this.closeRecoverTokenPreError}>X</a>
                            </div>
                            <div className="isa_error" id="recover-error">
                                {this.state.errorServer}
                                <a onClick={this.closeRecoverTokenError}>X</a>
                            </div>
                            <SectionTitle title={"Recuperar Contraseña"}/>
                            <li>
                                <label htmlFor="password">Nueva Contraseña</label>
                                <input type="password" className="PraxisNext-Bold" name="password"
                                       onChange={this.handleChangeNewPassword}
                                       value={this.state.userNewPassword}/>
                                <span>Ingresa una nueva contraseña</span>
                            </li>
                            <li>
                                <input type="submit" value="Cambiar" />
                            </li>
                        </ul>
                    </form>
                </div>
                <div id="recovery-token-post">
                    <h2>Recuperar Contraseña</h2>
                    <NavLink to={authUrl + "oauth/authorize?client_id=zenwherk&response_type=token&redirect_uri="+frontUrl}>
                        <Button className="services-show-all-button" title="Iniciar Sesión"/>
                    </NavLink>
                </div>
            </div>
        );
    }
}

RecoveryToken.defaultProps = {
    location: {}
};

RecoveryToken.propTypes = {
    location: PropTypes.object.isRequired
};

export default RecoveryToken;
