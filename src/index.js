import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/_base.scss"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <Router>
    <App />
    </Router>
    </Provider>
 
);

