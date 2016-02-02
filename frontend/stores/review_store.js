var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ReviewConstants = require('../constants/review_constants.js');
var ReviewStore = new Store(AppDispatcher);

var _reviews = {};

var resetReviews = function (reviews) {
  _reviews = {};
  reviews.forEach(function (review) {
    _reviews[review.id] = review;
  });
};

var resetReview = function (review) {
  _reviews[review.id] = review;
};

ReviewStore.all = function () {
  var reviews = [];
  for (var id in _reviews) {
    reviews.push(_reviews[id]);
  }
  return reviews;
};

ReviewStore.find = function (id) {
  return _reviews[id];
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ReviewConstants.RECEIVE_ALL:
      resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.RECEIVE_ONE:
      resetReview(payload.review);
      ReviewStore.__emitChange();
      break;
  }
};

module.exports = ReviewStore;
