import React, { Component } from 'react'; 
import { Redirect, Link } from 'react-router-dom';
import firebase from '../../firebase/firebase';

import './BtnLink.css';

class BtnLink extends Component {
  constructor () { 
    super (); 
    this.state = { 
      user: null 
    };
    
    // this.handleAuthGoogle= this.handleAuth.bind(this);
    // this.handleAuthFacebook= this.handleAuthFacebook.bind(this);
  }
  
  componentWillMount(){ 
    firebase.auth().onAuthStateChanged(user =>{ 
      this.setState({user});
    });
  }

  handleAuthGoogle (){ 
    const provider= new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider) 
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`)); 
  }

  handleAuthFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

  render () {
    if (this.state.user){ 
      return ( 
        <Redirect to = '/Home'/>
      )
    }else { 
      return( 
        <div className="Btn">
        <button className="BtnGoogle1" onClick={this.handleAuthGoogle}>Google</button>
        <button  className="BtnFacebook1" onClick={this.handleAuthFacebook}>Facebook</button>
           <p>¿No tienes cuenta aún?</p>
          <Link to = '/Registrar'>Registrate Aquí</Link>
          </div>
      );
    }
  } 
}
export default BtnLink; 
