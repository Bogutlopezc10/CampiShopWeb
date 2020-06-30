import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
  
  export default App;