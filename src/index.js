import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './WeatherCard.css';
import "./App.css";


ReactDOM.render(
  <div>
    <App className="App"/>
  </div>, document.getElementById('root'));
  registerServiceWorker();
