var React = require('react');
var History = require('react-router').History;
var SearchBar = require('./search_bar.jsx');

module.exports = React.createClass({
  mixins: [History],

  loadSignUpPage: function () {
    this.history.pushState(null, '/users/new', {});
  },

  loadLogInPage: function () {
    this.history.pushState(null, '/users/new', {});
  },

  loadHomePage: function () {
    window.location='/#/';
  },

  render: function () {
    return(
      <div className="header">
        <div className="header-nav group">
          <div className="header-logo">
            <img src={window.melpLogo} onClick={this.loadHomePage}/>
          </div>
          <SearchBar />
          <div className="sign-up-log-in-container group">
            <a className="sign-up-button header-button"
              href="#/users/new">
              Sign Up
            </a>
            <a className="log-in-button header-button-2"
              href="#/session/new">
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
});
