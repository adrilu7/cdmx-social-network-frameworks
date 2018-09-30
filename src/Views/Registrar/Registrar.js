import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import './Registrar.css';

class Registrar extends Component {
  render() {
    return (
     
      <div className="Form-Container">
      <form className="Form-Form">
      <Header/>
      <h3  className="Form-title">Regístrate</h3>
      <input type="email" className="Form-input" placeholder="Ingresa un email"/>
      <input type="password" className="Form-input" placeholder="Crea una contraseña"/>
      <button className="Btn-enviar" >Enviar</button>

      <Link to = '/'>Regresar</Link>
      </form>
      </div>
    
    );
  }
}

export default Registrar;
