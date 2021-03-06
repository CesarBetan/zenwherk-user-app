import React, { Component } from 'react';
import './TallSearchHeader.css';
import TextField from '../TextField';
import Button from '../Button';
import smallDarkSearchIcon from '../../assets/Global/small-dark-search-icon.svg';
import { withRouter } from 'react-router-dom';

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
                Where Are We<br/>Working Today?
              </span>
              <div className="tall-search-header-textfield-wrapper">
                <TextField className="tall-search-header-textfield"
                name="query" placeholder="What do you need?"
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

export default withRouter(TallSearchHeader);
