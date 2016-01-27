var Dispatcher = require('../dispatcher/dispatcher');
var RestaurantConstants = require('../constants/restaurant_constants');

module.exports = {
  receiveAllRestaurants: function (restaurants) {
    Dispatcher.dispatch({
      actionType: RestaurantConstants.RECEIVE_ALL,
      restaurants: restaurants
    });
  },

  receiveOneRestaurant: function (restaurant) {
    Dispatcher.dispatch({
      actionType: RestaurantConstants.RECEIVE_ONE,
      restaurant: restaurant
    });
  }
};
