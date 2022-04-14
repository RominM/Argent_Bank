import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './style/main.css';
import { store } from './redux_old/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
