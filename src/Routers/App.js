import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';
import Registrar from '../Views/Registrar/Registrar';

import './App.css';
const App = () =>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Home" component={Home} />
            <Route path="/Registrar" component={Registrar} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  
export default App; 
  