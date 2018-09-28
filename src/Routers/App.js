import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';
import Btn from '../Components/Btn/Btn';
import LinkRegistro from '../Components/LinkRegistro/LinkRegistro';
import Home from '../Views/Home/Home';
import Inicio from '../Views/Inicio/Inicio';
import Footer from '../Components/Footer/Footer'
import Registrar from '../Views/Registrar/Registrar'
//import Registrar from '../Views/Registrar/Registrar';
//import BtnLogout from '../Components/BtnLogout/BtnLogout';

import './App.css';
const App = () =>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/Home" component={Home} />
            <Route path="/Header" component={Header} />
            <Route path="/Form" component={Form} />
            <Route path="/Btn" component={Btn} />
            <Route path="/Footer" component={Footer} />
            <Route path="/Registar" component={Registrar} />
            <Route path="/LinkRegistro" component={LinkRegistro} />
            
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  
export default App; 
 //<Route path="/Registrar" component={Registrar} />
  //<Route path="/BtnLogout" component={BtnLogout} />