import React, { Component } from 'react';
import './PlaceImagesForm.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import {apiUrl} from "../../../Constants";
import axios from "axios/index";
import FullWidthButton from '../../FullWidthButton';

class PlaceImagesForm extends Component {

    constructor(props) {
        super(props);
        this.state = {images: []}
        this.updateImage = this.updateImage.bind(this);
        this.postImage = this.postImage.bind(this);
        this.imageCount = 0
        this.currentImageCount = 0
    }

    updateImage(e) {
        const tempImgs = [];
        this.imageCount = e.target.files.length
        Array.from(e.target.files).forEach( file => {
            this.getBase64(file).then( res => {
                tempImgs.push(res);
                this.setState({images: tempImgs})
            })
        });
    }

    onImageResponse() {
      this.currentImageCount += 1
      if (this.currentImageCount === this.imageCount) {
        this.props.onStageChange()
      }
    }

    postImage() {
        this.state.images.forEach( img => {
            const payload = {
                place: {
                    uuid: this.props.uuidPlace
                },
                user: {
                    uuid: JSON.parse(localStorage.getItem('user')).uuid
                },
                extension: "jpeg",
                base64: img

            };
            const config = {
                headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
            };
            axios.post(`${apiUrl}picture`, payload, config).then( res => {
                console.log("Enviado")
                this.onImageResponse()
            }).catch( err => {
                console.log("Error: " + err.data)
            });
        })
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    render() {
        return (
          <div className="place-images-form-container">
            <SectionTitle title={"Imágenes del Lugar"}/>
            <form className="place-images-input-wrapper">
              <input onChange={this.updateImage} type="file" name="image" accept="image/jpeg" multiple/>
            </form>
              <FullWidthButton className={`place-image-form-full-width-button ${(this.state.images.length === this.imageCount
              && this.state.images.length > 0) ? 'button-enabled' : 'button-disabled'}`}
              onClick={this.postImage}
              title="Guardar y Continuar"/>
              <FullWidthButton className="place-image-form-full-width-button" onClick={this.props.onStageChange} title="Saltar"/>
          </div>
        );
    }
}

export default PlaceImagesForm;
