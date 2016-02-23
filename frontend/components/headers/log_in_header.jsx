var React = require('react');

module.exports = React.createClass({

  loadHomePage: function () {
    window.location='/#/';
  },

  render: function () {
    return(
      <div className="header">
        <div className="header-nav group">
          <div className="header-logo-centered">
            <img src={window.melpLogo} onClick={this.loadHomePage}/>
          </div>
        </div>
      </div>
    );
  }
});
