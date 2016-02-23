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
  },

  receiveNewReview: function (review) {
    Dispatcher.dispatch({
      actionType: RestaurantConstants.RECEIVE_NEW_REVIEW,
      review: review
    });
  },

  addPhoto: function (photo) {
    Dispatcher.dispatch({
      actionType: RestaurantConstants.ADD_PHOTO,
      photo: photo
    });
  }
};
