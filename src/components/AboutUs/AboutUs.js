import React, { Component } from 'react';
import './AboutUs.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import NavBar from "../NavBar/NavBar";

class AboutUs extends Component {
    render() {
        return (
          <div className="about-view">
              <NavBar/>
              <div>
              <SectionTitle className={"sectionTitleAbout"} title={"Acerca de"}/>
                  <div className="about-content">
                      <h5>Versión: 1.0.0</h5>
                      <h4>Zenwherk</h4>
                      <h3>
                          Aplicación desarrollada en ITESM Campus Ciudad de Mexico en la materia:
                          <h2>Laboratorio de desarrollo de aplicaciones Web</h2>
                      </h3>
                      <h5>Profesor: Maykel Farha Boulos</h5>
                  </div>
              </div>
          </div>
        );
    }
}

export default AboutUs;