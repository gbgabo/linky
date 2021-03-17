import React from 'react';
import history from './history' 
import { Router, Route, Switch } from 'react-router-dom' 
import Edit from './Edit'
import Page from './Page'

export default function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Page}/>
          <Route path='/edit' exact component={Edit}/>
        </Switch>
      </Router>
  );
}

