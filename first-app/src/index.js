import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <div className ='row'>
    <App name ="Meryem" price = {9.99}/>
    <App name ="Melike" price = {10.99}/>
    <App name ="Ali" price = {11.99}/>
    <App name ="Aydin" price = {12.99}/>
    <App name ="Murat" price = {13.99}/>
  </div>,
  document.getElementById('root')
);

