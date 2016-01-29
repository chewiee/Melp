var React = require('react');
var ApiUtil = require('./../../util/user_session_api_util');

module.exports = React.createClass({
  showDropdown: function () {
    $('.header-user-dropdown-content').toggleClass('show');
  },

  logOut: function () {
    ApiUtil.logout();
  },

  render: function () {
    return(
      <div>
        <div className="header-button header-user group">
          <div className="header-user-avatar">
          </div>
          <div className="header-user-arrow"
            onClick={this.showDropdown}>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
        <div className="header-user-dropdown">
          <div className="header-user-dropdown-content">
            <div className="header-button header-logout" onClick={this.logOut}>
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }
});
