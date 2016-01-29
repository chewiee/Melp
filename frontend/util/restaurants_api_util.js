var RestaurantActions = require('../actions/restaurant_actions');

module.exports = {
  fetchAllRestaurants: function () {
    $.ajax({
      url: "api/restaurants",
      success: function (restaurants) {
        RestaurantActions.receiveAllRestaurants(restaurants);
      }
    });
  },

  fetchOneRestaurant: function (id) {
    $.ajax({
      url: "api/restaurant/" + id,
      success: function (restaurant) {
        RestaurantActions.receiveOneRestaurant(restaurant);
      }
    });
  },

  createRestaurant: function (restaurant, callback) {
    $.ajax({
      url: "api/restaurants",
      method: "POST",
      data: {restaurant: restaurant},
      success: function (restaurant) {
        RestaurantActions.receiveOneRestaurant(restaurant);
        callback(restaurant.id);
      }
    });
  }
};
