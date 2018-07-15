import React, { Component } from 'react';
import logo from '../static/TREXVIS1-fin1.png';
import indiaSub from '../static/india.png';
import './header.css';

class Header1 extends Component {
  render() {
    return (
      <header className="App-header">   
        <div className="header-main">
          <div className="header-main1">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={indiaSub} className="App-badge" alt="logo" />
            <h1 className="App-title">Your Travel Partner</h1> 
          </div> 
          <div className="header-info">
            <div className="header-left">Email: </div>
            <div>info@trexvisindia.com  </div>
            <div className="header-left">Call: </div>
            <div>9600013001 </div>
            <div>8248881401 </div>
            <div>044-48521938 (Landline)</div>
          </div>
        </div>   
      </header>
    );
  }
}

export default Header1;
