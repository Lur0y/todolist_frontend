import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/Global.scss';
import './styles/Variables.scss';
import './assets/fontawesome-free-6.5.2-web/css/all.css';

let html_root = document.getElementById('root');
let root = ReactDOM.createRoot(html_root);
root.render(<App />);