import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/app/assets/menu/menu.css";
import "../src/app/assets/createform/createForm.css";
import "../src/app/assets/about/about.css";
import "../src/app/assets/modal/modal.css";
import "../src/app/assets/dashboard/dashboard.css";
import "../src/app/assets/benefits/benefits.css";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
