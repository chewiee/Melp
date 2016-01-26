var React = require('react');
var SearchBar = require('./search_bar.jsx');

var HeaderNav = React.createClass({
  render: function () {
    return(
      <div className="header">
        <div className="header-nav group">
          <div className="header-logo">
            <image src='melp_logo.png' />
          </div>
          <SearchBar />
          <div className="sign-up-log-in-container group">
            <div className="sign-up-button">
              Sign Up
            </div>
            <div className="log-in-button">
              Log In
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderNav;
