var React = require('react');
var RestaurantStore = require('../stores/restaurant_store');
var ApiUtil = require('../util/api_util');
var RestaurantIndexItem = require('./restaurant_index_item.jsx');

var RestaurantIndex = React.createClass({
  getInitialState: function () {
    return { restaurants: RestaurantStore.all() };
  },

  _onChange: function () {
    this.setState({ restaurants: RestaurantStore.all()});
  },

  componentDidMount: function () {
    this.listenerToken = RestaurantStore.addListener(this._onChange);
    ApiUtil.fetchAllRestaurants();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    return(
      <ul>
        {this.state.restaurants.map(function (restaurant) {
          return <RestaurantIndexItem
            key={restaurant.id}
            restaurant={restaurant} />;
        })}
      </ul>
    );
  }
});

module.exports = RestaurantIndex;
