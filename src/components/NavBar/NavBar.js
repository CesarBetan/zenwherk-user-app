import React, { Component } from 'react';
import './NavBar.css';
import Menu from "../Menu/Menu";
import menuIcon from '../../assets/Global/MenuLine.svg'
import PropTypes from "prop-types";

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {expand: false}
        this.handleClickHam = this.handleClickHam.bind(this);
    }

    handleClickHam(event) {
        if(this.state.expand === false) {
            this.setState({expand: true});
            document.getElementById("menu-ham").classList.remove('hamburguer');
            document.getElementById("menu-ham").classList.add('hamburguer-transform');
        }else if(this.state.expand === true){
            this.setState({expand: false});
            document.getElementById("menu-ham").classList.remove('hamburguer-transform');
            document.getElementById("menu-ham").classList.add('hamburguer');
        }
    }

    disableBodyScroll(){
        document.body.style.overflow = "hidden";
        return (
            <Menu/>
        )
    }
    enableBodyScroll(){
        document.body.style.overflow = "scroll";
    }

    render() {
        return (
          <div className={`nav-bar-wrapper PraxisNext-ExtraBlack
            ${this.props.hasSolidBackground === true
              ? 'nav-bar-wrapper-solid-background' : ''}`}>
              <div>
                  <div id="menu-ham" className="hamburguer" onClick={this.handleClickHam}>
                      <img className="menu-icon"
                           alt={"Menu"}
                           src={menuIcon}/>
                      <img className="menu-icon1"
                           alt={"Menu"}
                           src={menuIcon}/>
                  </div>
                  <span className="nav-bar-title">
                    ZenWherk
                  </span>
              </div>
              {
                  this.state.expand === true ?
                      this.disableBodyScroll()
                  :
                      this.enableBodyScroll()

              }
          </div>
        );
    }
}

NavBar.defaultProps = {
    hasSolidBackground: true
};

NavBar.propTypes = {
    hasSolidBackground: PropTypes.bool.isRequired
};

export default NavBar;
