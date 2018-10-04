import React, { Component } from 'react';
//import Logout from '../../Components/Logout/Logout';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { Redirect } from 'react-router-dom';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });
  }

    logOut = () => {
        firebase.auth()
            .signOut()
            .then(result => console.log(`${result.user.email} bye`))
            .catch(error => console.log(`Error ${error.code}`));
    }
    redirectLogin = () => {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }
  render() {
    return (
      <div className="Home1">
      <p>Bienvenido </p>
      <button  className="BtnSalir" onClick={this.logOut}>Salir</button>
      </div>
    );
  }
}

export default Home;
//<BtnLogout/>
