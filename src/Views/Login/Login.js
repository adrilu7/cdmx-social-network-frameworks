import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import BtnLink from '../../Components/BtnLink/BtnLink';
import Footer from '../../Components/Footer/Footer';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Header/>
        <Form/>
        <BtnLink/>
        <Footer/>
      </div>
    );
  }
}

export default Login;
