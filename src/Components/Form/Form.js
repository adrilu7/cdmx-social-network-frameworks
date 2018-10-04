import React, { Component } from 'react';
import firebase from '../../firebase/firebase';
import { Redirect } from 'react-router-dom';

import './Form.css';

class Form extends Component {
  constructor (props){
 //console.log(props)
  super(props)
  this.singIn = this.singIn.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.state = {
     email: '',
     password: ''
    } 
 }
 
 componentWillMount(){
  firebase.auth().onAuthStateChanged(user => {
    this.setState({user});
  })
}

 singIn(e){
  e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
  }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('E-mail incorrecto');
      alert('Contraseña incorrecto');
      })
 }
 
   handleChange(e){ 
     this.setState({[e.target.name]: e.target.value});
      }
             
     
  render() {
    if (this.state.user){ 
      return ( 
        <Redirect to = '/Home'/>
      )
    }else { 
   return (
     <div className="Form-Container">
       <h3  className="Form-title">Iniciar sesión</h3>
       <input type="email" name="email" placeholder="Ingresa tu email" onChange={this.handleChange} value={this.state.email}  className="Form-input" />
       <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} value={this.state.password}  className="Form-input" />
       <button className="BtnD-enviar" onClick={this.singIn} >Enviar</button>
       </div>
     )
   }
 }
}
export default Form;


