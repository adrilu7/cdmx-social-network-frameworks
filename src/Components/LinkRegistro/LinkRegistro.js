import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LinkRegistro.css';

class LinkRegistro extends Component {
    render() {
  return (
    <div className="LinkRegistro1">

      <p>¿No tienes cuenta aún?</p>
      <Link to = '/Registrar'>Registrate Aquí</Link>

    </div>
   )
 }
}
export default LinkRegistro;
//<a href="views/registrar.html" title="Registro de nuevo usuario">Registrate Aquí</a>