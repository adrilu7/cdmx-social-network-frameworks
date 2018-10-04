import React, { Component } from 'react';
import firebase from '../../firebase/firebase';

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
 firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
 .then(() => {
    console.log('nuevo');
 }).catch((error)=>{
      alert('Este correo electronico ya esta registrado');
     })
}

  handleChange(e){ 
    this.setState({[e.target.name]: e.target.value});
     }
            
    
 render() {
  if (this.state.user){ 
    return ( 
      <Redirect to = '/home'/>
    )
  }else{
  return (
    <div className="FormD-Container">
      <h3  className="FormD-title">Regístrate</h3>
      <input type="email" name="email" placeholder="Ingresa tu email" onChange={this.handleChange} value={this.state.email}  className="FormD-input" />
      <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} value={this.state.password}  className="FormD-input" />
      <button className="BtnD-enviar" onClick={this.newUser} >Enviar</button>
      </div>
    );
  }
 }
}
export default FormD;
