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
        <Route path="/users" component={UserSubLayout} />
        <Route path="/products" component={ProductSubLayout} />
        <Redirect to="/" />
      </Switch>
    </main>
    <PrimaryFooter />
  </div>
);

const Primaryheader = () => (
  <header>
    Header: Our React Router 4 App
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

const UserSubLayout = props => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={props.match.path} component={BrowseUsersPage} exact />
        <Route path={`${props.match.path}/:userId`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
);

const BrowseUsersPage = () => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <BrowseUserTable />
    </div>
  </div>
);

const UserProfilePage = props => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <UserProfile userId={props.match.params.userId} />
    </div>
  </div>
);

const UserNav = () => <div>User Nav</div>
const BrowseUserTable = () => <div>Browse User Table</div>
const UserProfile = props => <div>User Profile {props.userId}</div>

const ProductSubLayout = props => (
  <div className="product-sub-layout">
    <aside>
      <ProductNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={props.match.path} component={BrowseProductsPage} exact />
        <Route path={`${props.match.path}/:productId`} component={ProductProfilePage} />
      </Switch>
    </div>
  </div>
);

const ProductNav = () => <div>Product Nav</div>
const BrowseProductsPage = () => <div>Browse Products Page</div>
const ProductProfilePage = () => <div>Product Profile Page</div>

const NoMatchPage = () => <div>404 Not Found</div>

render(
  <Router>
    <PrimaryLayout />
  </Router>,
  docRoot
);
