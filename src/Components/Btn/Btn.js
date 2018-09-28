import React, { Component } from 'react'; //estructura un objeto tomamos objetos o variables
import { Redirect } from 'react-router-dom';
import firebase from '../firebase/firebase';

import './Btn.css';

class Btn extends Component {// clases de los componentes y heredan de la clase padre component
  constructor () { //cada que se modifica el estado render se pintara de nuevo
    super (); 
    this.state = { // this.state para definir estado
      user: null // una propiedad user que sera null el usuario estara vacio
    };
    // todas las funciones indicamos referencia al objeto this
    this.handleAuth= this.handleAuth.bind(this);// 
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }
  
  componentWillMount(){ //metodo de ciclo de vida que se activa cuando el componente es llamanda
    firebase.auth().onAuthStateChanged(user =>{ //funcion cada vez que nos logueamos se obtiene info
      this.setState({user});//se modifica estado lo que sea en el momento user null o info
    });
  }

  handleAuth (){ //crea provedor de google para utilizar
    const provider= new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider) //se llama api de firebase
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))// promesa con template
    .catch(error => console.log(`Error ${error.code}: ${error.message}`)); //e
  }

  handleLogout(){//cerrar sesion
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} has salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton () {
    if (this.state.user){ //si el usuario esta loguueado
      return ( 
        <Redirect to = '/home'/>
        //<div>
          //<img src ={this.state.user.photoURL} alt={this.state.user.displayName}/>
          //<p>Bienvenido {this.state.user.displayName}!</p>
          //<button onClick={this.handleLogout}>Salir</button> 
        //</div>
      );
    }else { //si no esta logueado
      return( //boton que llama a una funcion handleAuth con this
        //<Redirect to = '/Inicio'/>//this hacemos referencia a la clase app
<button className="BtnGoogle1" onClick={this.handleAuth}>Google</button>
        //<button onClick={this.handleAuth}>Login con Google</button> 
      );
    }
  }
  
  render () { //reenderiza el html del componente
    return (
        <div className="Btn">
          {this.renderLoginButton()}
          <button className="BtnFacebook1">Facebook</button>
        </div>
    );
  }
}
export default Btn; //exporta toda la clase app