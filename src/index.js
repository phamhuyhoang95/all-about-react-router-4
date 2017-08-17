require('./index.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';

import CardProfile from './components/card-profile';
import CardAccordion from './components/card-accordion';
import CardInterests from './components/card-interests';
import AlertBox from './components/alert-box';

const docRoot = document.getElementById('root');

const PrimaryLayout = props => (
  <div className="primary-layout">
    {/* priamry header */}
    <Primaryheader />
    {/* end priamry header */}

    {/* main content */}
    <main role="main">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/news" component={NewsPage} />
        <Route path="/account-setting" component={AccountSettingPage} />
        <Route path="/messages" component={MessagePage} />
        <Route path="/my-account" component={MyAccountPage} />
        <Route path="/users" component={UserSubLayout} />
        <Route path="/products" component={ProductSubLayout} />
        <Redirect to="/" />
      </Switch>
    </main>
    {/* end main content */}

    {/* primary footer */}
    <PrimaryFooter />
    {/* end primary footer */}
  </div>
);

const Primaryheader = () => (
  <header className="w3-top">
    {/* Navbar */}
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
      <NavLink
        to="/"
        className="w3-bar-item w3-button w3-padding-large"
        activeClassName="w3-theme-d4"
        exact
      >
        <i className="fa fa-home w3-margin-right"></i>Logo
      </NavLink>
      <NavLink
        to="/news"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="News"
        activeClassName="w3-theme-d4"
      >
        <i className="fa fa-globe"></i>
      </NavLink>
      <NavLink
        to="/account-setting"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Account Settings"
        activeClassName="w3-theme-d4"
      >
        <i className="fa fa-user"></i>
      </NavLink>
      <NavLink
        to="/messages"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Messages"
        activeClassName="w3-theme-d4"
      >
        <i className="fa fa-envelope"></i>
      </NavLink>

      <div className="w3-dropdown-hover w3-hide-small">
        <button className="w3-button w3-padding-large" title="Notifications">
          <i className="fa fa-bell"></i>
          <span className="w3-badge w3-right w3-small w3-green">3</span>
        </button>
        <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
          <NavLink to="/" className="w3-bar-item w3-button">One new friend request</NavLink>
          <NavLink to="/" className="w3-bar-item w3-button">John Doe posted on your wall</NavLink>
          <NavLink to="/" className="w3-bar-item w3-button">Jane likes your post</NavLink>
        </div>
      </div>

      <NavLink
        to="/my-account"
        className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
        title="My Account"
      >
        <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" className="w3-circle" style={{ height: '25px', width: '25px' }} alt="Avatar" />
      </NavLink>
    </div>
  </header>
);

const PrimaryFooter = () => (
  <div>
    <footer className="w3-container w3-theme-d3 w3-padding-16">
      <h5>Footer</h5>
    </footer>
    <footer className="w3-container w3-theme-d5">
      <p>Powered by <NavLink to="http://sydinh.github.io/" target="_blank">Sy Dinh</NavLink></p>
    </footer>
  </div>
);

const HomePage = () => (
  <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
    {/* The Grid */}
    <div className="w3-row">
      {/* Left Column */}
      <div className="w3-col m3">
        {/* Profile */}
        <CardProfile />
        <br />
        {/* Accordion */}
        <CardAccordion />
        <br />
        {/* Interests */}
        <CardInterests />
        <br />
        {/* Alert Box */}
        <AlertBox />
      </div>
      {/* End Left Column */}

      {/* Middle Column */}
      <div className="w3-col m7">

        <div className="w3-row-padding">
          <div className="w3-col m12">
            <div className="w3-card-2 w3-round w3-white">
              <div className="w3-container w3-padding">
                <h6 className="w3-opacity">Social Media</h6>
                <p contentEditable className="w3-border w3-padding">Status: Feeling Blue</p>
                <button type="button" className="w3-button w3-theme">
                  <i className="fa fa-pencil"></i> &nbsp;Post
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w3-container w3-card-2 w3-white w3-round w3-margin"><br />
          <img src="https://avatars3.githubusercontent.com/u/98681?v=4" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
          <span className="w3-right w3-opacity">1 min</span>
          <h4>Mark Otto</h4><br />
          <hr className="w3-clear" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="w3-row-padding" style={{ margin: '0 -16px'}}>
              <div className="w3-half">
                <img src="https://avatars3.githubusercontent.com/u/98681?v=4" style={{ width: '100%' }} alt="Northern Lights" className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://avatars3.githubusercontent.com/u/12647491?v=4" style={{ width: '100%' }} alt="Nature" className="w3-margin-bottom" />
            </div>
          </div>
          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
            <i className="fa fa-thumbs-up"></i> &nbsp;Like
          </button>
          <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-comment"></i> &nbsp;Comment
          </button>
        </div>

        <div className="w3-container w3-card-2 w3-white w3-round w3-margin"><br />
          <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
          <span className="w3-right w3-opacity">16 min</span>
          <h4>Sy Dinh</h4><br />
          <hr className="w3-clear" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
            <i className="fa fa-thumbs-up"></i> &nbsp;Like
          </button>
          <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-comment"></i> &nbsp;Comment
          </button>
        </div>

        <div className="w3-container w3-card-2 w3-white w3-round w3-margin"><br />
          <img src="https://avatars3.githubusercontent.com/u/12647491?v=4" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
          <span className="w3-right w3-opacity">32 min</span>
          <h4>Cuong Ba</h4><br />
          <hr className="w3-clear" />
          <p>Have you seen this?</p>
          <img src="https://avatars0.githubusercontent.com/u/69156?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
            <i className="fa fa-thumbs-up"></i> &nbsp;Like
          </button>
          <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-comment"></i> &nbsp;Comment
          </button>
        </div>

      {/* End Middle Column */}
      </div>

      {/* Right Column */}
      <div className="w3-col m2">
        <div className="w3-card-2 w3-round w3-white w3-center">
          <div className="w3-container">
            <p>Upcoming Events:</p>
            <img src="https://avatars2.githubusercontent.com/u/176013?v=4" alt="Forest" style={{ width: '100%' }} />
            <p><strong>Holiday</strong></p>
            <p>Friday 15:00</p>
            <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
          </div>
        </div>
        <br />

        <div className="w3-card-2 w3-round w3-white w3-center">
          <div className="w3-container">
            <p>Friend Request</p>
            <img src="https://avatars3.githubusercontent.com/u/1388706?v=4" alt="Avatar" style={{ width: '50%' }} /><br />
            <span>Jane Doe</span>
            <div className="w3-row w3-opacity">
              <div className="w3-half">
                <button className="w3-button w3-block w3-green w3-section" title="Accept">
                  <i className="fa fa-check"></i>
                </button>
              </div>
              <div className="w3-half">
                <button className="w3-button w3-block w3-red w3-section" title="Decline">
                  <i className="fa fa-remove"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="w3-card-2 w3-round w3-white w3-padding-16 w3-center">
          <p>ADS</p>
        </div>
        <br />

        <div className="w3-card-2 w3-round w3-white w3-padding-32 w3-center">
          <p><i className="fa fa-bug w3-xxlarge"></i></p>
        </div>

      {/* End Right Column */}
      </div>

    {/* End Grid */}
    </div>

  {/* End Page Container */}
  <br />
  </div>
);

const NewsPage = () => (
  <div className="w3-container w3-content new-page" style={{ maxWidth: '1400px', marginTop: '80px' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos et, maiores placeat culpa voluptatum. Quos porro quibusdam sint neque. Incidunt aliquid impedit sed officia consectetur quos. Dolore inventore et natus. Mollitia optio libero praesentium alias? Quam, cum incidunt voluptatum quis eveniet adipisci facilis optio aliquid tempora corporis amet sunt aliquam dolorum, impedit, molestias quia est dignissimos obcaecati? Maiores, dignissimos laborum soluta, quam tenetur ea vero cupiditate distinctio itaque molestiae, id atque asperiores provident? Quasi molestiae nemo eligendi quis quisquam recusandae impedit eos mollitia non, sit sint corporis suscipit neque, assumenda eveniet, id itaque. Commodi saepe vero debitis vel sint?</p>
    <hr />
    <h1>News page</h1>
  </div>
);

const AccountSettingPage = () => (
  <div className="w3-container w3-content account-setting-page" style={{ maxWidth: '1400px', marginTop: '80px' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos et, maiores placeat culpa voluptatum. Quos porro quibusdam sint neque. Incidunt aliquid impedit sed officia consectetur quos. Dolore inventore et natus. Mollitia optio libero praesentium alias? Quam, cum incidunt voluptatum quis eveniet adipisci facilis optio aliquid tempora corporis amet sunt aliquam dolorum, impedit, molestias quia est dignissimos obcaecati? Maiores, dignissimos laborum soluta, quam tenetur ea vero cupiditate distinctio itaque molestiae, id atque asperiores provident? Quasi molestiae nemo eligendi quis quisquam recusandae impedit eos mollitia non, sit sint corporis suscipit neque, assumenda eveniet, id itaque. Commodi saepe vero debitis vel sint?</p>
    <hr />
    <h1>Account setting page</h1>
  </div>
);

const MessagePage = () => (
  <div className="w3-container w3-content message-page" style={{ maxWidth: '1400px', marginTop: '80px' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos et, maiores placeat culpa voluptatum. Quos porro quibusdam sint neque. Incidunt aliquid impedit sed officia consectetur quos. Dolore inventore et natus. Mollitia optio libero praesentium alias? Quam, cum incidunt voluptatum quis eveniet adipisci facilis optio aliquid tempora corporis amet sunt aliquam dolorum, impedit, molestias quia est dignissimos obcaecati? Maiores, dignissimos laborum soluta, quam tenetur ea vero cupiditate distinctio itaque molestiae, id atque asperiores provident? Quasi molestiae nemo eligendi quis quisquam recusandae impedit eos mollitia non, sit sint corporis suscipit neque, assumenda eveniet, id itaque. Commodi saepe vero debitis vel sint?</p>
    <hr />
    <h1>Message page</h1>
  </div>
);

const MyAccountPage = () => (
  <div className="w3-container w3-content my-account-page" style={{ maxWidth: '1400px', marginTop: '80px' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos et, maiores placeat culpa voluptatum. Quos porro quibusdam sint neque. Incidunt aliquid impedit sed officia consectetur quos. Dolore inventore et natus. Mollitia optio libero praesentium alias? Quam, cum incidunt voluptatum quis eveniet adipisci facilis optio aliquid tempora corporis amet sunt aliquam dolorum, impedit, molestias quia est dignissimos obcaecati? Maiores, dignissimos laborum soluta, quam tenetur ea vero cupiditate distinctio itaque molestiae, id atque asperiores provident? Quasi molestiae nemo eligendi quis quisquam recusandae impedit eos mollitia non, sit sint corporis suscipit neque, assumenda eveniet, id itaque. Commodi saepe vero debitis vel sint?</p>
    <hr />
    <h1>My Account Page</h1>
  </div>
);

const UserSubLayout = props => {
  const { match } = props;
  return (
    <div className="user-sub-layout">
      <aside>
        <UserNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={match.path} component={BrowseUsersPage} exact />
          <Route path={`${match.path}/add`} component={AddUserPage} />
          <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
          <Route path={`${match.path}/:userId`} component={UserProfilePage} />
        </Switch>
      </div>
    </div>
  );
};

const BrowseUsersPage = () => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <BrowseUserTable />
    </div>
  </div>
);

const AddUserPage = () => <div>Add User Page</div>
const EditUserPage = () => <div>Edit User Page</div>

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

render(
  <Router>
    <PrimaryLayout />
  </Router>,
  docRoot
);
