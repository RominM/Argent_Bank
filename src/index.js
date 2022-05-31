// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
// APP
import App from './App';
// Style
import './style/style.css';

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
