require('./index.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const docRoot = document.getElementById('root');

const PrimaryLayout = props => (
  <div className="primary-layout">
    <Primaryheader />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/users" component={BrowseUsersPage} exact />
        <Route path="/users/:userId" component={UserProfilePage} />
        <Route path="/products" component={BrowseProductsPage} exact />
        <Route path="/products/:productId" component={ProductProfilePage} />
        <Redirect to="/" />
      </Switch>
    </main>
    <PrimaryFooter />
  </div>
);

const Primaryheader = () => (
  <header>
    Header: Our React Router 4 App
    <Route path="/users" component={UsersMenu} />
    <hr/>
  </header>
);

const PrimaryFooter = () => (
  <footer>
    <hr/>
    Footer: Our React Router 4 App
  </footer>
);

const HomePage = () => <div>Home Page</div>
const UsersMenu = () => <div>Users Menu</div>
const BrowseUsersPage = () => <div>Browse Users Page</div>
const UserProfilePage = () => <div>User Profile Page</div>
const BrowseProductsPage = () => <div>Browse Products Page</div>
const ProductProfilePage = () => <div>Product Profile Page</div>
const NoMatchPage = () => <div>404 Not Found</div>

render(
  <Router>
    <PrimaryLayout />
  </Router>,
  docRoot
);
