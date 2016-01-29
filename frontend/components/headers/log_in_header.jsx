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
            <img src="https://s3.amazonaws.com/melp-assets/melp_logo.png" onClick={this.loadHomePage}/>
          </div>
        </div>
      </div>
    );
  }
});
