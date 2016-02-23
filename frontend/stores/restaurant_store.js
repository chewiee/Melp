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

var addReview = function (review) {
  _restaurants[review.restaurant.id].reviews.push(review);
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

RestaurantStore.findById = function(id) {
  for (var i=0; i<_restaurants.length; i++) {
    var restaurant = _restaurants[i];
    if (restaurant.id == id) {
      return restaurant;
    }
  }
};

RestaurantStore.loadPhoto = function(photo) {
  var restaurant = RestaurantStore.findById(photo.restaurant_id);
  if (restaurant) {
    restaurant.photos.unshift(photo);
  }
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
    case RestaurantConstants.RECEIVE_NEW_REVIEW:
      addReview(payload.review);
      RestaurantStore.__emitChange();
      break;
    case RestaurantConstants.ADD_PHOTO:
      RestaurantStore.loadPhoto(payload.photo);
      RestaurantStore.__emitChange();
      break;
  }
};

module.exports = RestaurantStore;
