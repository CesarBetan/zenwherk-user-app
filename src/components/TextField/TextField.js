import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {

    constructor(props) {
      super(props)
      this.state = { "hasText" : false }
    }

    onChange(event) {
      if(event.target.value === null || event.target.value === "") {
        this.setState({ "hasText" : false })
      } else {
        this.setState({ "hasText" : true })
      }
    }

    render() {
        const { name, placeholder, icon } = this.props;
        return (
          <div className={`textfield-container
            ${this.props.className}`}>
            {
              icon !== null ?
              <img alt="Magnifying Glass Icon" className={`textfield-image ${this.state.hasText ? '' : 'textfield-image-placeholder'}`} src={icon}/>
              :
              ''
            }
            <input onChange={this.onChange.bind(this)} className="textfield-input PraxisNext-Bold"
            type="text" name={name} placeholder={placeholder} autoComplete="off"/>
          </div>
        );
    }
}

export default TextField;
