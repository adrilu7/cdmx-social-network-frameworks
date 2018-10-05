import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';
import Registrar from '../Views/Registrar/Registrar';
import Error from '../Components/Error/Error';


import './App.css';
const App = () =>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/Registrar' component={Registrar} exact />
            <Route path='/Home' component={Home} exact/>
            
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  
export default App; 
//{`${process.env.PUBLIC_URL}