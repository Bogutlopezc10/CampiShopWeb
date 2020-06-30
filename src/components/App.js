import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/Products/ProductListPage';
import Error from './Error';

const App = () => {
    return (
      <div>
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={ProductListPage} />
                <Route path="/error" exact component={Error} />
            </Switch>
        </Router>
      </div>
    );
  };
  
  export default App;