import React, { Component } from 'react';
import firebase from '../../firebase/firebase';
import { Redirect } from 'react-router-dom';

import './FormD.css';

class FormD extends Component {
 constructor (props){
 super(props)
 this.newUser = this.newUser.bind(this);
 this.handleOnChange = this.handleOnChange.bind(this);
 this.state = {
    email2: '',
    password2: ''
  }  
}

componentWillMount(){
  firebase.auth().onAuthStateChanged(user => {
    this.setState({user});
  })
}

newUser(e){
 e.preventDefault();
 firebase.auth().createUserWithEmailAndPassword(this.state.email2, this.state.password2)
 .then(() => {
 }).catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode);
  alert('Este correo electronico ya esta registrado');
  console.log(errorMessage);
  });
  
 }

  handleOnChange(e){ 
    this.setState({[e.target.name]: e.target.value});
     }
    
 render() { 
  if (this.state.user){ 
    return ( 
      <Redirect to = '/Home'/>
    )
  }else { 
    return( 
    <div className="FormD-Container2">
      <h3  className="FormD-title2">Regístrate</h3>
      <form>
      <input type="email" name="email2" placeholder="Ingresa un email" onChange={this.handleOnChange} value={this.state.email}  className="FormD-input2" />
      <input type="password" name="password2" placeholder="Ingresa una contraseña" onChange={this.handleOnChange} value={this.state.password}  className="FormD-input2" />
      <button type="submit" className="BtnD-enviar" onClick={this.newUser} >Enviar</button>
      </form>
      </div>
    );
  }
 }
}
export default FormD;