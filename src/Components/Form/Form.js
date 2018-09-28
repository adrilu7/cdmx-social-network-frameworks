import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './Form.css';

class Form extends Component {
    render() {
  return (
    <div className="Form-Container">
      <form className="Form-Form">
      <h3  className="Form-title">Iniciar sesión</h3>
      <input type="email" className="Form-input" placeholder="Ingresa tu email"/>
      <input type="password" className="Form-input" placeholder="Ingresa tu contraseña"/>
      <button className="Btn-enviar" >Enviar</button>
      </form>
      </div>
    )
  }
}

export default Form;