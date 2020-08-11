import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/Products/ProductListPage';
import Error from './Error';
import ProductCreatePage from '../pages/Products/ProductCreatePage';
import shoppingCartListPage from '../pages/shoopingCarts/shoppingCartListPage';

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={ProductListPage} />
          <Route path="/shoppingCarts" exact component={shoppingCartListPage} />
          <Route path="/createProduct" exact component={ProductCreatePage} />
          <Route path="/error" exact component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
