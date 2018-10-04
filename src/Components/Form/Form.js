import React, { Component } from 'react';

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

class Form extends Component {
  constructor (props){
 //console.log(props)
  super(props)
  this.state = {
     email: '',
     password: ''
 }
     this.admin = this.admin.bind(this);
     this.handleChangeD = this.handleChangeD.bind(this);
 }
 
 admin(e){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
     console.log('nuevo');
  }).catch((error)=>{
       alert('Este correo electronico ya esta registrado');
      })
 }
 
   handleChangeD(e){ 
     this.setState({[e.target.name]: e.target.value});
      }
             
     
  render() {
   return (
     <div className="FormD-Container">
       <h3  className="FormD-title">Regístrate</h3>
       <input type="email" name="email" placeholder="Ingresa tu email" onChange={this.handleChangeD} value={this.state.email}  className="FormD-input" />
       <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChangeD} value={this.state.password}  className="FormD-input" />
       <button className="BtnD-enviar" onClick={this.admin} >Enviar</button>
       </div>
     )
   }
 }
 


export default Form;