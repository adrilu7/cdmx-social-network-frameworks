import React, { Component } from 'react';
import firebase from '../../firebase/firebase';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './FormD.css';

class FormD extends Component {
 constructor (props){
//console.log(props)
 super(props)
 this.state = {
    email: '',
    password: ''
}
    this.newUser = this.newUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

newUser(e){
  e.preventDefault();
 firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
 .then(() => {
    console.log('nuevo');
 }).catch((error)=>{
      alert('Este correo electronico ya esta registrado');
     })
}

  handleChange(e){ 
    this.setState({ [e.target.name]: e.target.value});
     }
            
    
 render() {
  return (
    <div className="FormD-Container">
      <h3  className="FormD-title">Regístrate</h3>
      <input type="email" value={this.state.email} onChange={this.handleChange} className="FormD-input" placeholder="Ingresa tu email"/>
      <input type="password" value={this.state.password} onChange={this.handleChange} className="FormD-input" placeholder="Ingresa tu contraseña"/>
      <button className="BtnD-enviar" onClick={this.newUse} >Enviar</button>
      </div>
    )
  }
}

export default FormD;