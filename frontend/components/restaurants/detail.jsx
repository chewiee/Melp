var React = require('react');
var RestaurantStore = require('../../stores/restaurant_store');
var ApiUtil = require('../../util/restaurants_api_util');

var RestaurantDetail = React.createClass({
  getStateFromStore: function () {
    return { restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)) };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchOneRestaurant(parseInt(newProps.params.restaurantId));
  },

  componentDidMount: function () {
    this.restaurantListener = RestaurantStore.addListener(this._onChange);
    ApiUtil.fetchOneRestaurant(parseInt(this.props.params.restaurantId));
  },

componentWillUnmount: function () {
    this.restaurantListener.remove();
  },

  render: function () {
    if (this.state.restaurant === undefined) { return (<div> </div>); }

    return(
      <div>{this.state.restaurant.name}</div>
    );
  }
});

module.exports = RestaurantDetail;
