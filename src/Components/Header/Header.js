import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import logo from '../Images/icon2.jpg';
import './Header.css';

class Header extends Component {
    render() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Cluster</h1>
      </header>
    </div>
   )
 }
}
export default Header;
