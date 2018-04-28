import React, { Component } from 'react';
import './NavBar.css';
import Menu from "../Menu/Menu";

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {expand: false}
        this.handleClickHam = this.handleClickHam.bind(this);
        this.handleClickHam2 = this.handleClickHam2.bind(this);
    }

    handleClickHam(event) {
        this.setState({expand: true});
    }
    handleClickHam2(event) {
        this.setState({expand: false});
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
          <div className="nav-bar-wrapper PraxisNext-ExtraBlack">
              <div>
                  {
                      this.state.expand === false ?
                          <div className="hamburguer" onClick={this.handleClickHam}>
                              Ham
                          </div>
                          :
                          <div className="hamburguer" onClick={this.handleClickHam2}>
                              Ham2
                          </div>
                  }
                  ZenWherk
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

export default NavBar;
