import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import FormD from '../../Components/FormD/FormD';

import { Link } from 'react-router-dom';
import './Registrar.css';

class Registrar extends Component {
 
  render() {
    return (
     
      <div className="Form-Container">
      <Header/>
      <FormD/>
      <Link to = '/'>Regresar</Link>
      </div>
    
    );
  }
}

export default Registrar;