import React from 'react';
import ReactDOM from 'react-dom/client';  //connect React package with DOM
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <App />
);


//This is mounting App to root in the index.html file 
//This replaces the HTML with the App component


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
