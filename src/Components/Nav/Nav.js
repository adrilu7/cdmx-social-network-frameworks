import React, { Component } from 'react'; 
import { Redirect } from "react-router-dom";
import firebase from '../../firebase/firebase';
import {  fallDown as Menu } from "react-burger-menu";

import './Nav.css';

class Nav extends Component {
 constructor (props) { 
    super (props); 
    this.state = { 
      user: null 
    };
  }

  componentWillMount(){ 
    firebase.auth().onAuthStateChanged(user =>{ 
      this.setState({user});
      console.log(user);
    });
  }
  LogOut = () => {
    firebase.auth()
        .signOut()
        .then(result => {
          <Redirect to = '/' />
          console.log(`Se ha cerrado sesión`)})
        .catch(error => console.log(`Error ${error.code}`));
}


render = () => {
    if (!this.state.user){
        return (
       <p>.</p>
           //<Redirect to="/"/>
            )
         
    } else {
    return (
  <div className="Dos ">
        <Menu className="Menu">
        <img className="img" src={this.state.user.photoURL} />
        <p>Bienvenid@</p>
        <p>{this.state.user.displayName}</p>
        <button className="logoUt" onClick={this.logOut}> Salir </button>
      
    </Menu>
    </div>
   )
    }

}

}

export default Nav

