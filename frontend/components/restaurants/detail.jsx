var React = require('react');
var RestaurantStore = require('../../stores/restaurant_store');
var ApiUtil = require('../../util/restaurants_api_util');

var ReviewList = require('../reviews/list.jsx');

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

  _onChange: function () {
    var restaurantId = this.props.params.restaurantId;
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (this.state.restaurant === undefined) { return (<div> </div>); }

    return(
      <div className="restaurant-detail-content">
        <div className="restaurant-detail-header">
          <h1>{this.state.restaurant.name}</h1>
          <div className="restaurant-detail-info">
            <div className="restaurant-address">
              {this.state.restaurant.address}
            </div>
            <div className="restaurant-city">
              {this.state.restaurant.city}
            </div>
            <a href={"http://" + this.state.restaurant.website}>
              {this.state.restaurant.website}
            </a>
            <div className="restaurant-phone-number">
              {this.state.restaurant.phone_number}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = RestaurantDetail;
