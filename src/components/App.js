import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
      <div>
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </Router>
      </div>
    );
  };
  
  export default App;