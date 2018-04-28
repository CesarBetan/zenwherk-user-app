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
            this.state = {uuid: user.uuid, userData:[], endpoint: apiUrl+"user/", userName: "", userLastName: "", userEmail: "", userNewPassword: ""};
        }else{
            this.state = {uuid: null, userData:[], endpoint: apiUrl+"user/", userName: "", userLastName: "", userEmail: "", userNewPassword: ""};
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        if(this.state.uuid === null){
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
        if(this.state.userName.trim().length < 1){
            console.log("El nombre debe de tener al menos 1 caracter");
        }else if(this.state.userLastName.trim().length < 1) {
            alert("El apellido debe de tener al menos 1 caracter");
        }else if(this.state.userNewPassword === ''){
            axios.put(this.state.endpoint + this.state.uuid, {
                name: this.state.userName,
                lastName: this.state.userLastName
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }else if(this.state.userNewPassword.trim.length > 0 && this.state.userNewPassword.trim.length < 8){
            console.log("La contraseña debe tener al menos 8 caracteres");
        }else{
            axios.put(this.state.endpoint + this.state.uuid, {
                name: this.state.userName,
                lastName: this.state.userLastName,
                password: this.state.userNewPassword
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }
    }

    render() {
        return (
            <div className="user-view">
                <NavBar/>
                <div>
                    <form className="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
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
                                <input type="email" className="PraxisNext-Bold" name="email"
                                       value={this.state.userEmail} />
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
