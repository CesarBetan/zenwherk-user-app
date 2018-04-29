import React, { Component } from 'react';
import './Recovery.css';
import {apiUrl} from "../../Constants";
import NavBar from '../NavBar/index';
import axios from "axios/index";
import SectionTitle from "../SectionTitle/SectionTitle";

class Recovery extends Component {

    constructor(props){
        super(props);
        this.state = {endpoint: apiUrl+"public/user/recovery/token", userEmail: "", updateSuccess: false,
            errorMessage: "", errorServer: ""};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.closeRecoverSuccess = this.closeRecoverSuccess.bind(this);
        this.closeRecoverError = this.closeRecoverError.bind(this);
        this.closeRecoverPreError = this.closeRecoverPreError.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
    }

    handleChangeEmail(event) {
        this.setState({userEmail: event.target.value});
    }
    closeRecoverSuccess(event) {
        document.getElementById("recover-success").style.display = "none";
    }
    closeRecoverError(event) {
        document.getElementById("recover-error").style.display = "none";
    }
    closeRecoverPreError(event) {
        document.getElementById("recover-pre-error").style.display = "none";
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({errorMessage: ""})
        if(!/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(this.state.userEmail)){
            this.setState({errorMessage: "Ingresa un correo válido."});
            document.getElementById("recover-success").style.display = "none";
            document.getElementById("recover-error").style.display = "none";
            document.getElementById("recover-pre-error").style.display = "block";
        }else{
            axios.post(this.state.endpoint, {
                email: this.state.userEmail
            }).then(res => {
                document.getElementById("recover-error").style.display = "none";
                document.getElementById("recover-pre-error").style.display = "none";
                document.getElementById("recover-success").style.display = "block";
                this.setState({userEmail: ""});
            }).catch(err => {
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
                <div>
                    <form className="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
                            <div className="isa_success" id="recover-success">
                                Se han enviado instrucciones a tu correo electrónico.
                                <a onClick={this.closeRecoverSuccess}>X</a>
                            </div>
                            <div className="isa_error" id="recover-pre-error">
                                {this.state.errorMessage}
                                <a onClick={this.closeRecoverPreError}>X</a>
                            </div>
                            <div className="isa_error" id="recover-error">
                                {this.state.errorServer}
                                <a onClick={this.closeRecoverError}>X</a>
                            </div>
                            <SectionTitle title={"Recuperar Contraseña"}/>
                            <li>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="text" className="PraxisNext-Bold" name="email"
                                       onChange={this.handleChangeEmail}
                                       value={this.state.userEmail}/>
                                <span>Ingresa un correo electrónico válido</span>
                            </li>
                            <li>
                                <input type="submit" value="Enviar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Recovery;
