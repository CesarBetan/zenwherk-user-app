import React, { Component } from 'react';
import './Gallery.css';
import SectionTitle from '../../SectionTitle';
import PictureCard from './PictureCard';
import PropTypes from "prop-types";

class Gallery extends Component {
    render() {
        const pictures = this.props.pictures;
        return (
          <div className="gallery-container PraxisNext-ExtraBlack">
            <SectionTitle title="Pictures"/>
            {
              <div className="gallery-pictures-wrapper">
              {
                pictures.map((current, i) =>
                  <PictureCard key={i} picture={current.url}/>
                )
              }
              </div>
            }
          </div>
        );
    }
}

Gallery.defaultProps = {
    pictures: ["Arreglo con datos de una imágen"]
};

Gallery.propTypes = {
    pictures: PropTypes.array.isRequired
};

export default Gallery;
