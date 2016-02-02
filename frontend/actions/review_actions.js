var Dispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

module.exports = {
  receiveAllReviews: function (reviews) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.RECEIVE_ALL,
      reviews: reviews
    });
  },

  receiveOneReview: function (review) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.RECEIVE_ONE,
      review: review
    });
  }
};
