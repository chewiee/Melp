var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RestaurantConstants = require('../constants/restaurant_constants.js');
var RestaurantStore = new Store(AppDispatcher);

var _restaurants = {};

var resetRestaurants = function (restaurants) {
  _restaurants = {};
  restaurants.forEach(function (restaurant) {
    _restaurants[restaurant.id] = restaurant;
  });
};

var resetRestaurant = function (restaurant) {
  _restaurants[restaurant.id] = restaurant;
};

RestaurantStore.all = function () {
  var restaurants = [];
  for (var id in _restaurants) {
    restaurants.push(_restaurants[id]);
  }
  return restaurants;
};

RestaurantStore.find = function (id) {
  return _restaurants[id];
};

RestaurantStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RestaurantConstants.RECEIVE_ALL:
      resetRestaurants(payload.restaurants);
      RestaurantStore.__emitChange();
      break;
    case RestaurantConstants.RECEIVE_ONE:
      resetRestaurant(payload.restaurant);
      RestaurantStore.__emitChange();
      break;
  }
};

module.exports = RestaurantStore;
