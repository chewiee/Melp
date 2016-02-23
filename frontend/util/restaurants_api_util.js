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
      url: "api/restaurants/" + id,
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
  },

  uploadRestaurantPhoto: function (id, formData, callback) {
    $.ajax({
      method: "POST",
      url: "api/restaurants/" + id + "/photos",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(photo) {
        RestaurantActions.addPhoto(photo);

        callback && callback();
      }
    });
  }
};
