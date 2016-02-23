var React = require('react');
var SearchBar = require('./search_bar.jsx');
var UserDropdown = require('./user_dropdown.jsx');

module.exports = React.createClass({
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
          <UserDropdown />
        </div>
      </div>
    );
  }
});
