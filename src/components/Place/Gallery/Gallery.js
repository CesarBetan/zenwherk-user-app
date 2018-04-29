import React, { Component } from 'react';
import './Gallery.css';
import SectionTitle from '../../SectionTitle';
import PictureCard from './PictureCard';

class Gallery extends Component {
    render() {
        const pictures = this.props.pictures
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

export default Gallery;
