import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import Btn from '../../Components/Btn/Btn';
import LinkRegistro from '../../Components/LinkRegistro/LinkRegistro';
import Footer from '../../Components/Footer/Footer';

import './Inicio.css';

class Inicio extends Component {
  render() {
    return (
      <div className="Inicio">
        <Header/>
        <Form/>
        <Btn/>
        <LinkRegistro/>
        <Footer/>
      </div>
    );
  }
}

export default Inicio;
