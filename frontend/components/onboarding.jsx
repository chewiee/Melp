var React = require('react');

var CurrentUserStore = require('../stores/current_user_store');
var UserInfoForm = require('./users/user_info_form.jsx');

var Onboarding = React.createClass({
  render: function () {
    return(
      <div className="welcome-header">
        <h2>Welcome to Melp!</h2>
        <UserInfoForm />
      </div>
    );
  }
});

module.exports = Onboarding;
