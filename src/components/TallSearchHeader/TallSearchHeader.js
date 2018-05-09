import React, { Component } from 'react';
import './TallSearchHeader.css';
import TextField from '../TextField';
import Button from '../Button';
import smallDarkSearchIcon from '../../assets/Global/small-dark-search-icon.svg';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class TallSearchHeader extends Component {

    constructor(props) {
      super(props);
      this.state = { text: '' }
    }

    onSearch() {
      const { text } = this.state;
      if(typeof text === 'string' && text.length > 0) {
        this.props.history.push(`/search?name=${text}`);
      }
    }

    onTextChange(value) {
      if(value === null || value === "") {
        this.setState({ text: '' })
      } else {
        this.setState({ text: value })
      }
    }

    render() {
        return (
          <div className="tall-search-header-container PraxisNext-ExtraBlack">
            <div className="tall-search-header-wrapper">
              <span className="tall-search-header-title">
                ¿Dónde trabajaremos<yarn start/>el día de hoy?
              </span>
              <div className="tall-search-header-textfield-wrapper">
                <TextField className="tall-search-header-textfield"
                name="query" placeholder="¿Qué necesitas?"
                icon={smallDarkSearchIcon}
                onEnter={this.onSearch.bind(this)}
                onTextChange={this.onTextChange.bind(this)}/>
              </div>
              <Button color="white" title="Buscar" onClick={this.onSearch.bind(this)}/>
            </div>
          </div>
        );
    }
}

TallSearchHeader.defaultProps = {
    history: []
};

TallSearchHeader.propTypes = {
    history: PropTypes.array.isRequired
};

export default withRouter(TallSearchHeader);
