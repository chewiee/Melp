var React = require('react');
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/restaurant/' + this.props.restaurant.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="restaurant-index-item">
        <p>Name: {this.props.restaurant.name}</p>
        <p>Address: {this.props.restaurant.address}</p>
      </li>
    );
  }
});
