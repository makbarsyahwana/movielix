import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, Switch, Redirect} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from '../src/context/globalState'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router history={history}>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
