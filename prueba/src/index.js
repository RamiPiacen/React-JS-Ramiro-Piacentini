import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeKbsqCzjTS0m5GQ727JyddACMkD6tOlg",
  authDomain: "ramiropiacentini-react.firebaseapp.com",
  projectId: "ramiropiacentini-react",
  storageBucket: "ramiropiacentini-react.appspot.com",
  messagingSenderId: "337388703976",
  appId: "1:337388703976:web:81185d75572e2674c1795d"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
