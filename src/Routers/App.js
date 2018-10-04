import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';
import Registrar from '../Views/Registrar/Registrar';
import Error from '../Components/Error/Error';


import './App.css';
const App = () =>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Login} exact />
            <Route path={`${process.env.PUBLIC_URL}/Home`} component={Home} exact/>
            <Route path={`${process.env.PUBLIC_URL}/Registrar`} component={Registrar} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  
export default App; 
  