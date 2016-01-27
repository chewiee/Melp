var React = require('react');
var SearchBar = require('./search_bar.jsx');

var HeaderNav = React.createClass({
  loadSignUpPage: function () {
    window.location='/api/users/new#sign-up';
  },

  loadLogInPage: function () {
    window.location='/api/users/new#log-in';
  },

  loadHomePage: function () {
    window.location='/#/';
  },

  render: function () {
    return(
      <div className="header">
        <div className="header-nav group">
          <div className="header-logo">
            <img src="assets/melp_logo.png" onClick={this.loadHomePage}/>
          </div>
          <SearchBar />
          <div className="sign-up-log-in-container group">
            <div className="sign-up-button header-button"
              onClick={this.loadSignUpPage}>
              Sign Up
            </div>
            <div className="log-in-button header-button-2"
              onClick={this.loadLogInPage}>
              Log In
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderNav;
