import React from 'react';
import ReactDOM from 'react-dom';

import App from './Routers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// reactDom llama a su metodo render, y decimos que vamos a usar ese metodo
// en app y lo queremos pintar en html en id root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
