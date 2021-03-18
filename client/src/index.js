import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import history from './history' 
import { Router, Route, Switch } from 'react-router-dom' 
import Edit from './pages/Edit'
import Page from './pages/Page'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
        <Switch>
          <Route path='/' exact component={Page}/>
          <Route path='/edit' exact component={Edit}/>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
