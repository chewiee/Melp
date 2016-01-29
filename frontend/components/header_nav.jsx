var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/user_session_api_util.js');
var CurrentUserStore = require('../stores/current_user_store');

var LoggedOutHeader = require('./headers/logged_out_header.jsx');
var LogInHeader = require('./headers/log_in_header.jsx');
var LoggedInHeader = require('./headers/logged_in_header.jsx');

var HeaderNav = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    ApiUtil.fetchCurrentUser();

    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function () {
    var logInPage = window.location.hash.includes("#/users/new") ||
      window.location.hash.includes("#/session/new");

    if (CurrentUserStore.isLoggedIn()) {
      return(<LoggedInHeader />);
    } else if (logInPage) {
      return (<LogInHeader />);
    } else {
      return(<LoggedOutHeader />);
    }
  }
});

module.exports = HeaderNav;
