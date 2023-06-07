import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/_base.scss"
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App />
    </Provider>
 
);

