var React = require('react');
var RestaurantIndex = require('./restaurant_index.jsx');

var Content = React.createClass({
  render: function () {
    return(
      <div className="body">
        <div className="content">
          <RestaurantIndex />
        </div>
      </div>
    );
  }
});

module.exports = Content;
